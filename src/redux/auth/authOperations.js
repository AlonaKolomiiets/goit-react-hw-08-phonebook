import axios from "axios";
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./authActions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {};

//POST /users​/signup Создать нового пользователя
//body {"name","email", "password"}
//После успешной регистрации добавляем токен в HTTP-заголовок

export const register = (credentials) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const response = await axios.post("/users/signup", credentials);
    console.log(response.data);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

export const logIn = (credentials) => (dispatch) => {};

export const logOut = () => (dispatch) => {};

export const getCurrentUser = () => (dispatch, getState) => {};
