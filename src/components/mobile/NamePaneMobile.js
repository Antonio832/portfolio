import React, { useEffect, useRef, useState } from 'react';
import '../../styles/mobile.css'
import ButtonAbout from '../buttonAbout';

const NamePaneMobile = () => {

    const [isVisible, setVisible] = useState(true)
    const domRef = useRef()

    useEffect(()=>{
        const observer = new IntersectionObserver(entries =>{
            entries.forEach(entry=>setVisible(entry.isIntersecting))
        })
        observer.observe(domRef.current)
        return () => observer.unobserve
    },[])

    return (
        <div className='nameMobile'>
            <div className='letters'>
                <div id='mobileA' className='letter'>A <div className='rest'>ntonio</div> </div>
                <div id='mobileM' className='letter'>M <div className='rest'>edina</div> </div>
                <div id='mobileV' className='letter'>V <div className='rest'>alenzuela</div> </div>
            </div>
            <div className={`buttonsAbout ${isVisible ?  'isVisible' : ''}`} ref={domRef}>
                <ButtonAbout texto={'About me'} />
                <ButtonAbout texto={'About this project'} />
            </div>
        </div>
    );
};

export default NamePaneMobile;