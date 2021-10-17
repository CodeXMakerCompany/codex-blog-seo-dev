import { types } from "../types";

const INITIAL_STATE = {};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.login:
      return {
        _id: action.payload._id,
        name: action.payload.name,
      };
    case types.logout:
      return {};
    default:
      return state;
  }
};
