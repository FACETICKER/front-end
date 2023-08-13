import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  token: "",
  logintype: true,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginData: (state, action) => {
      state.userId = action.payload.userId;
      state.token = action.payload.token;
      state.logintype = !state.logintype;
    },
    setLogintype: (state) => {
      state.logintype = !state.logintype;
    },
  },
});

export const { setLoginData, setLogintype } = loginSlice.actions;
export default loginSlice.reducer;
