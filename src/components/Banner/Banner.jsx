import React from "react";
import styled from "styled-components";
import homeBanner from "../../images/feepik.png";
import stlyes from "./Banner.module.css";
const Banner = () => {
  const textStyle = {
    fontSize: "4.5rem",
    color: "black",
  };
  return (
    <Div>
      <DivS>
        <h2 className="">Are You Hungry ?</h2>
        <h1 style={textStyle}>Don't Wait !</h1>
        <h2>A Moments of Delivered on Time</h2>
        <Button>
          <h5>Order Now</h5>
        </Button>
      </DivS>
      <DivS>
        <Img src={homeBanner} alt="banner" />
      </DivS>
    </Div>
  );
};

const Div = styled.div`
  background-color: #f7f7f7;
  display: flex;
  justify-content: between;
`;
const DivS = styled.div`
  flex: 50%;
  background-color: #f7f7f7;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Button = styled.button`
  background-color: #fe9118;
  margin-top: 1rem;
  border: none;
  padding: 0.2rem;
  font-size: 1.8rem;
  border-radius: 2rem;
  cursor: pointer;
  padding: 0.5rem;
`;
const Img = styled.img`
  justify-content: center;
  width: 100%;
  height: auto;
`;
export default Banner;
