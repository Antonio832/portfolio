import React from 'react';
import '../styles/Pane.css'
import '../styles/projects.css'
import Modal from './modal';

const ProjectElement = ({name, url, className}) => {

    const customClassName = className + " project"

    return (
        <div className={customClassName}>
            <p>
                {name}
            </p>
            <Modal type={className}/>
        </div>
    );
};

export default ProjectElement;