import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./UserMenu.module.css";

const linkStyles = {
  base: {
    color: "white",
  },
  active: {
    color: "red",
  },
};
const AuthNav = () => {
  return (
    <div className={styles.AuthNav}>
      <NavLink
        to="/register"
        className={styles.link}
        style={linkStyles.base}
        activeStyle={linkStyles.active}
      >
       Sign Up
      </NavLink>
      <NavLink
        to="/login"
        className={styles.link}
        style={linkStyles.base}
        activeStyle={linkStyles.active}
      >
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
