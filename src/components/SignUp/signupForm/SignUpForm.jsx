import React from "react";
import styles from "./SignUpForm.module.css";
import { Link } from "react-router-dom";
const SignUpForm = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    transition: "smooth",
  };
  return (
    <>
      <div>
        <div className={styles.mainDiv}>
          <div className={styles.form}>
            <form action="">
              <div className={styles.heading}>
                <h2>Sign Up</h2>
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className={styles.inputB}
                />
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
                <label htmlFor="phone" className={styles.label}>
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  pattern="/^+91(6\d|7\d|8\d|9\d)\d{9}$/"
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
                  <Link to="/signin" style={linkStyle}>
                    <div className={styles.h4}>
                      <h4>Already have an account ?</h4>
                    </div>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
