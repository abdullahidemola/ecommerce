import React from "react";

import { Check, ArrowRight } from "phosphor-react";
import "./subscription.scss";
import Button from "../../utilities/Button";

const Subscription = () => {
  return (
    <div className="subscription-container">
      <div className="subscription-header">
        <h1>choose our pack</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          molestias sapiente itaque consequuntur saepe nisi debitis voluptates
          dolore amet velit.
        </p>
      </div>

      <div className="subscription-types">
        <div className="card starter">
          <p>starter price</p>
          <div className="price-container">
            <h1 className="price">$138 </h1>
            <span className="strike">$300</span>
          </div>

          <div className="service service1">
            <div className="check">
              <Check size={25} weight="bold" />
            </div>
            <span className="service-text">radaitor flush</span>
          </div>

          <div className="service service2">
            <div className="check">
              <Check size={25} weight="bold" />
            </div>
            <span className="service-text">Transmission flush</span>
          </div>

          <div className="service service3">
            <div className="check">
              <Check size={25} weight="bold" />
            </div>
            <span className="service-text">brake fluid flush</span>
          </div>

          <div className="service service4">
            <div className="check">
              <Check size={25} weight="bold" />
            </div>
            <span className="service-text">batteries</span>
          </div>

          <Button>
            <div className="text">read more </div>
            <div className="arrow">
              <ArrowRight size={16} weight="bold" />
            </div>
          </Button>
        </div>

        <div className="card regular">
          <p>regular price</p>
          <div className="price-container">
            <h1 className="price">$238 </h1>
            <span className="strike">$499</span>
          </div>

          <div className="service service1">
            <div className="check">
              <Check size={25} weight="bold" />
            </div>
            <span className="service-text">hour labour rate</span>
          </div>

          <div className="service service2">
            <div className="check">
              <Check size={25} weight="bold" />
            </div>
            <span className="service-text">wheels/tires balancing</span>
          </div>

          <div className="service service3">
            <div className="check">
              <Check size={25} weight="bold" />
            </div>
            <span className="service-text">brake pad</span>
          </div>

          <div className="service service4">
            <div className="check">
              <Check size={25} weight="bold" />
            </div>
            <span className="service-text">power steering</span>
          </div>

          <Button>
            <div className="text">read more </div>
            <div className="arrow">
              <ArrowRight size={18} weight="bold" />
            </div>
          </Button>
        </div>

        <div className="card advanced">
          <p>advanced</p>
          <div className="price-container">
            <h1 className="price">$338 </h1>
            <span className="strike">$699</span>
          </div>

          <div className="service service1">
            <div className="check">
              <Check size={25} weight="bold" />
            </div>
            <span className="service-text">engine turn up</span>
          </div>

          <div className="service service2">
            <div className="check">
              <Check size={25} weight="bold" />
            </div>
            <span className="service-text">new batteries</span>
          </div>

          <div className="service service3">
            <div className="check">
              <Check size={25} weight="bold" />
            </div>
            <span className="service-text">mounting and balancing tier</span>
          </div>

          <div className="service service4">
            <div className="check">
              <Check size={25} weight="bold" />
            </div>
            <span className="service-text">towing assistance</span>
          </div>

          <Button>
            <div className="text">read more </div>
            <div className="arrow">
              <ArrowRight size={18} weight="bold" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
