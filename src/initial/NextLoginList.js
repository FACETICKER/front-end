import {createSlice} from '@reduxjs/toolkit';

const InitialSurveyList = createSlice({
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
  } = InitialSurveyList.actions;
export default InitialSurveyList.reducer;
// 변수 저장소