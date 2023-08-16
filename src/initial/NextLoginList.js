import {createSlice} from '@reduxjs/toolkit';

const NextLoginList = createSlice({
  name: 'nextLoginList',
  initialState: {
      stickeris: false,
      questionis: false,
  },
  reducers: {
    setStickeris: (state, action) => {
      state.stickeris = action.payload;
    },
    setQuestionis: (state, action) => {
      state.questionis = action.payload;
    },
  },
});

export const {
  setStickeris,
  setQuestionis,
} = NextLoginList.actions;
export const { update } = NextLoginList.actions;

export default NextLoginList;