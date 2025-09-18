import React, { useState } from 'react';
import styles from './addContactPopup.module.css';

const AddContactPopup = ({addContact, popUpDisplay,contacts}) => {

  const [contactName, setContactName] = useState("");
  const [number, setNumber] = useState('');

   const handleAdd = () => {
    addContact ({Name: contactName, Phone: number, isFavorite: false});
    setContactName("");
    setNumber("");
   }
   const handleSave = () => {
    handleAdd();
    popUpDisplay();
    console.log(contacts)
   }



  return(
    <div className={styles.popup}>
        <input placeholder='Name' type='text' value={contactName} onChange={e => setContactName(e.target.value)}/>
        <input placeholder='Phone' type='number' value={number} onChange={e => setNumber(e.target.value)}  />
        <button onClick={handleSave }>Save</button>
    </div>
  );

}

export default AddContactPopup;