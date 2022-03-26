import React from "react";
import Logo from "../images/logo.png";
import styled from "styled-components";
import cart from "../images/cart_.png";
import { Link } from "react-router-dom";
const Header = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    transition: "smooth",
  };
  return (
    <>
      <Head className="">
        <DivLogo>
          <img src={Logo} alt="logo" width={"100rem"} />
          <Link to="/" style={linkStyle}>
            <h1>InstaEats</h1>
          </Link>
        </DivLogo>

        <DivM>
          <Div>
            <H3>
              <Link to="/" style={linkStyle}>
                Home
              </Link>
            </H3>
          </Div>
          <Div>
            <H3>
              <Link to="/signup" style={linkStyle}>
                Sign Up
              </Link>
            </H3>
          </Div>
          <Div>
            <H3>
              <Link to="/signin" style={linkStyle}>
                Sign In
              </Link>
            </H3>
          </Div>
          <Div>
            <H3>
              <Link to="/contactus" style={linkStyle}>
                Contact Us
              </Link>
            </H3>
          </Div>
          <DivCart>
            <Link to="/cart">
              <img src={cart} alt="cart" />
            </Link>
          </DivCart>
        </DivM>
      </Head>
    </>
  );
};
const Head = styled.header`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding-bottom: 1rem;
  position: relative;
`;
const Div = styled.li`
  display: flex;
  margin-left: 3rem;
  padding-top: 1rem;
  cursor: pointer;
  color: black;
`;
const DivM = styled.ul`
  display: flex;
  flex-warp: wrap;
  margin-left: 3rem;
  padding-top: 0.85rem;
  cursor: pointer;
  text-decoration: none;
`;
const DivLogo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 2rem;
  padding-top: 1rem;
  cursor: pointer;
  width: 7rem;
  height: auto;
`;
const DivCart = styled.div`
  display: flex;
  margin-top: 0.7rem;
  margin-left: 2rem;
  margin-right: 2rem;
  padding-right: 0.3rem;
  background-color: #fe9118;
  border-radius: 5px;
  border: 3px solid #fe9118;
`;
const H3 = styled.h3`
  text-decoration: none;
`;
export default Header;
