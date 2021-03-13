import React from "react";

import "./button.css";

const Button = ({ variant, disableShadow, disabled, children }) => {
  // add classes to from props to classList
  let classList = ["button"];
  classList.push(disableShadow ? "disable-shadow" : undefined);
  classList.push(variant);
  classList.push(disabled ? "disabled" : undefined);
  classList = classList.filter((className) => className);

  return (
    <a className={classList.join(" ")} href={"./"}>
      {children}
    </a>
  );
};

export default Button;
