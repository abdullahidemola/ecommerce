import React from "react";
import Button from "../../utilities/Button";
import { Car, Wrench, Swap, FirstAidKit, ArrowRight } from "phosphor-react";
import "./home.scss";
const Home = () => {
  return (
    <div className="image-background">
      <div className="body-content">
        <div className="body-header">
          <h1>
            professional car repair <br />
            and maintenance
          </h1>
        </div>

        <p>
          We are focused on providing our clients with the highest <br />
          level of quality and excellent customer support.
        </p>
        <Button>
          <div className="text">Get an appointment now</div>
          <div className="arrow">
            <ArrowRight size={18} weight="bold" />
          </div>
        </Button>
        <div className="icons">
          <div className="car">
            <Car size={40} weight="bold" />
            <span className="car-text">Automobile</span>
          </div>
          <div className="wrench">
            <Wrench size={40} weight="bold" />
            <span className="wrench-text">car service</span>
          </div>
          <div className="swap">
            <Swap size={40} weight="bold" />
            <span className="swap-text">Car mod</span>
          </div>
          <div className="firstaid">
            <FirstAidKit size={40} weight="bold" />
            <span className="firstaid-text">quick detect</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
