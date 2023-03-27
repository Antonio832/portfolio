import React from 'react';
import '../../styles/modalStyles/modal.css'
import '../../styles/modalStyles/aboutMe.css'


function AboutMe() {
    return (
        <div className='modalAbtMe'>
            <div className='left'>
                <img src='../../assets/imgs/IMG_6727.JPG' className='profilePhoto' alt='me'/>
            </div>
            <div className='right'>
                <h2>About me</h2>
                <div className='cont'>
                    Hi there! My name is Antonio Medina, and I am a recent graduate of the Computer Science 
                    program at the University of Sonora. I consider myself to be a curious and enthusiastic person who loves 
                    exploring new ideas and technologies, and I am eager to apply my skills and knowledge to 
                    real-world challenges. LA neta me la pelas
                    <br/>
                    <br/>
                    <span style={{color:"blue"}}>
                        [
                    </span>
                    &nbsp;-&nbsp;
                    <span style={{color:"blue"}}>
                        ] 
                    </span>
                    &nbsp;Skillset

                </div>
            </div>

        </div>
    );
};

export default AboutMe;