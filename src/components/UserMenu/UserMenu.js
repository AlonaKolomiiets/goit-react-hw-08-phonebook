import React from "react";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  return (
    <div className={styles.AuthNav}>
      <span className={styles.link}>Welcome, name </span>
      <button className={styles.link} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
