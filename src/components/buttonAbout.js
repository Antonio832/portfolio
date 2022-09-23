import React from 'react';
import '../styles/buttonAbout.css'

const ButtonAbout = ({texto}) => {
    return (
        <div className='mainBtn'>
            {texto}
        </div>
    );
};

export default ButtonAbout;