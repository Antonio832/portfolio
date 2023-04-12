import React, {useState} from 'react';
import '../styles/modalStyles/modal.css'
import AboutMe from './modalComps/aboutMe';
import AboutProject from './modalComps/aboutProject';
function Modal({text, type}) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <div className='mainBtn' onClick={()=>setShowModal(true)}>
                {text}
            </div>
            {showModal && (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => setShowModal(false)}>
                        &times;
                    </span>
                    {type === "abtMe" ? <AboutMe /> : <></>}
                    {type === "abtPro" ? <AboutProject /> : <></>}
                    
                </div>
            </div>
      )}
        </>
    );
}

export default Modal;