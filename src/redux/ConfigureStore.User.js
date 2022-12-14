import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: undefined };

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setState(state, action) {
      state.user = action.payload;
    },
    clearState(state, action) {
      state.user = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
