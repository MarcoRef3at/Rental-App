const { configureStore } = require("@reduxjs/toolkit");
// const { combineReducers } = require('@reduxjs/toolkit');
const { combineReducers } = require("redux");
import listingsReducer from "./listingsStore";

const reducer = combineReducers({
  listings: listingsReducer
});

export default function () {
  return configureStore({ reducer });
}
