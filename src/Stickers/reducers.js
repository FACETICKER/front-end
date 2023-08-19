import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isImageFixed: false,
    isImageFixed2: false,
    imagevisible: false,
    change: true,
    reset: false,
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
    setreset(state, action) {
      state.reset = action.payload;
    },
  },
});

export const {
  setreset,
  setIsImageFixed,
  setIsImageVisible,
  setIsImageFixed2,
  setChange,
} = appSlice.actions;

export default appSlice.reducer;
