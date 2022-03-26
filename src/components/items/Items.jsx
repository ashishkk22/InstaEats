import React from "react";
import styled from "styled-components";
import Item from "../item/Item";
import styles from "./Items.module.css";
const Items = () => {
  return (
    <>
      <H1>All Items</H1>
      <Div>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Div>
    </>
  );
};
const H1 = styled.h1`
  text-align: center;
  justify-content: center;
  justify-content: center;
  margin: 1.5rem;
`;
const Div = styled.div`
  ${"" /* height: 400px; */}
  display:flex;
  flex-wrap: wrap;
  gap: 3rem;
  ${"" /* margin-left: 7rem; */}
  justify-content:center;
`;
export default Items;
