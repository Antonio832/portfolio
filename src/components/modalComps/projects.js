import React from 'react';
import '../../styles/modalStyles/modal.css'
import ProjectModalElement from './projectModalElement';


function ProjectsModal() {

    const projects = [
        {
            title: 'Financiera 2020',
            desc: `A private dashboard used to register payments and manage users from a loaner conglomerate. 
                    Done in Angular paired up with Angular Material for the UI/UX and hosted on Google cloud.\n
                    I implemented a hierarchical admin/user authentication, where the admins can create accounts for users to start registering clients.
                    Admins can also edit or delete payments, clients, weekly reports, and weekly loans.\n The showcase for these projects is kept private due to sensitive information being displayed`,
            canShow: false
        },
        {
            title: 'Trello-like app course',
            desc: `I developed a Trello style application as a demo for an online class where the students recreate this app from start to finish.
                    The sessions are recorded and uploaded to a private folder on Google drive for the students to review each class. The topics of the course include: Angular
                    Angular Material, Firebase (Firestore, Authentication and Hosting).\n All sessions are private and completly on the hands of the student, so it is very common to also 
                    touch subjects like Git, general Javascript and programming practices, Markup language, and even other frameworks. Since the student has full control over the course, the duration and the topics boarded on that session 
                    are set by the student. The showcase can be the demo, but also we can see other students projects in action.`,
            canShow: true,
            link: '//dmo-listas.web.app'
        },
        {
            title: 'Pokemap*',
            desc: `This app is designed to display events from the famous game Pokemon Go, 
                    it shows a dynamic timezone map where each timezone can have can have a number of events happening, 
                    it also shows the type, name of the event, the real hour of the timezone and the best places to play the game. 
                    Currently this app no longer works due to timezones changing, since I design the maps from scratch it is very difficult to keep up with the new timezones, and decided to leave it as a showcase due to the amount of logic implemented in this project.`,
            canShow: true,
            link: '//www.pokemap.live'
        },
        {
            title: 'LCC-HUB Admin Dashboard',
            desc: `A project created for managing data and posts displayed on a "hub" from my University, this project is an admin dashboard with hierarchical authentication where the users
                    manage data from students to be displayed at the hub, the data can be imported from an Excel template and will automaticaly add the data to a NoSQL database in Firebase.`,
            canShow: false,
        },
    ]

    return (    
        <div className='projectsModalWrapper'>
            {projects.map((prj)=> 
                <ProjectModalElement key={prj.title} title={prj.title} desc={prj.desc} showcase={prj.canShow} url={prj.link}/> 
            )}
        </div>
    )
}

export default ProjectsModal;