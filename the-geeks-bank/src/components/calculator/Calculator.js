import React from "react";
import { labels } from "../../data/labels";
import { useForm } from "../../hooks/useForm";
import { ResultScreen } from "../result-screen/ResultScreen";
import { Button } from "../ui/Button";
import "./calculator-styles.css";

export const Calculator = () => {
  const [formNumberValue, handleNumberInputChange, handleInputDel] = useForm({
    numbers: "2+2",
  });
  const { numbers } = formNumberValue;

  return (
    <>
      <div className="result-screen">
        <ResultScreen numbers={numbers} />
      </div>
      <div className="keyboard">
        {labels.map(({ label }) => (
          <Button
            key={label}
            label={label}
            handleNumberInputChange={handleNumberInputChange}
          />
        ))}
      </div>
    </>
  );
};
