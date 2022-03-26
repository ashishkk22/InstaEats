import React from "react";
import cartBlack from "../../../images/cart-black.png";
import styles from "./WithItem.module.css";
import itemImg from "../../../images/pump_cake.jpg";
import { Link } from "react-router-dom";
const WithItem = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    transition: "smooth",
  };
  const isLoggedIn = false;
  return (
    <>
      <div className={styles.centerP}>
        <div className={styles.mainDiv}>
          <div className={styles.heading}>
            <img className={styles.imgg} src={cartBlack} alt="cart_black" />
            <h2>Order Summary</h2>
          </div>
          <div className={styles.item_list}>
            <img src={itemImg} alt="itemImg" className={styles.img} />
            <div className={styles.item_name}>
              <h2>Pump Cake</h2>
            </div>
            <span className={styles.quantity}>1 Pcs</span>
            <span className={styles.price}>₹250</span>
          </div>
          <div className={styles.item_list}>
            <img src={itemImg} alt="itemImg" className={styles.img} />
            <div className={styles.item_name}>
              <h2>Pump Cake</h2>
            </div>
            <span className={styles.quantity}>1 Pcs</span>
            <span className={styles.price}>₹250</span>
          </div>
          <div className={styles.item_list}>
            <img src={itemImg} alt="itemImg" className={styles.img} />
            <div className={styles.item_name}>
              <h2>Pump Cake</h2>
            </div>
            <span className={styles.quantity}>1 Pcs</span>
            <span className={styles.price}>₹250</span>
          </div>
          <p className={styles.border_b} />
          <div className={styles.order_total}>
            <div>
              <span className={styles.span_text}>Total Amount : </span>
              <span className={styles.item_total}>₹ 750</span>
            </div>
            <form action="" className={styles.form}>
              <input
                type="text"
                placeholder="Phone Number"
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Address"
                className={styles.input2}
              />
              <div>
                {isLoggedIn ? (
                  <button className={styles.btn}>
                    <h5>Order Now</h5>
                  </button>
                ) : (
                  <button className={styles.btn}>
                    <h5>
                      <Link to="/signin" style={linkStyle}>
                        Login To Continue
                      </Link>
                    </h5>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithItem;
