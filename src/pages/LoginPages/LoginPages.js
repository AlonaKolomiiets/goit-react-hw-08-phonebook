import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logIn } from "../../redux/auth/authOperations";
import routes from "../../routes";
import styles from "./LoginPages.module.css";

const initialState = {
  email: "",
  password: "",
};

const LoginPages = () => {
  const [form, setForm] = useState({ ...initialState });
  const dispatch = useDispatch();
  const inputHeadler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(form));
  };
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Login</h1>
      <form onSubmit={onSubmit} className={styles.loginForm}>
        <input
          onChange={inputHeadler}
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
        ></input>
        <input
          onChange={inputHeadler}
          type="password"
          name="password"
          placeholder="Your password"
          value={form.password}
        ></input>
        <button>Sign up</button>
      </form>
      <p className={styles.title}>
        If you dont have an account please
        <NavLink to={routes.register}> Register </NavLink>
      </p>
    </div>
  );
};

export default LoginPages;
