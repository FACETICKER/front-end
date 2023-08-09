import {createSlice} from '@reduxjs/toolkit';

const InitialSurveyList = createSlice({
    name:'stickerslice',
    initialState:{
        Name: '',
        Season: '',
        Number: '',
        Day: '',
        Import: '',
    },
    reducers: {
        setInitialName: (state, action) => {
          state.Name = action.payload;
        },
        setInitialSeason: (state, action) => {
          state.Season = action.payload;
        },
        setInitialNumber: (state, action) => {
          state.Number = action.payload;
        },
        setInitialDay: (state, action) => {
          state.Day = action.payload;
        },
        setInitialImport: (state, action) => {
          state.Import = action.payload;
        },
    },
});
export const {
    setInitialName,
    setInitialSeason,
    setInitialNumber,
    setInitialDay,
    setInitialImport,
  } = InitialSurveyList.actions;
export default InitialSurveyList.reducer;
// 변수 저장소