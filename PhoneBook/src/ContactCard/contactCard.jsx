import styles from './contactCard.module.css';
import React from 'react';

const ContactCard = () => {

    return(
        
           <tr className={styles.contact_card}>
                <td>Emma</td>
                <td>+1 234 567 890</td>
                <td className={styles.actions}>
                    <span className={`material-symbols-outlined ${styles.icon}`}>star</span>
                    <span className={`material-symbols-outlined ${styles.icon}`}>delete</span>
                </td>
           </tr>
        
    );
}

export default ContactCard;