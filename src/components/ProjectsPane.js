import React from 'react';
import '../styles/Pane.css'
import '../styles/projects.css'
import ProjectElement from './ProjectElement';

const ProjectsPane = () => {

    const projects = [
        {
            name: 'Web apps',
            class: 'apps'
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

    return (
        <div className='pane pair' style={{display: 'flex'}}>
            <div className='projects'>
                {projects.map((prj)=> <ProjectElement key={prj.name} name={prj.name} className={prj.class}/> )}
            </div>
        </div>
    );
};

export default ProjectsPane;