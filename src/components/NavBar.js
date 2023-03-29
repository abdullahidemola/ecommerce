import React from "react";
import { ShoppingCart } from "phosphor-react";
import Button from "../utilities/Button";
const NavBar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-title">
          <h1>mechanic</h1>
        </div>
        <div className="navbar-elements">
          <ul>
            <li>home</li>
            <li>service</li>
            <li>about</li>
            <li>store</li>
            <li>blog</li>
          </ul>
        </div>
        <div className="contact-section">
          <ul>
            <li>+234123456789</li>
            <li>
              <ShoppingCart size={32} weight="thin" />
              <div className="cart-item">0</div>
            </li>
            <li>
              <Button>Get an appointment</Button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
