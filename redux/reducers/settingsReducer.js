import { types } from "../types";

const INITIAL_STATE = { theme: 'light', lang: null, user: null, lastItemSelected: null, lastLinkSelected : null }

export const settingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.setSettings:
      return {
        theme: action.payload.theme,
        lang: action.payload.lang,
        user: action.payload.user,
        lastItemSelected: action.payload.lastItemSelected,
        lastLinkSelected: action.payload.lastLinkSelected,
        lastPostIdSelected: action.payload.lastPostIdSelected
      };
    default:
      return state;
  }
};