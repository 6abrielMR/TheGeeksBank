import Swal from "sweetalert2";
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
    } else {
      console.log(
        "No se pudo completar tu solicitud, inténtalo más tarde o comunícate con el administrador"
      );
      await showErrors();
    }
  } catch (e) {
    console.log(e);
    await showErrors();
  }
};

const summation = (numbers) => ({
  type: types.makeSummation,
  payload: numbers,
});

const showErrors = () =>
  Swal.fire({
    icon: "error",
    title: "Ocurrión un error",
    text: "Lo sentimos, no se pudo completar tu solicitud, inténtalo más tarde o comunícate con el administrador.",
  });
