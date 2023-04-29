import React from "react";
import "./body.scss";
import Home from "./subComponents/home";
import BodySection from "./subComponents/bodySection";
import BodySection2 from "./subComponents/bodySection2";
import FaqSection from "./subComponents/faqSection";
import SliderSection from "./subComponents/sliderSection";
import Subscription from "./subComponents/subscription";

const Body = () => {
  return (
    <div className="body-container">
      <Home />
      <BodySection />
      <BodySection2 />
      <FaqSection />
      <SliderSection />
      <Subscription />
    </div>
  );
};

export default Body;
