import React from "react";

import "./sliderSection.scss";

import Customer from "../../utilities/customer";

const data = [
  {
    name: "kristin watson",
    occupation: "f1 racer",
    image: `${require("../../images/scroll/Kristin Watson.jpg")}`,
    review:
      "It’s such a pleasure dealing with them. Everything is so convenient. They do the job efficiently, and timely, and charge exactly what they said they would. I stopped going to the dealership because I never got such good service from them. I was very happy with the work completed by Mechanic 128.",
  },

  {
    name: "brandon renzo",
    occupation: "car deal ownership",
    image: `${require("../../images/scroll/Brandon Renzo.jpg")}`,
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quisquam sequi recusandae cum iste quod rem optio blanditiis quos ipsum molestias rerum, accusamus repellat, eos totam aperiam cumque. Quaerat, ea?",
  },

  {
    name: "carla bernis",
    occupation: "regular customer",
    image: `${require("../../images/scroll/Carla Bernis.jpg")}`,
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quisquam sequi recusandae cum iste quod rem optio blanditiis quos ipsum molestias rerum, accusamus repellat, eos totam aperiam cumque. Quaerat, ea?",
  },
];
const SliderSection = () => {
  return (
    <div className="slider-container">
      <div className="slider-box">
        <div className="slider-section"></div>
        <Customer customer={data}/>
      </div>
    </div>
  );
};

export default SliderSection;
