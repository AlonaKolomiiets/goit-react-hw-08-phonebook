import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./UserMenu.module.css";
import { getUserEmail } from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authOperations";

const UserMenu = () => {
  const email = useSelector(getUserEmail);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logOut());
  };
  return (
    <div className={styles.AuthNav}>
      <span className={styles.link}>Welcome, {email} </span>
      <button onClick={onLogout} className={styles.link} type="button">
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
