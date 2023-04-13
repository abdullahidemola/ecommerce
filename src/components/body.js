import React from "react";
import "./body.scss";
import Home from "./subComponents/home";
import BodySection from "./subComponents/bodySection";
import BodySection2 from "./subComponents/bodySection2";

const Body = () => {
  return (
    <div className="body-container">
      <Home />
      <BodySection />
      <BodySection2 />
    </div>
  );
};

export default Body;
