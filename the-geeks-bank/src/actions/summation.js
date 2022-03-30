import { fetchSummation } from "../helpers/fetch";
import { types } from "../types/types";

export const makeSummation = (numbers) => async (dispatch) => {
  try {
    const resp = await fetchSummation("summation/sum", numbers);
    const body = await resp.json();

    if (resp.status === 200) {
      delete numbers.FirstNumber;
      delete numbers.SecondNumber;
      numbers.isInSequenceFibonacci = body.isFoundSequence;
      numbers.summation = body.result;
      dispatch(summation(numbers));
    }
  } catch (e) {
    console.log(e);
  }
};

const summation = (numbers) => ({
  type: types.makeSummation,
  payload: numbers,
});
