import React from "react";
import Button from "../button/Button";

import "./button-container.css";

const ButtonContainer = ({ desc, ...otherProps }) => (
  <div className="button-container">
    <span>{desc}</span> <Button {...otherProps}>Default</Button>
  </div>
);

export default ButtonContainer;
