import {createSlice} from '@reduxjs/toolkit';
const InitialSurveyList = createSlice({
    name:'initialList',
    initialState:{
        Name: '',
        Season: '',
        Number: '',
        Day: '',
        Import: '',
        SetSticker: ''
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
        setInitialSetSticker: (state, action) => {
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
    SetSticker
  } = InitialSurveyList.actions;
export default InitialSurveyList;
// 변수 저장소