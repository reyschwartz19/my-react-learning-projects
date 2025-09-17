import styles from './contactCard.module.css';
import React from 'react';

const ContactCard = ({contact}) => {

    return(
        
           <tr className={styles.contact_card}>
                <td>{contact.Name}</td>
                <td>{contact.Phone}</td>
                <td className={styles.actions}>
                    <span className={`material-symbols-outlined ${styles.icon}`}>star</span>
                    <span className={`material-symbols-outlined ${styles.icon}`}>delete</span>
                </td>
           </tr>
        
    );
}

export default ContactCard;