import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { v4 as uuidv4 } from "uuid";
import { getContactsSelector } from "../../redux/contacts/ selectors/contactsSelectors";
import { addContact } from "../../redux/contacts/operations/contactsOperations";

import styles from "./ContactForm.module.css";

const initialState = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const contacts = useSelector(getContactsSelector);
  const dispatch = useDispatch();

  const uniqueContact = (name) => {
    return contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const add = (contactObj) => {
    uniqueContact(contactObj.name)
      ? alert(`${contactObj.name} is already in contacts`)
      : dispatch(addContact(contactObj));
  };

  const [{ name, number }, setForm] = useState({
    ...initialState,
  });

  const inputHandler = ({ target }) => {
    const { value, name } = target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const contact = {
      name,
      number,
      id: uuidv4(),
    };

    add(contact);

    setForm(initialState);
  };
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <form className={styles.form} onSubmit={submitHandler}>
        <label className={styles.contactFormLable}>
          <TextField
            id="user-name"
            variant="filled"
            onChange={inputHandler}
            type="text"
            name="name"
            placeholder="Enter name..."
            value={name}
          />
        </label>
        <label className={styles.contactFormLable}>
          <TextField
            id="user-tel"
            variant="filled"
            onChange={inputHandler}
            type="tel"
            name="number"
            placeholder="Enter number..."
            value={number}
          />
        </label>

        {/* <button type="submit">Add contact</button> */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Add contact
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
