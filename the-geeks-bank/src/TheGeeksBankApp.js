import React from "react";
import { Calculator } from "./components/calculator/Calculator";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";

export const TheGeeksBankApp = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <Calculator />
      </div>
    </Provider>
  );
};
