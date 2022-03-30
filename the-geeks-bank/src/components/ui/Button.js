import React from "react";
import "./ui-styles.css";

export const Button = ({
  label = 1,
  isOpc = false,
  handleNumberInputChange,
}) => {
  return (
    <div
      className={`btnc select-disable ${
        isOpc ? "opc" : "normal"
      } d-flex justify-content-center align-items-center`}
      onClick={handleNumberInputChange}
    >
      {label}
    </div>
  );
};
