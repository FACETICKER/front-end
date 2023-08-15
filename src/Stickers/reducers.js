import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isImageFixed: false,
    imagevisible: false,
  },
  reducers: {
    setIsImageFixed(state, action) {
      state.isImageFixed = action.payload;
    },
    setIsImageVisible(state, action) {
      state.imagevisible = action.payload;
    },
  },
});

export const { setIsImageFixed, setIsImageVisible } = appSlice.actions;

export default appSlice.reducer;
