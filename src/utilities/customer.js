import React, { useState } from "react";

import { ArrowCircleLeft } from "phosphor-react";
import { ArrowCircleRight } from "phosphor-react";

const Customer = ({ customer }) => {
  const [currentValue, setCurrentValue] = useState(0);

  const previousCustomerHandler = () => {
    const firstSlide = currentValue === 0;
    const newIndex = firstSlide ? customer.length - 1 : currentValue - 1;
    setCurrentValue(newIndex);
  };

  const nextCustomerHandler = () => {
    const lastSlide = currentValue === customer.length - 1;
    const newIndex = lastSlide ? 0 : currentValue + 1;
    setCurrentValue(newIndex);
  };
  return (
    <div className="slider-content-container">
      <div className="img">
        <div className="arrow arrow-left" onClick={previousCustomerHandler}>
          <ArrowCircleLeft size={50} weight="thin" />
        </div>
        <div className="img-wrapper">
          <img src={customer[currentValue].image} alt="customers" />
        </div>
        <div className="arrow arrow-right" onClick={nextCustomerHandler}>
          <ArrowCircleRight size={50} weight="thin" />
        </div>
      </div>

      <div className="review-container">
        <h1>what our customer say</h1>
        <p className="review">{customer[currentValue].review}</p>
        <h3 className="name">{customer[currentValue].name}</h3>
        <p className="occupation">{customer[currentValue].occupation}</p>
      </div>
    </div>
  );
};

export default Customer;
