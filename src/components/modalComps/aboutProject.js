import React, { useState } from 'react';
import '../../styles/modalStyles/modal.css'
import '../../styles/modalStyles/aboutP.css'


function AboutProject() {

    return (
        <div className='modalAbtPro'>
            <h2>About this project</h2>
            <div>
                I began this project as a way to challenge my creativity and my skills. This project is 
                writen in React to manage the UI and API calls as well as some different libraries, before I started this 
                project, I had some experience with React at the time so I decided this is a great oportunity to improve my 
                skills and learn new ways to implement what I already knew.
            </div>

            <div style={{marginTop: '1rem'}}>
                This project was written in React for managing the UI. I divided the page into 4 panes.
                <br/>
                The first pane is uses a quote api, to display famous quotes that can motivate whoever decides
                 to visit this page, there's also a copy button, just in case anyone would like to copy the quote. 
                <br/>
                <br/>
                    <a href='https://type.fit/api/quotes/' target='blank'>
                        🔗 Here is the Api endpoint
                    </a>
                <br/>
                <br/>
                The second pane has a showcase of the various subject, some of them are programming related and others 
                art projects, each one has a modal associated to it, all of the styling is documented in the github repo for this
                site.
                <br/>
                <br/>
                <a href='https://github.com/Antonio832/portfolio' target='blank'>
                    🔗 Check the repo here
                </a>
            </div>
        </div>
    )
}

export default AboutProject;