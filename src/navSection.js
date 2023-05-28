import React from "react";

import { X } from "phosphor-react";
import "./navSection.scss";
import Button from "./utilities/Button";
const NavSection = ({ setNav }) => {
  const closeNavHandler = () => setNav(false);
  return (
    <div className="backdrop" onClick={closeNavHandler}>
      <div className="nav-side-container">
        <div className="header">
          <h1>Mechanic</h1>
          <div className="icon-x" onClick={closeNavHandler}>
            <X size={32} weight="thin" />
          </div>
        </div>
        <ul className="element">
          <li className="home">Home</li>
          <li>services</li>
          <li>about</li>
          <li>store</li>
          <li>blog</li>
          <li>pages</li>
        </ul>
        <Button className="nav-btn"> get an appoinment </Button>
      </div>
    </div>
  );
};

export default NavSection;
