import React, { useState } from 'react';
import '../../styles/modalStyles/modal.css'
import '../../styles/modalStyles/aboutMe.css'


function AboutMe() {

    const [showGraphs, setGraphState] = useState(false)

    return (
        <div className='modalAbtMe'>
            <div className='left'>
                <img src='../../assets/imgs/IMG_6727.JPG' className='profilePhoto' alt='me'/>
            </div>
            <div className='right'>
                <h2>About me</h2>
                <div className='cont'>
                    <div className='sect'>
                        Hi there! My name is Antonio Medina, and I am a recent graduate of the Computer Science 
                        program at the University of Sonora. I consider myself to be a curious and enthusiastic person who loves 
                        exploring new ideas and technologies, and I am eager to apply my skills and knowledge to 
                        real-world challenges.
                    </div>
                    <div className='sect'>
                        <span style={{color:"blue"}}>
                            [
                        </span>
                        &nbsp;-&nbsp;
                        <span style={{color:"blue"}}>
                            ] 
                        </span>
                        &nbsp;Skillset 
                        <button className='btnGraph' onClick={() => setGraphState(!showGraphs)}>Show skillset graph</button>
                    </div>

                    {
                        showGraphs ? 
                        <>
                            <div className='graphs'>
                                
                            </div>
                        </> 

                        : <>
                            <div>
                                <ul>
                                    <li>
                                        Programming lenguages: JavaScript, C, C++, Python, Typescript.
                                    </li>
                                    <li>
                                        Front-end: HTML, CSS, SaSS, Material, Angular, React.
                                    </li>
                                    <li>
                                        Back-end: Node.js.
                                    </li>
                                    <li>
                                        Cloud computing: Google Cloud, Firebase.
                                    </li>
                                    <li>
                                        Databases: SQL, Mongo DB, Firestore.
                                    </li>
                                </ul>
                            </div>
                        </>
                    }
                    <div>
                        I have some experience developing web applications with Angular and Firebase which are shown here, I also like
                        to design UI components and have been using Material for better UI/UX in most of this apps. I am a quick learner, so it is easy to me
                        to adapt to new lenguages and challenges.
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AboutMe;