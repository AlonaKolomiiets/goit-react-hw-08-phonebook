import React from "react";
import { useSelector } from "react-redux";
import ContactListItem from "./ContactListItem";
import { getFilteredContacts } from "../../redux/toolkit/ selectors/contactsSelectors";
// import PropTypes from "prop-types";

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  return (
    <ul>
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

// ContactList.propTypes = {
//   filteredContacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default ContactList;
