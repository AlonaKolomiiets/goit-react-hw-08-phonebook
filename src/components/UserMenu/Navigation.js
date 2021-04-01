import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuthSelector } from "../../redux/auth/authSelectors";
import styles from "./UserMenu.module.css";

const linkStyles = {
  base: {
    color: "white",
  },
  active: {
    color: "red",
  },
};
const Navigation = () => {
  const isAuthenticated = useSelector(getIsAuthSelector);

  return (
    <div>
      <NavLink
        exact
        to="/"
        className={styles.link}
        style={linkStyles.base}
        activeStyle={linkStyles.active}
      >
       Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to="/contacts"
          className={styles.link}
          style={linkStyles.base}
          activeStyle={linkStyles.active}
        >
          Phonebook
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
