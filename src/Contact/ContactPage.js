import React from 'react';
import { selectContacts } from './ContactSlice';

import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

const ContactsPage = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const AllContacts = useSelector(selectContacts)
    console.log(AllContacts);
      
    const renderContacts = AllContacts.map(contact => (
        
        <div  className='contact-spa'>
            <h2> {t (contact.name)} </h2>
            <img className="img-user" src={contact.img} />
           <div className='contacts'> 
            <a href={`tel:  ${contact.phone}`}>  {contact.phone}</a>
            <a href= {`mailto: ${contact.email}`}> {contact.email}</a>
            <a href={`mailto: ${contact.telegram}`}> {contact.telegram}</a>
            </div>
        </div>
    ))
    return (
        <section className='skills'>
            {renderContacts}
        </section>
    );
};

export default ContactsPage;