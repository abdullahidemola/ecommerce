import React, { useState } from "react";
import { gsap } from "gsap";
import "./faqSection.scss";

import { CaretCircleDown } from "phosphor-react";

import faqImage from "../../images/faq/Retro Car.jpg";
import brooklyn from "../../images/specialists/BROOKLYN SIMMONS-p-500.jpg";
import guy from "../../images/specialists/GUY HAWKINS-p-500.jpg";
import jacob from "../../images/specialists/Jacob Jones-p-500.jpg";
import robert from "../../images/specialists/ROBERT FOX.jpg";

const FaqSection = () => {
  // let rotate = gsap.to();
  const [active, setActive] = useState({
    isActive1: false,
    isActive2: false,
    isActive3: false,
    isActive4: false,
    isActive5: false,
  });

  // const [click, setClick] = useState(false);

  const display = (ele1, ele2) => {
    gsap.to(ele1, {
      duration: 1,
      rotation: 180,
      ease: "power1.out",
    });

    gsap.to(ele2, {
      duration: 1.5,
      opacity: 1,
      y: -10,
      ease: "power1.out",
    });
  };

  const hide = (ele) => {
    gsap.to(ele, {
      duration: 1,
      ease: "power1.out",
      rotation: 0,
    });
  };

  const onClickHandler = (event) => {
    let truthy = false;
    if (event.target.className.includes("text1")) {
      truthy = !active.isActive1;
      console.log(truthy);
      setActive({
        isActive1: truthy,
        isActive2: false,
        isActive3: false,
        isActive4: false,
        isActive5: false,
      });
      truthy ? display(".icon1", ".answer1") : hide(".icon1");
    }

    if (event.target.className.includes("text2")) {
      const truthy = !active.isActive2;
      setActive({ isActive2: truthy });
      truthy ? display(".icon2") : hide(".icon2");
    }
    if (event.target.className.includes("text3")) {
      const truthy = !active.isActive3;
      setActive({ isActive3: truthy });
      truthy ? display(".icon3") : hide(".icon3");
    }
    if (event.target.className.includes("text4")) {
      const truthy = !active.isActive4;
      setActive({ isActive4: truthy });
      truthy ? display(".icon4") : hide(".icon4");
    }
    if (event.target.className.includes("text5")) {
      const truthy = !active.isActive5;
      setActive({ isActive5: truthy });
      truthy ? display(".icon5") : hide(".icon5");
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
          <div className="image-faq">
            <img src={faqImage} alt="" />
          </div>
        </div>

        <div className="fa-questions">
          <div className="overlay" onClick={onClickHandler}>
            <div className="text text1">
              <p className={`${active.isActive1 ? "active" : " "}`}>
                how long will you take to fix my car?
              </p>
              <div className="icon-container">
                <div
                  className={`icon icon1 ${active.isActive1 ? "active" : " "}`}
                >
                  <CaretCircleDown size={32} weight="thin" />
                </div>
              </div>
            </div>
          </div>

          {active.isActive1 && (
            <div
              className={`answer answer1 ${active.isActive1 ? "active" : ""}`}
            >
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
              <div className="icon-container">
                <div
                  className={`icon icon2 ${active.isActive2 ? "active" : " "}`}
                >
                  <CaretCircleDown size={32} weight="thin" />
                </div>
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
              <div className="icon-container">
                <div
                  className={`icon icon3 ${active.isActive3 ? "active" : " "}`}
                >
                  <CaretCircleDown size={32} weight="thin" />
                </div>
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
              <div className="icon-container">
                <div
                  className={`icon icon4 ${active.isActive4 ? "active" : " "}`}
                >
                  <CaretCircleDown size={32} weight="thin" />
                </div>
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
              <div className="icon-container">
                <div
                  className={`icon icon5 ${active.isActive5 ? "active" : " "}`}
                >
                  <CaretCircleDown size={32} weight="thin" />
                </div>
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
