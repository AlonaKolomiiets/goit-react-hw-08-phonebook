import React from "react";
import { useSelector } from "react-redux";
import ContactListItem from "./ContactListItem";
import { getFilteredContacts } from "../../redux/contacts/ selectors/contactsSelectors";
import styles from "./ContactListItem.module.css"

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
      
        />
      ))}
    </ul>
  );
};


export default ContactList;
