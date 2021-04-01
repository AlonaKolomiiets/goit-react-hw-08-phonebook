import React from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteContact } from "../../redux/contacts/operations/contactsOperations";
import styles from "./ContactListItem.module.css";
import PropTypes from "prop-types";

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deleteContacts = (id) => {
    dispatch(deleteContact(id));
  };

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  return (
    <>
      <li key={id} className={styles.listItem}>
        {name}:{number}
        {/* <button
          className={styles.contactListItemBtn}
          onClick={() => deleteContacts(id)}
        >
          Delete
        </button> */}
        <Button
          onClick={() => deleteContacts(id)}
          size="small"
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </li>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
