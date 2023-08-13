import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  token: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginData: (state, action) => {
      state.userId = action.payload.userId;
      state.token = action.payload.token;
    },
  },
});

export const { setLoginData } = loginSlice.actions;
export default loginSlice.reducer;
