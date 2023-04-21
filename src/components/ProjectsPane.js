import React, { useState } from 'react';
import '../styles/Pane.css'
import '../styles/projects.css'
import ProjectElement from './ProjectElement';

const ProjectsPane = () => {

    const projects = [
        {
            name: 'Projects',
            class: 'prjcts'
        },
        {
            name: 'Medium articles',
            class: 'medium'
        },
        {
            name: 'Art',
            class: 'art'
        },
        {
            name: 'Photograph',
            class: 'photo'
        },
    ]

    const [scrollCount, setScrollCount] = useState(0)

    const scrollHandler = () =>{
        setScrollCount(scrollCount + 1)
    }

    return (
        <div className='pane pair' style={{display: 'flex', position:'relative'}}>
            <div className='projects' onScroll={scrollHandler}>
                {scrollCount < 1 ? 
                    <div className='scrollD'>
                        <p className='scrollTitle'>
                            scroll down
                        </p>
                        <span></span>
                    </div> 
                : null}
                
                {projects.map((prj)=> <ProjectElement key={prj.name} name={prj.name} className={prj.class}/> )}
            </div>
        </div>
    );
};

export default ProjectsPane;