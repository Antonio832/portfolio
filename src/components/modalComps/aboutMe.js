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
                        <span style={{color:"red"}}>
                            [
                        </span>
                        &nbsp;-&nbsp;
                        <span style={{color:"red"}}>
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
                        I have some experience developing web applications with Angular and Firebase, which are showcased here. I also enjoy designing UI components and have been using Material to improve the UI/UX in most of these apps. I am a quick learner, so it is easy for me to adapt to new languages and challenges.
                    </div>

                    <div className='sect'>
                        <span style={{color:"green"}}>
                            [
                        </span>
                        &nbsp;-&nbsp;
                        <span style={{color:"green"}}>
                            ] 
                        </span>
                        &nbsp;Experience 
                    </div>
                    
                    <div>
                        I've been programming since I was in highschool but started my own projects until I started college, mainly focusing on FullStack development, but also showing intrest in media creation like editing images in Photoshop, creating logos on Illustrator and video editing.
                        <br/>
                        Mixed skills:
                        <ul>
                            <li>
                                Media: Photoshop, Lightroom, Illustrator, Premier Pro, DaVinci Resolve.
                            </li>
                            <li>
                                Other: Star UML, AutoCAD, OracleVM.
                            </li>
                            <li>
                                Basics: Microsoft Word, Excel, Power Point.
                            </li>
                        </ul>
                    </div>

                    <div className='sect'>
                        <span style={{color:"blue"}}>
                            [
                        </span>
                        &nbsp;-&nbsp;
                        <span style={{color:"blue"}}>
                            ] 
                        </span>
                        &nbsp;Vision 
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;