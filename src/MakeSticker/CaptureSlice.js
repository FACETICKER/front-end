// CaptureSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  captureEnabled: false,
};

const captureSlice = createSlice({
  name: "capture",
  initialState,
  reducers: {
    setCaptureEnabled: (state, action) => {
      state.captureEnabled = action.payload;
    },
  },
});

export const { setCaptureEnabled } = captureSlice.actions;
export default captureSlice.reducer;
