
import React,{ useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsAPI';
import { getContacts } from 'redux/selectors';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import style from 'components/ContactForm/ContactForm.module.css'

export default function ContactForm(){

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
 
  const { contacts } = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleNameChange = e => {
    setName(e.currentTarget.value);
  }
    const handleNumberChange = e => {
      setPhone(e.currentTarget.value);
    };

 const handleSubmit = e => {
  e.preventDefault();
   if (contacts) {
     const existingContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
     if (existingContact) {
       alert(`${name} is already in contacts`);
     } else {
       const newContact = {
         name,
         phone,
         id: shortid.generate(),
       };
       dispatch(addContact(newContact));
       setName('');
       setPhone('');
     }
   }
};
  
    return (
      <div className={style.border}>
        <form className={style.form} onSubmit={handleSubmit}>
          <label className={style.label}>Name</label>
          <input
              className={style.input}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleNameChange}
            />
          <label className={style.label}>Number</label>
          <input
              className={style.input}
              type="tel"
              name="number"
              value={phone}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleNumberChange}
            />
          <button className={style.button} type="submit">Add contact</button>
        </form>
      </div>
    );
  }


  ContactForm.propTypes = {
    handleSubmit: PropTypes.func
  };
  