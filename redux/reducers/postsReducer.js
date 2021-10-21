import { types } from "../types";

const INITIAL_STATE = { data: null, targetPost: null, posts : null };

export const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.addViewToPost: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case types.fetchPostById: {
      return {
        ...state,
        targetPost: action.payload,
      };
    }
    case types.fetchLatestPosts: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case types.fetchPostsByPagination: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case types.fetchLikeQueryPosts: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case types.fetchCategoryQueryPosts: {
      return {
        ...state,
        posts: action.payload,
      };
    }

    default:
      return state;
  }
};
