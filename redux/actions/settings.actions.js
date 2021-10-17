import { types } from "../types";

export const setSettings = (theme, lang, user, lastItemSelected, lastLinkSelected, lastPostIdSelected) => {
  return {
    type: types.setSettings,
    payload: {
      theme,
      lang,
      user,
      lastItemSelected,
      lastLinkSelected,
      lastPostIdSelected
    },
  };
};
