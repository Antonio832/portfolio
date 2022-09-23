import React from 'react';
import Sketch from 'react-p5'

const FlokingSim = () => {

    const setUp = (p5, parentRef) =>{
        const dim = document.getElementsByClassName('flockingCont')[0]
        p5.addClass('flocking')
        p5.createCanvas(dim.clientWidth, dim.clientHeight).parent(parentRef)
    }

    const draw = (p5) =>{
        p5.background(0)
        p5.ellipse(p5.mouseX, p5.mouseY, 20)

    }

    return (
        <Sketch setUp={setUp} draw={draw}>
            
        </Sketch>
    );
};

export default FlokingSim;