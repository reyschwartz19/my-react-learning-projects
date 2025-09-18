import styles from './contactCard.module.css';
import React from 'react';

const ContactCard = ({contact,removeContact,index, toggleFavorite}) => {

    return(
        
           <tr className={styles.contact_card}>
                <td>{contact.Name}</td>
                <td>{contact.Phone}</td>
                <td className={styles.actions}>
                    <span className={`material-symbols-outlined ${styles.icon} ${contact.isFavorite ? styles.favorite : ''}`}
                    onClick={() => toggleFavorite(index)}
                    >
                        {contact.isFavorite ? 'star' : 'star_outline'}
                    </span>
                    <span className={`material-symbols-outlined ${styles.icon}`} onClick={() => removeContact(index)}>
                        delete
                   </span>
                </td>
           </tr>
        
    );
}

export default ContactCard;