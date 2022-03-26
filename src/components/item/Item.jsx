import React from "react";
import styled from "styled-components";
import PumpCake from "../../images/pump_cake.jpg";
import styles from "./Item.module.css";
const Item = () => {
  return (
    <>
      <Div>
        <div className={styles.round}>
          <img src={PumpCake} alt="pump_cake" className={styles.product} />
          <div>
            <h2 className={styles.name}>Pump Cake</h2>
            <div className={styles.rupee}>
              <span>price: ₹250</span>
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

  ${"" /* width: 19rem; */}
`;
export default Item;
