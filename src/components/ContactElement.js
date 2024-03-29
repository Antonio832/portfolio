import React from 'react';


const ContactElement = ({contactType, contactUrl, shouldCopy}) => {

    const renderSwitch = (contact)=>{
        switch(contact){
            case 'github':
            return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            case 'mail':
            return <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm17-15.1L7 13.75V37h34V13.75Zm0-3L40.8 11H7.25ZM7 13.75V11v26Z"/></svg>
            case 'medium':
            return <svg version="1.1" id="layer" width='50px' height='50px' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 177.7 178" >
                        <path d="M96.9,84.5c0,25-20.1,45.3-45,45.3s-45-20.3-45-45.3s20.1-45.3,45-45.3S96.9,59.5,96.9,84.5"/>
                        <path d="M146.2,84.5c0,23.5-10.1,42.6-22.5,42.6s-22.5-19.1-22.5-42.6s10.1-42.6,22.5-42.6S146.2,60.9,146.2,84.5"/>
                        <path d="M166.4,84.5c0,21.1-3.5,38.2-7.9,38.2s-7.9-17.1-7.9-38.2s3.5-38.2,7.9-38.2S166.4,63.4,166.4,84.5"/>
                    </svg>
            case 'linkedin':
            return <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            case 'slack':
            return <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 130.7 130.2">
                    
                    <path className="st0" fill='#231F20;' d="M29.6,83.2c0,7.3-5.9,13.2-13.2,13.2S3.2,90.5,3.2,83.2S9.1,70,16.4,70h13.2V83.2z M36.2,83.2
                        c0-7.3,5.9-13.2,13.2-13.2s13.2,5.9,13.2,13.2v33c0,7.3-5.9,13.2-13.2,13.2s-13.2-5.9-13.2-13.2V83.2z"/>
                    <path className="st1" d="M49.4,30.2c-7.3,0-13.2-5.9-13.2-13.2S42.1,3.8,49.4,3.8S62.6,9.7,62.6,17v13.2H49.4z M49.4,36.9
                        c7.3,0,13.2,5.9,13.2,13.2s-5.9,13.2-13.2,13.2H16.3C9,63.3,3.1,57.4,3.1,50.1S9,36.9,16.3,36.9H49.4z"/>
                    <path className="st0" fill='#231F20;' d="M102.3,50.1c0-7.3,5.9-13.2,13.2-13.2c7.3,0,13.2,5.9,13.2,13.2s-5.9,13.2-13.2,13.2h-13.2V50.1z M95.7,50.1
                        c0,7.3-5.9,13.2-13.2,13.2c-7.3,0-13.2-5.9-13.2-13.2V17c0-7.3,5.9-13.2,13.2-13.2c7.3,0,13.2,5.9,13.2,13.2
                        C95.7,17,95.7,50.1,95.7,50.1z"/>
                    <path className="st0" fill='#231F20;' d="M82.5,103c7.3,0,13.2,5.9,13.2,13.2c0,7.3-5.9,13.2-13.2,13.2c-7.3,0-13.2-5.9-13.2-13.2V103H82.5z M82.5,96.4
                        c-7.3,0-13.2-5.9-13.2-13.2c0-7.3,5.9-13.2,13.2-13.2h33.1c7.3,0,13.2,5.9,13.2,13.2c0,7.3-5.9,13.2-13.2,13.2H82.5z"/>
                    </svg>
            default:
            return <></>
        }
    }

    return (
        
        shouldCopy ?
        <div onClick={(e)=>{
            return navigator.clipboard.writeText(contactUrl)
        }}>
            <button className={`${contactType} contactElement`}>
                {
                    renderSwitch(contactType)
                }
            </button>
        </div>
        :
        <a target="_blank" rel='noreferrer' href={`${contactUrl}`}>
            <button className={`${contactType} contactElement`}>
                {
                    renderSwitch(contactType)
                }
            </button>
        </a>
        
    );
};

export default ContactElement;