import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isImageFixed: false,
    isImageFixed2: false,
    imagevisible: false,
    change: true,
  },
  reducers: {
    setIsImageFixed(state, action) {
      state.isImageFixed = action.payload;
    },
    setIsImageFixed2(state, action) {
      state.isImageFixed2 = action.payload;
    },
    setChange(state, action) {
      state.change = action.payload;
    },
    setIsImageVisible(state, action) {
      state.imagevisible = action.payload;
    },
  },
});

export const {
  setIsImageFixed,
  setIsImageVisible,
  setIsImageFixed2,
  setChange,
} = appSlice.actions;

export default appSlice.reducer;
