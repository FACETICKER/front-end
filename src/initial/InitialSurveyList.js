import {createSlice} from '@reduxjs/toolkit';
const InitialSurveyList = createSlice({
    name:'initialList',
    initialState:{
        Name_id: '',
        Season_id: '',
        Number_id: null,
        Day_id: '',
        Import_id: '',
        SetSticker_id: '',
        Message_id: '',
    },
    reducers: {
        setInitialName: (state, action) => {
          state.Name_id = action.payload;
        },
        setInitialSeason: (state, action) => {
          state.Season_id = action.payload;
        },
        setInitialNumber: (state, action) => {
          state.Number_id = action.payload;
        },
        setInitialDay: (state, action) => {
          state.Day_id = action.payload;
        },
        setInitialImport: (state, action) => {
          state.Import_id = action.payload;
        },
        setInitialSetSticker: (state, action) => {
          state.Import_id = action.payload;
        },
        setInitialMessage: (state, action) => {
          state.Import_id = action.payload;
        },
    },
});

export const {
    setInitialName,
    setInitialSeason,
    setInitialNumber,
    setInitialDay,
    setInitialImport,
    setInitialSetSticker,
    setInitialMessage,
    Season_id,
  } = InitialSurveyList.actions;
export default InitialSurveyList;
// 변수 저장소