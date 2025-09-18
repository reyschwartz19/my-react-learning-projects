import styles from './contactList.module.css';
import ContactCard from '../ContactCard/contactCard.jsx';

const ContactList = ({isBlurred, contacts, removeContact,toggleFavorite,favorites}) => {




     return(
        <div className={`${styles.contact_list} ${isBlurred ? styles.blurred : ''}`}>
          <h2>Contacts({contacts.length})</h2>
          <table>
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th> </th>
               </tr>
            </thead>
            <tbody>
              {contacts.map((contact, i) =>
                 favorites ?  contact.isFavorite && <ContactCard key={i} contact={contact} removeContact={removeContact} index={i} toggleFavorite={toggleFavorite}/>  
                          :
                             <ContactCard key={i} contact={contact} removeContact={removeContact} index={i} toggleFavorite={toggleFavorite}/>
                 )}
            </tbody>
          </table>
        </div>
     );

}

export default ContactList;