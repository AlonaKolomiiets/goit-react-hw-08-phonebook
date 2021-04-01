import React from "react";
import { useSelector } from "react-redux";
import { AppBar, Toolbar } from "@material-ui/core";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";
import Navigation from "./Navigation";
import styles from "./UserMenu.module.css";
import { getIsAuthSelector } from "../../redux/auth/authSelectors";


const AppBarHeader = () => {
  const isAuthenticated = useSelector(getIsAuthSelector);
  return (
    <AppBar position="static">
      <Toolbar variant="dense" className={styles.menu}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};

export default AppBarHeader;
