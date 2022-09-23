import React from 'react';
import '../styles/Pane.css'
import ProjectElement from './ProjectElement';

const ProjectsPane = () => {

    const projects = [
        {
            name: 'Web apps',
        },
        {
            name: 'Medium articles',
        },
        {
            name: 'Art',
        },
        {
            name: 'Photograph',
        },
    ]

    return (
        <div className='pane pair' style={{display: 'flex'}}>
            <div className='projects'>
                {projects.map((prj)=> <ProjectElement key={prj.name} name={prj.name} url={prj.url}/> )}
            </div>
        </div>
    );
};

export default ProjectsPane;