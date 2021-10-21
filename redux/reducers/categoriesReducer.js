import { types } from "../types";

const INITIAL_STATE = { categories: null };

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.fetchCategories: {
      return {
        ...state,
        categories: action.payload,
      };
    }

    default:
      return state;
  }
};
