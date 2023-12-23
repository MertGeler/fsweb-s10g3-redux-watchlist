import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import logger from "redux-logger";

import movieReducer from "./reducers/movieReducer";
import favoriteReducer from "./reducers/favoriteReducer";

const dukkanReducer = combineReducers({
  movieReducer,
  favoriteReducer,
});

const dukkan = createStore(dukkanReducer, applyMiddleware(logger));

export default dukkan;
