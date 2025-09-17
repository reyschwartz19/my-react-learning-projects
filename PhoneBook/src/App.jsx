import React, {useState} from 'react';
import './App.css';
import Header from './header/header.jsx';
import ContactList from './ContactList/contactList.jsx';
import AddContactPopup from './addContactPopup/addContactPopup.jsx';

function App() {
  

  return (
    <>
     <Header/>
     
     <ContactList/>
    </>
  )
}

export default App
