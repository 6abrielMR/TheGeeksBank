import { types } from "../types/types";

const initialState = {
  isInSequenceFibonacci: true,
  summation: 0,
};

export const summationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.makeSummation:
      return {
        ...state,
        isInSequenceFibonacci: action.payload.isInSequenceFibonacci,
        summation: action.payload.summation,
      };
    default:
      return state;
  }
};
