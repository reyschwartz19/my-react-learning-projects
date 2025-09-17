import styles from './contactList.module.css';
import React, { useState } from 'react';
import ContactCard from '../ContactCard/contactCard.jsx';

const ContactList = ({isBlurred, contacts}) => {

   


     return(
        <div className={`${styles.contact_list} ${isBlurred ? styles.blurred : ''}`}>
          <h2>Contacts()</h2>
          <table>
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th> </th>
               </tr>
            </thead>
            <tbody>
              {contacts.map((contact, i) => <ContactCard key={i} contact={contact} />)}
            </tbody>
          </table>
        </div>
     );

}

export default ContactList;