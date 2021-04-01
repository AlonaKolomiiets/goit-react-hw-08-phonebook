import React from "react";
import { useSelector } from "react-redux";
import styles from "./UserMenu.module.css";
import { getUserName } from "../../redux/auth/authSelectors";

const UserMenu = () => {
  const name = useSelector(getUserName);
  return (
    <div className={styles.AuthNav}>
      <span className={styles.link}>Welcome, {name} </span>
      <button className={styles.link} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
