import React from "react";

import "./button.css";

const Button = ({ link, variant, children }) => {
  const classList = `button ${variant ? variant : ""}`;
  return (
    <a className={classList} href={link}>
      {children}
    </a>
  );
};

export default Button;
