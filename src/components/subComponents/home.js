import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "../../utilities/Button";
import { Car, Wrench, Swap, FirstAidKit, ArrowRight } from "phosphor-react";

import "./home.scss";

const Home = () => {
  const home = useRef(null);
  let tl = gsap.timeline();

  // const
  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.from(".body-header", {
        duration: 1.9,
        y: 300,
        opacity: 0,
        ease: "power2.out",
      })
        .from(
          ".anime-p",
          {
            duration: 1.5,
            y: 80,
            opacity: 0,
            ease: "power2.out",
          },
          0.5
        )
        .from(
          ".anime-button",
          {
            duration: 1.5,
            y: 100,
            opacity: 0,
            ease: "power2.out",
          },
          0.9
        )
        .from(
          ".anime-icons",
          {
            duration: 1.5,
            y: 120,
            opacity: 0,
            ease: "power2.out",
          },
          1
        );
    }, home);

    return () => ctx.revert();
  });
  return (
    <div className="image-background">
      <div className="body-content" ref={home}>
        <div className="body-header">
          <h1>
            professional car repair <br />
            and maintenance
          </h1>
        </div>

        <p className="anime-p">
          We are focused on providing our clients with the highest <br />
          level of quality and excellent customer support.
        </p>

        <Button className="anime-button">
          <div className="text">Get an appointment now</div>
          <div className="arrow">
            <ArrowRight size={18} weight="bold" />
          </div>
        </Button>

        <div className="icons anime-icons">
          <div className="car ma">
            <Car size={40} weight="bold" />
            <span className="car-text">Automobile</span>
          </div>
          <div className="wrench ma">
            <Wrench size={40} weight="bold" />
            <span className="wrench-text">car service</span>
          </div>
          <div className="swap ma">
            <Swap size={40} weight="bold" />
            <span className="swap-text">Car mod</span>
          </div>
          <div className="firstaid ma">
            <FirstAidKit size={40} weight="bold" />
            <span className="firstaid-text">quick detect</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
