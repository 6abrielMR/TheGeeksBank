import React from "react";
import "./result-screen-styles.css";

export const ResultScreen = ({
  numbers,
  isInSequenceFibonacci,
  result,
  handleInputDel,
}) => {
  return (
    <>
      <textarea
        type="text"
        className="select-disable w-100"
        name="numbers"
        autoComplete="off"
        value={numbers}
        readOnly
      />
      <span>
        # Fibonacci: <strong>{isInSequenceFibonacci ? "SI" : "NO"}</strong>
      </span>
      <div className="content-del w-100 d-flex justify-content-between align-items-center">
        <p>{result}</p>
        <button onClick={handleInputDel}>
          <i className="bi bi-backspace"></i>
        </button>
      </div>
    </>
  );
};
