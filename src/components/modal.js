import React, {useState} from 'react';
import '../styles/modalStyles/modal.css'
import AboutMe from './modalComps/aboutMe';
import AboutProject from './modalComps/aboutProject';
import ProjectsModal from './modalComps/projects';
import MediumArts from './modalComps/mediumArts';
import UnderConst from './modalComps/underConst';

function Modal({text, type, isFromNamePane = false}) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            {isFromNamePane ? 
                <div className='mainBtn' onClick={()=>setShowModal(true)}>
                    {text}
                </div>
                :
                <button className='takeALook' onClick={()=>setShowModal(true)}>
                    Take a look
                    <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="48" width="48"><path d="m28.05 35.9-2.15-2.1 8.4-8.4H8v-3h26.3l-8.45-8.45 2.15-2.1L40.05 23.9Z"/></svg>
                </button>
            }
            
            {showModal && (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => setShowModal(false)}>
                        &times;
                    </span>
                    {type === "abtMe" ? <AboutMe /> : null}
                    {type === "abtPro" ? <AboutProject /> : null}
                    {type === "prjcts" ? <ProjectsModal /> : null}
                    {type === "medium" ? <MediumArts /> : null}
                    {type === "art" ? <UnderConst /> : null}
                    {type === "photo" ? <UnderConst /> : null}
                    
                </div>
            </div>
      )}
        </>
    );
}

export default Modal;