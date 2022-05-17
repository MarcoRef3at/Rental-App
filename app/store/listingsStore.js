import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "bugs",
  initialState: [
    {
      name: "Marcooooooooooooo"
    }
  ],
  reducers: {
    bugAdded: (bug, action) => {
      state.push({
        description: action.payload.description,
        resolved: false
      });
    },
    bugResolved: (state, action) => {
      const index = state.indexOf(action.payload.id);
      state[index].resolved = true;
    }
  }
});

export const { bugAdded, bugResolved } = slice.actions;
export default slice.reducer;

// Selector
// export const getUnresolvedBugs = createSelector(
//   state => state.listing,
//   listings => listings.filter(listing => !listing.resolved)
// );

// store.dispatch(bugAdded({description:"bug1"}))

// getUnresolvedBugs(store.getState)
