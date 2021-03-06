import { useState } from "react";
import { useDispatch } from "react-redux";
import { makeSummation } from "../actions/summation";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();

  const validateNumbers = (numbers) => {
    const FirstNumber = numbers.split("+")[0];
    const SecondNumber = numbers.split("+")[1];
    return !FirstNumber || !SecondNumber ? {} : { FirstNumber, SecondNumber };
  };

  const handleInputDel = () => {
    setValues({
      ...values,
      numbers: values.numbers.substring(0, values.numbers.length - 1),
    });
  };

  const handleInputChange = ({ target }) => {
    if (values.numbers.length === 0 && target.innerText === "+") {
      return;
    }

    if (target.innerText === "+" && values.numbers.includes(target.innerText)) {
      return;
    }

    if (target.innerText === "=") {
      const { FirstNumber, SecondNumber } = validateNumbers(values.numbers);

      if (!FirstNumber || !SecondNumber) {
        return;
      }

      dispatch(
        makeSummation({
          FirstNumber,
          SecondNumber,
        })
      );
      return;
    }

    if (
      target.innerText === "=" &&
      values.nubmers.substring(
        values.numbers.length - 1,
        values.nubmers.length
      ) === "+"
    ) {
      return;
    }

    setValues({
      ...values,
      numbers: values.numbers.concat(target.innerText),
    });
  };

  return [values, handleInputChange, handleInputDel];
};
