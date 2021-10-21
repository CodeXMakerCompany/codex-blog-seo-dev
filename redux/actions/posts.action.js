import { types } from "../types";
import codexmakerApi from "../../server/endpoints";

export const fetchPostsByPagination = (offset, limit) => async (dispatch) => {
  const res = await codexmakerApi("GET", `get-posts/${offset}/${limit}`);
  return dispatch({ type: types.fetchLatestPosts, payload: res?.data });
};

export const fetchLatestPosts = () => async (dispatch) => {
  const res = await codexmakerApi("GET", `get-latest-posts/`);
  return dispatch({ type: types.fetchLatestPosts, payload: res?.data });
};

export const fetchPostById = (id) => async (dispatch) => {
  const res = await codexmakerApi("GET", `get-post-by-id/${id}`);
  return dispatch({ type: types.fetchPostById, payload: res?.data });
};

export const fetchPostsByQuery = (keyword) => async (dispatch) => {
  const res = await codexmakerApi("GET", `get-posts-by-keyword/${keyword}`);
  return dispatch({ type: types.fetchLikeQueryPosts, payload: res?.data });
};

export const fetchPostsByCategory = (keyword) => async (dispatch) => {
  const res = await codexmakerApi("GET", `get-posts-by-category/${keyword}`);
  return dispatch({ type: types.fetchCategoryQueryPosts, payload: res?.data });
};

export const updatePostViews = (id) => async (dispatch) => {
  const res = await codexmakerApi("PUT", `update-post-by-view/${id}`);
  return dispatch({ type: types.addViewToPost, payload: res.data });
};

export const deletePost = (id) => async (dispatch) => {
  const res = await codexmakerApi("DELETE", `remove-post/${id}`);
  return dispatch({ type: types.removePost, payload: res });
};
