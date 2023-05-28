import React from "react";
import { ShoppingCart, List } from "phosphor-react";
import Button from "../utilities/Button";
import "./navbar.scss";
const NavBar = ({ setNav }) => {
  const showNavHandler = () => setNav(true);
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-title">
          <h1>mechanic</h1>
        </div>
        <div className="navbar-elements">
          <div className="navbar-element-container">
            <span className="home">home</span>
            <span>service</span>
            <span>about</span>
            <span>store</span>
            <span>blog</span>
          </div>
        </div>
        <div className="contact-section">
          <span className="number">+234123456789</span>
          <div className="cart cart-center">
            <ShoppingCart size={32} weight="thin" />
            <p className="cart-item">0</p>
          </div>
          <div className="list" onClick={showNavHandler}>
            <List size={34} weight="thin" />
          </div>
          <Button className="btn-nav">Get an appointment</Button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
