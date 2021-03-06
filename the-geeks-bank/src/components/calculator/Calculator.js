import React from "react";
import { useSelector } from "react-redux";
import { labels } from "../../data/labels";
import { useForm } from "../../hooks/useForm";
import { ResultScreen } from "../result-screen/ResultScreen";
import { Button } from "../ui/Button";
import "./calculator-styles.css";

export const Calculator = () => {
  const { isInSequenceFibonacci, summation } = useSelector(
    (state) => state.summation
  );
  const [formNumberValue, handleNumberInputChange, handleInputDel] = useForm({
    numbers: "2+2",
  });
  const { numbers } = formNumberValue;

  return (
    <>
      <div className="result-screen">
        <ResultScreen
          numbers={numbers}
          isInSequenceFibonacci={isInSequenceFibonacci}
          result={summation}
          handleInputDel={handleInputDel}
        />
      </div>
      <div className="keyboard">
        {labels.map(({ label, isOpc }) => (
          <Button
            key={label}
            label={label}
            isOpc={isOpc}
            handleNumberInputChange={handleNumberInputChange}
          />
        ))}
      </div>
    </>
  );
};
