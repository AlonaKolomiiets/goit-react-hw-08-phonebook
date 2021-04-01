//import { createSelector } from "reselect";

export const getIsAuthSelector = (state) => !!state.auth.token;

export const getUserEmail = state=>state.auth.user.email;