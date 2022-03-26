import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <h2>InstaEats</h2>
        <p>
          Copyright &copy; 2022 InstaEats. Designed By{" "}
          <span className={styles.span}>Ashish Kachhadiya</span>{" "}
        </p>
      </footer>
    </>
  );
};

export default Footer;
