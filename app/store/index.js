const { configureStore, combineReducers } = require("@reduxjs/toolkit");
// const { combineReducers } = require("redux");
import listingsReducer from "./listingsStore";

// const reducer = combineReducers({
//   listings: listingsReducer
// });

// export default function () {
//   return configureStore({ reducer });
// }

export default store = configureStore({
  reducer: {
    listings: listingsReducer,
  },
});
