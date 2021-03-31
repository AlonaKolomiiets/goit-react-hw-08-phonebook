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
const Navigation = () => {
  return (
    <div>
      <NavLink
        exact
        to="/"
        className={styles.link}
        style={linkStyles.base}
        activeStyle={linkStyles.active}
      >
        Главная
      </NavLink>
      <NavLink
        to="/contacts"
        className={styles.link}
        style={linkStyles.base}
        activeStyle={linkStyles.active}
      >
        Справочник
      </NavLink>
    </div>
  );
};

export default Navigation;
