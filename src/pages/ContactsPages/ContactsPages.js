import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initialContacts } from "../../redux/contacts/operations/contactsOperations";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList";
import Filter from "../../components/Filter/Filter";
import { getLoadingSelector } from "../../redux/contacts/ selectors/contactsSelectors";
import styles from "./ContactsPages.module.css";

const ContactsPages = () => {
  const loading = useSelector(getLoadingSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialContacts());
  }, []);

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPages;