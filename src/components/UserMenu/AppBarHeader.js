import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";
import Navigation from "./Navigation";
import styles from "./UserMenu.module.css";

const AppBarHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense" className={styles.menu}>
        <Navigation />
        {false ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};

export default AppBarHeader;
