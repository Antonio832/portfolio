import React from 'react';
import Sketch from 'react-p5';

const StarCanvas = ({count}) => {

    let history = []

    let flock

    // START
    function Flock() {
        // An array for all the boids
        this.boids = []; // Initialize the array
    }
      
    Flock.prototype.run = function(p5) {
        for (let i = 0; i < this.boids.length; i++) {
            this.boids[i].run(this.boids, p5);  // Passing the entire list of boids to each boid individually
        }
    }
      
    Flock.prototype.addBoid = function(b) {
        this.boids.push(b);
    }
      
    function Boid(x, y, p5) {
        
        this.acceleration = p5.createVector(0, 0);
        this.velocity = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));
        this.position = p5.createVector(x, y);
        this.r = 3.0;
        this.maxspeed = 3;    // Maximum speed
        this.maxforce = 0.05; // Maximum steering force
    }
      
    Boid.prototype.run = function(boids, p5) {
        this.flock(boids, p5);
        this.update();
        this.borders(p5);
        this.render(p5);
    }
      
    Boid.prototype.applyForce = function(force) {
        // We could add mass here if we want A = F / M
        this.acceleration.add(force);
    }
      
    // We accumulate a new acceleration each time based on three rules
    Boid.prototype.flock = function(boids, p5) {
        let sep = this.separate(boids, p5);   // Separation
        let ali = this.align(boids, p5);      // Alignment
        let coh = this.cohesion(boids, p5);   // Cohesion
        // Arbitrarily weight these forces
        sep.mult(1.5);
        ali.mult(1.0);
        coh.mult(1.0);
        // Add the force vectors to acceleration
        this.applyForce(sep);
        this.applyForce(ali);
        this.applyForce(coh);
    }
      
    // Method to update location
    Boid.prototype.update = function() {
        // Update velocity
        this.velocity.add(this.acceleration);
        // Limit speed
        this.velocity.limit(this.maxspeed);
        this.position.add(this.velocity);
        // Reset accelertion to 0 each cycle
        this.acceleration.mult(0);
    }
      
    // A method that calculates and applies a steering force towards a target
    // STEER = DESIRED MINUS VELOCITY
    Boid.prototype.seek = function(target,p5) {
        let desired = p5.constructor.Vector.sub(target,this.position);  // A vector pointing from the location to the target
        // Normalize desired and scale to maximum speed
        desired.normalize();
        desired.mult(this.maxspeed);
        // Steering = Desired minus Velocity
        let steer = p5.constructor.Vector.sub(desired,this.velocity);
        steer.limit(this.maxforce);  // Limit to maximum steering force
        return steer;
    }
      
    Boid.prototype.render = function(p5) {
        // Draw a triangle rotated in the direction of velocity
        let theta = this.velocity.heading() + p5.radians(90);
        p5.fill(127);
        p5.stroke(200);
        p5.push();
        p5.translate(this.position.x, this.position.y);
        p5.rotate(theta);
        p5.beginShape();
        p5.vertex(0, -this.r * 2);
        p5.vertex(-this.r, this.r * 2);
        p5.vertex(this.r, this.r * 2);
        p5.endShape(p5.CLOSE);
        p5.pop();
    }
      
    // Wraparound
    Boid.prototype.borders = function(p5) {
        if (this.position.x < -this.r)  this.position.x = p5.width + this.r;
        if (this.position.y < -this.r)  this.position.y = p5.height + this.r;
        if (this.position.x > p5.width + this.r) this.position.x = -this.r;
        if (this.position.y > p5.height + this.r) this.position.y = -this.r;
    }
    
    // Separation
    // Method checks for nearby boids and steers away
    Boid.prototype.separate = function(boids,p5) {
        let desiredseparation = 25.0;
        let steer = p5.createVector(0, 0);
        let count = 0;
        // For every boid in the system, check if it's too close
        for (let i = 0; i < boids.length; i++) {
        let d = p5.constructor.Vector.dist(this.position,boids[i].position);
        // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
        if ((d > 0) && (d < desiredseparation)) {
            // Calculate vector pointing away from neighbor
            let diff = p5.constructor.Vector.sub(this.position, boids[i].position);
            diff.normalize();
            diff.div(d);        // Weight by distance
            steer.add(diff);
            count++;            // Keep track of how many
        }
        }
        // Average -- divide by how many
        if (count > 0) {
            steer.div(count);
        }
    
        // As long as the vector is greater than 0
        if (steer.mag() > 0) {
        // Implement Reynolds: Steering = Desired - Velocity
        steer.normalize();
        steer.mult(this.maxspeed);
        steer.sub(this.velocity);
        steer.limit(this.maxforce);
        }
        return steer;
    }
    
    // Alignment
    // For every nearby boid in the system, calculate the average velocity
    Boid.prototype.align = function(boids,p5) {
        let neighbordist = 50;
        let sum = p5.createVector(0,0);
        let count = 0;
        for (let i = 0; i < boids.length; i++) {
        let d = p5.constructor.Vector.dist(this.position,boids[i].position);
        if ((d > 0) && (d < neighbordist)) {
            sum.add(boids[i].velocity);
            count++;
        }
        }
        if (count > 0) {
            sum.div(count);
            sum.normalize();
            sum.mult(this.maxspeed);
            let steer = p5.constructor.Vector.sub(sum, this.velocity);
            steer.limit(this.maxforce);
            return steer;
        } else {
        return p5.createVector(0, 0);
        }
    }
      
    // Cohesion
    // For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location
    Boid.prototype.cohesion = function(boids,p5) {
        let neighbordist = 50;
        let sum = p5.createVector(0, 0);   // Start with empty vector to accumulate all locations
        let count = 0;
        for (let i = 0; i < boids.length; i++) {
            let d = p5.constructor.Vector.dist(this.position,boids[i].position);
            if ((d > 0) && (d < neighbordist)) {
                sum.add(boids[i].position); // Add location
                count++;
            }
        }
        if (count > 0) {
            sum.div(count);
            return this.seek(sum, p5);  // Steer towards the location
        } else {
        return p5.createVector(0, 0);
        }
    }
    //END      

    const setUpBack = (p5, parentRef) =>{
        const dim = document.getElementsByClassName('flockingCont')[0]
        p5.createCanvas(dim.clientWidth, dim.clientHeight).parent(parentRef)
        flock = new Flock();
        // Add an initial set of boids into the system
        for (let i = 0; i < count; i++) {
            let b = new Boid(p5.constructor.width / 2, p5.constructor.height / 2, p5);
            flock.addBoid(b);
        }
    }

    const drawBack = (p5) =>{
        p5.noCursor()
        p5.background(0)
        flock.run(p5);
        // Disable cursor
        // Display clear background
        if(count === 65){
            p5.beginShape()
            for (let i = 0; i < history.length; i++) {
                let pos = history[i];
                let alphaIndex = 1 / (i * 3)
                let colorString = 'rgba(255,255,255,' + alphaIndex + ')'
                p5.noFill();
                p5.stroke(p5.color(colorString))
                p5.vertex(pos.x, pos.y);
                p5.endShape();
            }
            p5.strokeWeight(1)
            // Set fill color for shapes
            
            p5.stroke(255)
            // Draw ellipse on mouse position
            p5.ellipse(p5.mouseX,p5.mouseY, 5);
            
            let v = p5.createVector(p5.mouseX, p5.mouseY);
            
            history.push(v);
            
            if (history.length > 15) {
                history.splice(0, 1);
            }
        }
        // p5.ellipse(p5.mouseX, p5.mouseY, 20)

    }

    return (
        // render sketch
        <Sketch setup={setUpBack} draw={drawBack}></Sketch>
    );
};

export default StarCanvas;