import React from "react";
import "./ui-styles.css";

export const Button = ({ label = 1, handleNumberInputChange }) => {
  return (
    <div
      className="btnc select-disable normal d-flex justify-content-center align-items-center"
      onClick={handleNumberInputChange}
    >
      {label}
    </div>
  );
};
