import {createSlice} from '@reduxjs/toolkit';

const NextLoginList = createSlice({
  name: 'nextLoginList',
  initialState: {
      stickeris: 0,
      questionis: 0,
      nothing: 0,
  },
  reducers: {
    setStickeris: (state, action) => {
      state.stickeris = action.payload;
    },
    setQuestionis: (state, action) => {
      state.questionis = action.payload;
    },
    setNothing: (state, action) => {
      state.nothing = action.payload;
    },
  },
});

export const {
  setStickeris,
  setQuestionis,
  setNothing
} = NextLoginList.actions;
export const { update } = NextLoginList.actions;

export default NextLoginList;