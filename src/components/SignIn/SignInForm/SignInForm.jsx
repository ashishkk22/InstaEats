import React from "react";
import styles from "./SignInForm.module.css";
import { Link } from "react-router-dom";
const SignInForm = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    transition: "smooth",
  };
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.form}>
          <form action="">
            <div className={styles.heading}>
              <h2>Sign In</h2>
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.inputB}
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className={styles.inputB}
              />
            </div>
            <div className={styles.heading2}>
              <button className={styles.btn}>
                <h5>Sign Up</h5>
              </button>
              <div>
                <Link to="/signup" style={linkStyle}>
                  <div className={styles.h4}>
                    <h4>Don't Have an Account</h4>
                  </div>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
