import { types } from "../types";

const INITIAL_STATE = {};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.cartAddItem:
      return {
        amount: action.payload.amount,
        product: action.payload.product,
      };
    case types.cartRemoveItem:
      return {
        amount: action.payload.amount,
        product: action.payload.product,
      };
    case types.cartCleanItem:
      return {
        amount: action.payload.amount,
        product: action.payload.product,
      };
    default:
      return state;
  }
};
