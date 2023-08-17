import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  token: "",
  hostid: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.userId = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setHostId: (state, action) => {
      state.hostid = action.payload;
    },
  },
});

export const { setId, setToken, setHostId } = loginSlice.actions;
export default loginSlice.reducer;
