import { types } from "../types";
import codexmakerApi from "../../server/endpoints";

export const fetchCategories = () => async (dispatch) => {
  const res = await codexmakerApi("GET", `get-categories/`);
  return dispatch({ type: types.fetchCategories, payload: res?.categories });
};