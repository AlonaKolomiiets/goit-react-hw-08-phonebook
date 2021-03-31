import { combineReducers, createReducer } from "@reduxjs/toolkit";

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  initialContactsRequest,
  initialContactsSuccess,
  initialContactsError,
} from "../actions/contactsActions";

const items = createReducer([], {
  [initialContactsSuccess]: (_, { payload }) => payload,

  [addContactSuccess]: (state, { payload }) => [...state, payload],

  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [initialContactsRequest]: () => true,
  [initialContactsSuccess]: () => false,
  [initialContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const contactsReducers = combineReducers({
  items,
  filter,
  loading,
});
export default contactsReducers;
