import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./UserMenu.module.css";
import { getUserName } from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authOperations";


const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logOut());
  };
  return (
    <div className={styles.AuthNav}>
      <span className={styles.link}>Welcome, {name} </span>
      <button onClick={onLogout} className={styles.link} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
