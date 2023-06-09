import React, { useState, useRef, useEffect } from "react";

import { gsap } from "gsap";

import Button from "../../utilities/Button";
import { ArrowRight, Robot, GearSix, UsersThree } from "phosphor-react";
import "./bodySection.scss";

import useIntersection from "../../hooks/intersectionHook";

const BodySection = () => {
  const [firstValid, setFirstValid] = useState(false);
  const [secondValid, setSecondValid] = useState(false);
  const [thirdValid, setThirdValid] = useState(false);

  const [targetRef, isIntersecting] = useIntersection(0.2, "0px");

  const fadeIn = (el) => {
    gsap.to(el, {
      duration: 3,
      opacity: 1,
      ease: "power2.out",
      stagger: { amount: 0.3 },
    });
  };

  const fadeOut = (el) => {
    gsap.to(el, {
      duration: 3,
      opacity: 0,
      ease: "power2.out",
    });
  };

  // isIntersecting ? fadeIn(".fade") : fadeOut(".fade");

  const onClickHandler = (event) => {
    console.log(event.target.id);
    if (event.target.id === "first") {
      setFirstValid((prev) => !prev);
      setSecondValid(false);
      setThirdValid(false);
    }
    if (event.target.id === "second") {
      setSecondValid((prev) => !prev);
      setFirstValid(false);
      setThirdValid(false);
    }
    if (event.target.id === "third") {
      setThirdValid((prev) => !prev);
      setSecondValid(false);
      setFirstValid(false);
    }
  };

  return (
    <div className="services-section-container" ref={targetRef}>
      <div className="service-section ">
        <div className="performance-check section ">
          <div className="engine">
            <Robot size={36} weight="bold" />
          </div>
          <h2 classname="fade">performance check</h2>
          <p classname="fade">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste rem
            impedit dolore!
          </p>
          <Button className="fade">
            <div className="text">read more </div>
            <div className="arrow">
              <ArrowRight size={18} weight="bold" />
            </div>
          </Button>
        </div>
        <div className="auto-repair section ">
          <div className="gear">
            <GearSix size={36} weight="bold" />
          </div>
          <h2 classname="fade">auto repair</h2>
          <p classname="fade">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            deserunt?
          </p>
          <Button className="fade">
            <div className="text">read more </div>
            <div className="arrow">
              <ArrowRight size={18} weight="bold" />
            </div>
          </Button>
        </div>
        <div className="fleet-service section ">
          <div className="group">
            <UsersThree size={36} weight="bold" />
          </div>
          <h2 classname="fade">fleet service</h2>
          <p classname="fade">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
            debitis! Obcaecati!
          </p>
          <Button className="fade">
            <div className="text">read more </div>
            <div className="arrow">
              <ArrowRight size={18} weight="bold" />
            </div>
          </Button>
        </div>
      </div>

      <div className="why-us-container fade">
        <div className="why-us">
          <h1>why us?</h1>
          <p>
            All Mechanic 128 workshops employ the latest test techniques and
            digital information systems. This ideal combination ensures
            systematic vehicle diagnosis and qualified repair work.
          </p>
          <Button>
            view more
            <div className="arrow">
              <ArrowRight size={18} weight="bold" />
            </div>
          </Button>
        </div>
        <div className="why-us-text">
          <h1
            className={`${firstValid ? " active" : ""}`}
            id="first"
            onClick={onClickHandler}
          >
            900 five star reviews
          </h1>
          {firstValid && (
            <p>
              Our auto shop technicians are dedicated to helping you get back on
              the road. Zero risks with warranty. Get fair and transparent
              estimates!
            </p>
          )}
          <h1
            className={`${secondValid ? " active" : ""}`}
            onClick={onClickHandler}
            id="second"
          >
            free diagnosis
          </h1>
          {secondValid && (
            <p>
              Regular quality checks make sure our standards are maintained.
              These form the basis for our efforts to carry on improving - with
              particular emphasis on training and qualifications.
            </p>
          )}
          <h1
            className={`${thirdValid ? " active" : ""}`}
            onClick={onClickHandler}
            id="third"
          >
            no appointment necessary
          </h1>
          {thirdValid && (
            <p>Enjoy the benefits of quick, precise fault diagnosis.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BodySection;
