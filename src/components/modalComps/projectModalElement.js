import React from 'react';
import '../../styles/modalStyles/projectElement.css'

const ProjectModalElement = ({title, desc, showcase, url}) => {
    return (
        <div className='projectElement'>
            <div className='title'>
                <h1>{title}</h1>
                <div className='showcase'>
                    <p style={{fontSize: '.8rem'}}>
                        showcase:&nbsp;
                        {showcase ? 
                            <a target="_blank" rel='noreferrer' href={url} style={{cursor: 'pointer'}}>🔗visible</a>
                        : 
                            <span>🔒private</span> 
                        }
                    </p>
                </div>
            </div>
            <p>
                {desc}
            </p>
        </div>
    );
};

export default ProjectModalElement;