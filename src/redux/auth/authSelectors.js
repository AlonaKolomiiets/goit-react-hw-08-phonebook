//import { createSelector } from "reselect";

export const getIsAuthSelector = (state) => !!state.auth.auth.token;

export const getUserName = state=>state.auth.auth.user.name;