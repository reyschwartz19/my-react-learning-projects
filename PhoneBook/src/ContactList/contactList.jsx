import styles from './contactList.module.css';
import React from 'react';
import ContactCard from '../ContactCard/contactCard.jsx';

const ContactList = () => {

    


     return(
        <div className={styles.contact_list}>
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
               <ContactCard />
               <ContactCard />
               <ContactCard />
            </tbody>
          </table>
        </div>
     );

}

export default ContactList;