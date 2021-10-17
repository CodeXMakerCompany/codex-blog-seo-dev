import { types } from "../types";

const INITIAL_STATE = { content: null };

export const articlesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.fetchArticles: {
        return {
            ...state,
            pending: false,
            data: action.payload,
          };
    }
     
    default:
      return state;
  }
};
