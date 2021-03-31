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

axios.defaults.baseURL = "http://localhost:3000";

export const initialContacts = () => (dispatch) => {
  dispatch(initialContactsRequest());
  axios
    .get(`/contacts`)
    .then(({ data }) => dispatch(initialContactsSuccess(data)))
    .catch((error) => dispatch(initialContactsError(error)));
};

export const addContact = (contact) => (dispatch) => {
  dispatch(addContactRequest());
  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error)));
};
