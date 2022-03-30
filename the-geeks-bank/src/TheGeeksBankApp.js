import React from "react";
import { Calculator } from "./components/Calculator";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";

export const TheGeeksBankApp = () => {
  return (
    <div className="container">
      <Calculator />
    </div>
  );
};
