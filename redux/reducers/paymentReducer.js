import { types } from "../types";

const INITIAL_STATE = {};

export const paymentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.payment:
      return {
        amount: action.payload.amount,
        product: action.payload.product
      };
    default:
      return state;
  }
};
