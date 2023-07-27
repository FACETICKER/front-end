import { createSlice } from "@reduxjs/toolkit";

const PopupSlice = createSlice({
  name: "popup",
  initialState: false,
  reducers: {
    open: (state, action) => {
      return true;
    },
    close: (state, action) => {
      return false;
    },
  },
});
export default PopupSlice;
