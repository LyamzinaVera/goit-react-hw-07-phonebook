import ContactForm from './ContactForm/ContactForm.jsx';
import ContactsList from './ContactList/ContactList.jsx';
import Filter from './Filter/Filter.jsx';
import style from './App.module.css'

export default function App(){
  return (
    <div className={style.container}>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactsList/>
    </div> 
  );
  }