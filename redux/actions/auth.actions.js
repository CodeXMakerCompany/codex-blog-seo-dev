import { types } from "../types";

export const login = (_id, name, rol) => {
  return {
    type: types.login,
    payload: {
      _id,
      name,
      rol
    },
  };
};

export const setUser = (content) => {
  return {
    type: types.setUser,
    payload: content,
  };
};
