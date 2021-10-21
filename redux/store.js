import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from 'next-redux-wrapper';
//Session
import { authReducer } from "./reducers/authReducer";

import { modalReducer } from "./reducers/modalReducer";
import { snackBarReducer } from "./reducers/snackBarReducer";
import { settingsReducer } from "./reducers/settingsReducer";

//Handling data
import { articlesReducer } from "./reducers/articlesReducer";
import { postsReducer } from "./reducers/postsReducer";
import { categoriesReducer } from "./reducers/categoriesReducer";

const reducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  snackbar: snackBarReducer,
  articles: articlesReducer,
  settings: settingsReducer,
  posts: postsReducer,
  categories: categoriesReducer
});

let composeEnhancers = compose;
if (typeof window !== 'undefined') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

 const initStore = () => createStore(
  reducers,
  applyMiddleware(thunk)
);

export const reduxWrapper = createWrapper(initStore);
