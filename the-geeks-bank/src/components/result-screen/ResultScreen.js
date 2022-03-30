import React from "react";
import "./result-screen-styles.css";

export const ResultScreen = ({ numbers }) => {
  return (
    <>
      <textarea
        type="text"
        className="select-disable w-100"
        name="numbers"
        autocomplete="off"
        value={numbers}
        readOnly
      />
      <span>
        # Fibonacci: <strong>SI</strong>
      </span>
      <div className="content-del w-100 d-flex justify-content-between align-items-center">
        <p>0</p>
        <button>
          <i className="bi bi-backspace"></i>
        </button>
      </div>
    </>
  );
};
