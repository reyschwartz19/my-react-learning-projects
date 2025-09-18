import React, {useState} from 'react';
import './App.css';
import Header from './header/header.jsx';
import ContactList from './ContactList/contactList.jsx';
import AddContactPopup from './addContactPopup/addContactPopup.jsx';

function App() {


  const [contacts, setContact] = useState([]);
  const [Display, setDisplay] = useState(false);
  const [favorites, setFavorites] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
   
  const popUpDisplay = () => {
      setDisplay(!Display);
  }

  const toggleFavorite = index => {
    setContact(prev => prev.map((contact, i) => i === index ? {...contact, isFavorite: !contact.isFavorite} : contact));
  }
 
  const toggleFavoriteDisplay = () => {
    setFavorites(!favorites);
    console.log(favorites);
  }

  const addContact  = contact => setContact(prev => [...prev, contact]);
  
  const removeContact = index => {
    setContact(prev => prev.filter((_, i) => i !== index));
    console.log(contacts);
  }

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = searchTerm === '' || 
      contact.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.Phone.includes(searchTerm);
    
    const matchesFavorite = !favorites || contact.isFavorite;
    
    return matchesSearch && matchesFavorite;
  });

  return (
    <>
     <Header popUpDisplay={popUpDisplay}
             isBlurred={Display}
             toggleFavoriteDisplay={toggleFavoriteDisplay}
             favorites={favorites}
             setSearchTerm={setSearchTerm}
      />
      <ContactList isBlurred={Display}
                   contacts={filteredContacts}
                   removeContact={removeContact}
                   toggleFavorite={toggleFavorite}
                  favorites={favorites} 

      />
     
     { (Display  ? <AddContactPopup addContact={addContact} popUpDisplay={popUpDisplay} contacts={contacts} /> : null)   }
    
    </>
  )
}

export default App
