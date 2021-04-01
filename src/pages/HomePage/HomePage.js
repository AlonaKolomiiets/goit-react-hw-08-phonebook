import React from "react";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <h1 className={styles.welcomeTitle}>
      Приветственная страница телефонного справочника
      <span role="img" aria-label="book">
        📖
      </span>
    </h1>
  );
};

export default HomePage;
