import React, { Component } from 'react';
import '../styles/MainGrid.css'
import ContactPane from './ContactPane';
import NamePane from './NamePane';
import ProjectsPane from './ProjectsPane';
import QuotePane from './QuotePane';
import StarCanvas from './StarCanvas';

class MainGrid extends Component {
    render() {
        return (
            <div className='mainGrid'>
                <div className='flockingCont'>
                    <StarCanvas></StarCanvas>
                </div>
                <QuotePane/>
                <ProjectsPane/>
                <NamePane/>
                <ContactPane/>
            </div>
        );
    }
}

export default MainGrid;