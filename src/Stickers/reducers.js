import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isImageFixed: false,
  },
  reducers: {
    setIsImageFixed(state, action) {
      state.isImageFixed = action.payload;
    },
  },
});

export const { setIsImageFixed } = appSlice.actions;

export default appSlice.reducer;
