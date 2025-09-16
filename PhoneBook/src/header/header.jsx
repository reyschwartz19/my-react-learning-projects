import React, {useState} from "react";
import styles from './header.module.css'

const Header = () => {

    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                <span className={`material-symbols-outlined ${styles.icon_logo}`}>contacts_product</span>
                <span className={styles.header_text}>Contacts</span>
            </div>
            <div className={styles.input_container}>
                <span className={`material-symbols-outlined ${styles.icon}`}>search</span>
                <input type="text" placeholder="Search"/>
            </div>
          
               
             <div className={styles.fav}>
                <span className={`material-symbols-outlined ${styles.icon}`}>star</span>
                 <span className={`material-symbols-outlined ${styles.icon}`}>person_add</span>
              
            </div>        
        </div>
    );

}

export default Header;