import React from 'react';
import '../styles/Pane.css'
import ContactElement from './ContactElement';

const ContactPane = () => {

    const contacts = [
        {
            label: 'github',
            url: 'https://github.com/Antonio832',
            shouldCopy: false
        },
        {
            label: 'linkedin',
            url: 'https://www.linkedin.com/in/antonio-medina-654a00238/',
            shouldCopy: false
        },
        {
            label: 'medium',
            url: 'https://medium.com/@antoniomedina832',
            shouldCopy: false
        },
        {
            label: 'mail',
            url: 'antoniomedina832@outlook.com',
            shouldCopy: true
        },
        {
            label: 'slack',
            url: '',
            shouldCopy: true
        }
    ]

    return (
        <div className='pane odd'>
            <div className='contacts'>
                {
                    contacts.map((contact) => 
                        <ContactElement 
                            key={contact.label} 
                            contactType={contact.label}  
                            contactUrl={contact.url}
                            shouldCopy={contact.shouldCopy}/>)
                }
            </div>
        </div>
    );
};

export default ContactPane;