import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  changesticker: false,
  changeinitial: false,
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setChangeInitial: (state, action) => {
      state.changeinitial = action.payload;
    },
    setChangeSticker: (state, action) => {
      state.changesticker = action.payload;
    },
  },
});

export const { setChangeSticker, setChangeInitial } = settingSlice.actions;
export default settingSlice.reducer;
