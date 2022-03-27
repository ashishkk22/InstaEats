import React from "react";
import styled from "styled-components";
import Bajipav from "../../images/bhaji_pav.jpeg";
import Samosa from "../../images/samosa.jpeg";
import coffe from "../../images/coffe.jpeg";
import French_fries from "../../images/french_fries.jpeg";
import Gulab_jamun from "../../images/gujab_jamun.jpeg";
import Pasta from "../../images/pasta.jpeg";
import Patra from "../../images/patra.jpeg";
import Pulav from "../../images/pulav.jpeg";
import styles from "./Item.module.css";
const Item = () => {
  const check = "../../images/bhaji_pav.jpeg";
  return (
    <>
      <Div>
        <div className={styles.round}>
          <img
            src={require("../../images/bhaji_pav.jpeg")}
            alt="pump_cake"
            className={styles.product}
          />
          <div>
            <h2 className={styles.name}>Pump Cake</h2>
            <div className={styles.rupee}>
              <div>
                <span className={styles.price_d}>Price : </span>
                <span>₹ 250</span>
              </div>
              <button className={styles.add_to_cart}>
                <span className={styles.plus}>+</span>
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.round}>
          <img
            src={require("../../images/coffe.jpeg")}
            alt="pump_cake"
            className={styles.product}
          />
          <div>
            <h2 className={styles.name}>Pump Cake</h2>
            <div className={styles.rupee}>
              <div>
                <span className={styles.price_d}>Price : </span>
                <span>₹ 250</span>
              </div>
              <button className={styles.add_to_cart}>
                <span className={styles.plus}>+</span>
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.round}>
          <img src={Gulab_jamun} alt="pump_cake" className={styles.product} />
          <div>
            <h2 className={styles.name}>Pump Cake</h2>
            <div className={styles.rupee}>
              <div>
                <span className={styles.price_d}>Price : </span>
                <span>₹ 250</span>
              </div>
              <button className={styles.add_to_cart}>
                <span className={styles.plus}>+</span>
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.round}>
          <img src={French_fries} alt="pump_cake" className={styles.product} />
          <div>
            <h2 className={styles.name}>Pump Cake</h2>
            <div className={styles.rupee}>
              <div>
                <span className={styles.price_d}>Price : </span>
                <span>₹ 250</span>
              </div>
              <button className={styles.add_to_cart}>
                <span className={styles.plus}>+</span>
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.round}>
          <img src={Pasta} alt="pump_cake" className={styles.product} />
          <div>
            <h2 className={styles.name}>Pump Cake</h2>
            <div className={styles.rupee}>
              <div>
                <span className={styles.price_d}>Price : </span>
                <span>₹ 250</span>
              </div>
              <button className={styles.add_to_cart}>
                <span className={styles.plus}>+</span>
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.round}>
          <img src={Patra} alt="pump_cake" className={styles.product} />
          <div>
            <h2 className={styles.name}>Pump Cake</h2>
            <div className={styles.rupee}>
              <div>
                <span className={styles.price_d}>Price : </span>
                <span>₹ 250</span>
              </div>
              <button className={styles.add_to_cart}>
                <span className={styles.plus}>+</span>
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.round}>
          <img src={Samosa} alt="pump_cake" className={styles.product} />
          <div>
            <h2 className={styles.name}>Pump Cake</h2>
            <div className={styles.rupee}>
              <div>
                <span className={styles.price_d}>Price : </span>
                <span>₹ 250</span>
              </div>
              <button className={styles.add_to_cart}>
                <span className={styles.plus}>+</span>
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.round}>
          <img src={Pulav} alt="pump_cake" className={styles.product} />
          <div>
            <h2 className={styles.name}>Pump Cake</h2>
            <div className={styles.rupee}>
              <div>
                <span className={styles.price_d}>Price : </span>
                <span>₹ 250</span>
              </div>
              <button className={styles.add_to_cart}>
                <span className={styles.plus}>+</span>
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
      </Div>
    </>
  );
};
const Div = styled.div`
  ${"" /* height: 400px; */}
  display:flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 2rem;
  ${"" /* width: 19rem; */}
`;
export default Item;
