import {createSlice} from '@reduxjs/toolkit';

const Choice_answer_Slice = createSlice({
    name: 'choice_answer',
    initialState: false,
    reducers: {
        change: (state, action) => {
            return !state;
        },
        reset: (state, action) => {
            return false;
        }
    }
});
export default Choice_answer_Slice;