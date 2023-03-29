import React from "react";
import "./button.scss";
const Button = (props) => {
  return <Button className="button">{props.children}</Button>;
};

export default Button;
