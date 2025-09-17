import React, {useState} from 'react';
import './App.css';
import Header from './header/header.jsx';
import ContactList from './ContactList/contactList.jsx';
import AddContactPopup from './addContactPopup/addContactPopup.jsx';

function App() {


  const [contacts, setContact] = useState([]);
  const [Display, setDisplay] = useState(false);
   
  const popUpDisplay = () => {
      setDisplay(!Display);
  }

  const addContact  = contact => setContact(prev => [...prev, contact]);
  

  return (
    <>
     <Header popUpDisplay={popUpDisplay} isBlurred={Display}  />
      <ContactList isBlurred={Display} contacts={contacts} />
     { (Display  ? <AddContactPopup addContact={addContact} popUpDisplay={popUpDisplay} contacts={contacts} /> : null)   }
    
    </>
  )
}

export default App
