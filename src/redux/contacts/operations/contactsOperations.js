import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  initialContactsRequest,
  initialContactsSuccess,
  initialContactsError,
} from "../actions/contactsActions";

export const initialContacts = () => (dispatch) => {
  dispatch(initialContactsRequest());
  axios
    .get(`/contacts`)
    .then(({ data }) => dispatch(initialContactsSuccess(data)))
    .catch((error) => dispatch(initialContactsError(error.message)));
};

export const addContact = (contact) => (dispatch) => {
  dispatch(addContactRequest());
  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error.message)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error.message)));
};
