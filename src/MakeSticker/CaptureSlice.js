// CaptureSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  captureEnabled: false,
  imageUrl: null,
  visitorimageUrl: null,
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
    setVisitorImageUrl: (state, action) => {
      state.visitorimageUrl = action.payload;
    },
    setVisitorId: (state, action) => {
      state.visitorId = action.payload;
    },
  },
});

export const {
  setVisitorId,
  setCaptureEnabled,
  setImageUrl,
  setVisitorImageUrl,
} = captureSlice.actions;
export default captureSlice.reducer;
