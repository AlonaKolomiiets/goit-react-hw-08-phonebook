import React from "react";
import { useSelector } from "react-redux";
import { getLoadingSelector } from "../../redux/contacts/┬áselectors/contactsSelectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList";
import Filter from "../../components/Filter/Filter";
import Loader from "../../components/Loader/Loader";
import styles from "./ContactsPages.module.css";

const ContactsPages = () => {
  const loading = useSelector(getLoadingSelector);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(initialContacts());
  // }, []);

  return (
    <div>
      {loading && <Loader />}
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPages;
