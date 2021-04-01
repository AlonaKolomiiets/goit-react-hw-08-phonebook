//import { createSelector } from "reselect";

export const getIsAuthSelector = (state) => state.auth.isAuthenticated;

export const getUserEmail = (state) => state.auth.user.email;
