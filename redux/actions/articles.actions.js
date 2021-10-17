import { types } from "../types/types";
import codexmakerApi from "../components/utils/endpoint";

export const fetchArticles = () => async (dispatch) => {
  const res = await codexmakerApi("GET", "get-articles");
  dispatch({ type: types.fetchArticles, payload: res.articles });
};
