import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { register } from "../../redux/auth/authOperations";
import styles from "./RegisterPages.module.css";

const initialState = {
  name: "",
  email: "",
  password: "",
};
const RegisterPages = () => {
  const [form, setForm] = useState({ ...initialState });
  const dispatch = useDispatch();
  const inputHeadler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    dispatch(register(form));
    console.log(form);
  };
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Registration</h1>
      <form onSubmit={OnSubmit} className={styles.registrationForm}>
        <input
          onChange={inputHeadler}
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
        ></input>
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
        If you have already had an account please
        <NavLink to="/login"> Sign in </NavLink>
      </p>
    </div>
  );
};

export default RegisterPages;
