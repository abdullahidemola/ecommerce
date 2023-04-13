import React from "react";
import { ShoppingCart } from "phosphor-react";
import Button from "../utilities/Button";
import "./navbar.scss";
const NavBar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-title">
          <h1>mechanic</h1>
        </div>
        <div className="navbar-elements">
          <div>
            <span className="home">home</span>
            <span>service</span>
            <span>about</span>
            <span>store</span>
            <span>blog</span>
          </div>
        </div>
        <div className="contact-section">
          <span className="number">+234123456789</span>
          <div className="cart">
            <ShoppingCart size={32} weight="thin" />
            <p className="cart-item">0</p>
          </div>
          <Button>Get an appointment</Button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
