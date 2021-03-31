import { createAction } from "@reduxjs/toolkit";

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

export const deleteContactRequest = createAction(
  "contacts/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contacts/deleteContactSuccess"
);
export const deleteContactError = createAction("contacts/deleteContactError");

export const changeFilter = createAction("@filter/change");

export const initialContactsRequest = createAction("@contact/initialRequest");
export const initialContactsSuccess = createAction("@contact/initialSuccess");
export const initialContactsError = createAction("@contact/initialError");
