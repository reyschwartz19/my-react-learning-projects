import React, {useState} from "react";
import styles from './header.module.css'

const Header = ({popUpDisplay, isBlurred}) => {


    const [searchTerm, setSearchTerm] = useState("");
    

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    

    return(
        <div className={`${styles.header} ${isBlurred ? styles.blurred : ''}`}>
            <div className={styles.logo}>
                <span className={`material-symbols-outlined ${styles.icon_logo}`}>contacts_product</span>
                <span className={styles.header_text}>Contacts</span>
            </div>
            <div className={styles.input_container}>
                <span className={`material-symbols-outlined ${styles.icon}`}>search</span>
                <input type="text" placeholder="Search" onChange={handleChange}/>
            </div>
          
               
             <div className={styles.fav}>
                <span className={`material-symbols-outlined ${styles.icon}`}>star</span>
                 <span className={`material-symbols-outlined ${styles.icon}`} onClick={popUpDisplay}>person_add</span>
              
            </div>        
        </div>
    );



}

export default Header;