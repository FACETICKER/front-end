import {createSlice} from '@reduxjs/toolkit';

const NextLoginList = createSlice({
    name:'nextloginlist',
    initialState:{
        stickeris: 0,
        questionis: 0
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
    setQuestionis
  } = NextLoginList.actions;
export default NextLoginList;
// 변수 저장소