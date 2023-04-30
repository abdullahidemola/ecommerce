import React, { useState } from "react";
import "./faqSection.scss";
import { CaretCircleDown } from "phosphor-react";
import faqImage from "../../images/faq/Retro Car.jpg";
import brooklyn from "../../images/specialists/BROOKLYN SIMMONS-p-500.jpg";
import guy from "../../images/specialists/GUY HAWKINS-p-500.jpg";
import jacob from "../../images/specialists/Jacob Jones-p-500.jpg";
import robert from "../../images/specialists/ROBERT FOX.jpg";
const FaqSection = () => {

  const [active, setActive] = useState({
    isActive1: false,
    isActive2: false,
    isActive3: false,
    isActive4: false,
    isActive5: false,
  });

  const onClickHandler = (event) => {
    if (event.target.className.includes("text1")) {
      console.log("clicked");
      const truthy = !active.isActive1;
      setActive({ isActive1: truthy });
    }

    if (event.target.className.includes("text2")) {
      console.log("clicked");
      const truthy = !active.isActive2;
      setActive({ isActive2: truthy });
    }
    if (event.target.className.includes("text3")) {
      console.log("clicked");
      const truthy = !active.isActive3;
      setActive({ isActive3: truthy });
    }
    if (event.target.className.includes("text4")) {
      console.log("clicked");
      const truthy = !active.isActive4;
      setActive({ isActive4: truthy });
    }
    if (event.target.className.includes("text5")) {
      console.log("clicked");
      const truthy = !active.isActive5;
      setActive({ isActive5: truthy });
    }
  };

  return (
    <div className="faq-section-container">
      <div className="faq-section">
        <div className="faq-news">
          <h1>faq's & news</h1>
          <p>
            Customer satisfaction is the measure of our success. Our unique
            service promises mean a commitment to finding the best possible
            solution to any problem.
          </p>
          <img src={faqImage} alt="" />
        </div>

        <div className="fa-questions">
          <div className="overlay" onClick={onClickHandler}>
            <div className="text text1">
              <p className={`${active.isActive1 ? "active" : " "}`}>
                how long will you take to fix my car?
              </p>
              <div className={`icon ${active.isActive1 ? "active" : " "}`}>
                <CaretCircleDown size={32} weight="thin" />
              </div>
            </div>
          </div>

          {active.isActive1 && (
            <div className="answer">
              Your car might need service for a multitude of reasons from any
              assortment of low fluids, worn brake linings, or component
              malfunctions. Depending on what the issue is, it could be fixed in
              a day or take over 1 week for a major job. Once we diagnose your
              car, we will be able to give you a better estimate for how long
              the repair will take.
            </div>
          )}

          <hr />

          <div className="overlay" onClick={onClickHandler}>
            <div className="text text2">
              <p className={`${active.isActive2 ? "active" : " "}`}>
                do i need to make an appoinment?
              </p>
              <div className={`icon ${active.isActive2 ? "active" : " "}`}>
                <CaretCircleDown size={32} weight="thin" />
              </div>
            </div>
          </div>

          {active.isActive2 && (
            <div className="answer">
              Your car might need service for a multitude of reasons from any
              assortment of low fluids, worn brake linings, or component
              malfunctions. Depending on what the issue is, it could be fixed in
              a day or take over 1 week for a major job. Once we diagnose your
              car, we will be able to give you a better estimate for how long
              the repair will take.
            </div>
          )}

          <hr />

          <div className="overlay" onClick={onClickHandler}>
            <div className="text text3">
              <p className={`${active.isActive3 ? "active" : " "}`}>
                do u have a warranty?
              </p>
              <div className={`icon ${active.isActive3 ? "active" : " "}`}>
                <CaretCircleDown size={32} weight="thin" />
              </div>
            </div>
          </div>

          {active.isActive3 && (
            <div className="answer">
              Your car might need service for a multitude of reasons from any
              assortment of low fluids, worn brake linings, or component
              malfunctions. Depending on what the issue is, it could be fixed in
              a day or take over 1 week for a major job. Once we diagnose your
              car, we will be able to give you a better estimate for how long
              the repair will take.
            </div>
          )}

          <hr />

          <div className="overlay" onClick={onClickHandler}>
            <div className="text text4">
              <p className={`${active.isActive4 ? "active" : " "}`}>
                do u complete auto restoration?
              </p>
              <div className={`icon ${active.isActive4 ? "active" : " "}`}>
                <CaretCircleDown size={32} weight="thin" />
              </div>
            </div>
          </div>

          {active.isActive4 && (
            <div className="answer">
              Your car might need service for a multitude of reasons from any
              assortment of low fluids, worn brake linings, or component
              malfunctions. Depending on what the issue is, it could be fixed in
              a day or take over 1 week for a major job. Once we diagnose your
              car, we will be able to give you a better estimate for how long
              the repair will take.
            </div>
          )}

          <hr />

          <div className="overlay" onClick={onClickHandler}>
            <div className="text text5">
              <p className={`${active.isActive5 ? "active" : " "}`}>
                can u do a full technical inspection of the car
              </p>
              <div className={`icon ${active.isActive5 ? "active" : " "}`}>
                <CaretCircleDown size={32} weight="thin" />
              </div>
            </div>
          </div>

          {active.isActive5 && (
            <div className="answer">
              Your car might need service for a multitude of reasons from any
              assortment of low fluids, worn brake linings, or component
              malfunctions. Depending on what the issue is, it could be fixed in
              a day or take over 1 week for a major job. Once we diagnose your
              car, we will be able to give you a better estimate for how long
              the repair will take.
            </div>
          )}

          <hr />
        </div>
      </div>

      <div className="specialist">
        <h1>meet our specialist</h1>

        <div className="img-section">
          <div className="img-wrapper">
            <img src={brooklyn} alt="" />
            <h2>brooklyn simmons</h2>
            <p>founder of carly</p>
          </div>

          <div className="img-wrapper">
            <img src={guy} alt="" />
            <h2>guy hawkins</h2>
            <p>main mechanic</p>
          </div>

          <div className="img-wrapper">
            <img src={robert} alt="" />
            <h2>robert fox</h2>
            <p>mechanic</p>
          </div>

          <div className="img-wrapper">
            <img src={jacob} alt="" />
            <h2>jacob jones</h2>
            <p>mechanic</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
