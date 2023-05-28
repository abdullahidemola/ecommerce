import React, { useEffect } from "react";
import { gsap } from "gsap";
import schedule from "../../images/services/Schedule.jpg";
import engine from "../../images/services/Engine.jpg";
import detailing from "../../images/services/Detailing.jpg";
import painting from "../../images/services/Painting.jpg";

import "./bodySection2.scss";

const BodySection2 = () => {
  useEffect(() => {
    console.log("I'm ran");
    gsap.to(".resize", {
      duration: 1,
      scale: 1.2,
      repeat: -1,
      yoyo: true,
    });
  });
 
  return (
    <div className="service2-section">
      <h1>services</h1>

      <div className="element-container">
        <div className="services-number">
          <div className="layer3 resize">
            <div className="layer2">
              <div className="layer1">1</div>
            </div>
          </div>

          <hr className="dash-line" />

          <div className="layer3 resize">
            <div className="layer2">
              <div className="layer1">2</div>
            </div>
          </div>

          <hr className="dash-line" />

          <div className="layer3 resize ma">
            <div className="layer2">
              <div className="layer1">3</div>
            </div>
          </div>
        </div>
        <div className="services-content">
          <div className="service1 head1">
            <h1 className="sub-head">inspection</h1>
            <p>
              We can provide professional servicing and maintenance work with no
              loss of manufacturer warranty coverage.
            </p>
          </div>

          <div className="service1 head2">
            <h1 className="sub-head">diagnostics</h1>
            <p>
              A computerized car diagnostic check from Mechanic 128 will give
              you a true picture of how your vehicle is running.
            </p>
          </div>

          <div className="service1 head3">
            <h1 className="sub-head">upgrade</h1>
            <p>
              Rather than sending your car for a basic service, ask Mechanic 128
              for a thorough multi-point check and upgrade your car.
            </p>
          </div>
        </div>
      </div>
      <div className="service-list-container">
        <div className="service-list-item">
          <img src={schedule} alt="" />

          <div className="service-list-text">
            <h1>schedule</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
              voluptatibus.
            </p>
            <a href="#">learn more</a>
          </div>
        </div>

        <div className="service-list-item">
          <img src={engine} alt="" />

          <div className="service-list-text">
            <h1>engine</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, et.
            </p>
            <a href="#">learn more</a>
          </div>
        </div>

        <div className="service-list-item">
          <img src={painting} alt="" />

          <div className="service-list-text">
            <h1>painting</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
              magni?
            </p>
            <a href="#">learn more</a>
          </div>
        </div>

        <div className="service-list-item">
          <img src={detailing} alt="" />

          <div className="service-list-text">
            <h1>detailing</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, nobis.
            </p>
            <a href="#">learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySection2;
