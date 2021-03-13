import React from "react";

import "./button.css";

const Button = (props) => {
  const {
    variant,
    size,
    color,
    disableShadow,
    disabled,
    startIcon,
    endIcon,
    children,
  } = props;

  // add classes to from props to classList
  let classList = ["button"];
  classList.push(disableShadow ? "disable-shadow" : undefined);
  classList.push(variant);
  classList.push(color);
  if (startIcon || endIcon) {
    classList.push("icon");
  }
  if (startIcon) {
    classList.push("start-icon");
    classList.push(startIcon);
  } else if (endIcon) {
    classList.push("end-icon");
    classList.push(endIcon);
  }
  classList.push(size ? `size-${size}` : undefined);
  classList.push(disabled ? "disabled" : undefined);
  classList = classList.filter((className) => className);

  return (
    <a className={classList.join(" ")} href={"./"}>
      {children}
    </a>
  );
};

export default Button;
