import React, { useEffect, useState } from 'react';
import '../styles/MainGrid.css'
import ContactPane from './ContactPane';
import NamePaneMobile from './mobile/NamePaneMobile';
import NamePane from './NamePane';
import ProjectsPane from './ProjectsPane';
import QuotePane from './QuotePane';
import StarCanvas from './StarCanvas';

const MainGrid = () => {

    const [width, setWidth] = useState(window.innerWidth)

    const handleWindowSize = ()=>{
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener('resize', handleWindowSize)
        return window.removeEventListener('resize', handleWindowSize)
    }, [])

    const isMobile = width <= 1000 ? true : false

    return (
        !isMobile ?
        <div className='mainGrid'>
            <div className='flockingCont'>
                <StarCanvas count={65}></StarCanvas>
            </div>
            <QuotePane/>
            <ProjectsPane/>
            <NamePane/>
            <ContactPane/>
        </div>
        :
        <div className='mainGridMobile'>
            <div className='flockingContMobile'>
                <StarCanvas count={25}></StarCanvas>
            </div>
            <NamePaneMobile />
        </div>
    )
}

export default MainGrid;