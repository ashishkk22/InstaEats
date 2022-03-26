import React from "react";
import EmptyImg from "../../../images/empty-cart.png";
import styles from "./EmptyCard.module.css";
import { Link } from "react-router-dom";
const EmptyCard = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    transition: "smooth",
  };
  return (
    <div className={styles.try}>
      <div className={styles.mainP}>
        <h2>Cart Empty 😔</h2>
        <div className={styles.paraDiv}>
          <p className={styles.para}>
            You Probably haven't Ordered from InstaEats yet.
          </p>
          <p className={styles.para}> To order, Go to the main Page</p>
        </div>
        <img src={EmptyImg} alt="cart" />
        <button className={styles.btn}>
          <Link to="/" style={linkStyle}>
            <h6> Go Back</h6>
          </Link>
        </button>
      </div>
    </div>
  );
};
export default EmptyCard;
