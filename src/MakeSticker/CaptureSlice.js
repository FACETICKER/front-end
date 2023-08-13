// CaptureSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  captureEnabled: false,
  imageUrl: null,
};

const captureSlice = createSlice({
  name: "capture",
  initialState,
  reducers: {
    setCaptureEnabled: (state, action) => {
      state.captureEnabled = action.payload;
    },
    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
  },
});

export const { setCaptureEnabled, setImageUrl } = captureSlice.actions;
export default captureSlice.reducer;
