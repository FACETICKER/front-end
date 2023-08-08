import { createSlice } from "@reduxjs/toolkit";

export const NicknamePageSlice = createSlice({
  name: "nicknamepage",
  initialState: "nickname",
  reducers: {
    nickname: (state, action) => {
      return "nickname";
    },
    letter: (state, action) => {
      return "letter";
    },
  },
});
export default NicknamePageSlice;
