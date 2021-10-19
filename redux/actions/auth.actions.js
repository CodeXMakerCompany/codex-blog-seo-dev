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
