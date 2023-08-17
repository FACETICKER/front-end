import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  token: null,
  hostid: null,
  gomakesticker: false,
  goqna: false,
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
    setGoMakesticker: (state, action) => {
      state.gomakesticker = action.payload;
    },
    setGoQna: (state, action) => {
      state.goqna = action.payload;
    },
  },
});

export const { setGoMakesticker, setGoQna, setId, setToken, setHostId } =
  loginSlice.actions;
export default loginSlice.reducer;
