import React from 'react';
import '../styles/Pane.css'

const ProjectElement = ({name, url}) => {
    return (
        <div className='project'>
            <p>
                {name}
            </p>
            <button className='takeALook'>
                Take a look
                <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="48" width="48"><path d="m28.05 35.9-2.15-2.1 8.4-8.4H8v-3h26.3l-8.45-8.45 2.15-2.1L40.05 23.9Z"/></svg>
            </button>
        </div>
    );
};

export default ProjectElement;