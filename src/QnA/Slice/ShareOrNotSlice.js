import {createSlice} from '@reduxjs/toolkit';

const ShareOrNotSlice = createSlice({
    name: 'share',
    initialState: {ques: true, ans: true},
    reducers: {
        ques_false: (state, action) => {
            state.ques = false;
        },
        ans_false: (state, action) => {
            state.ans = false;
        },
        ques_change: (state, action) => {
            state.ques = !state.ques;
        },
        ans_change: (state, action) => {
            state.ans = !state.ans;
        },
        reset: (state, action) => {
            state.ques = true;
            state.ans = true;
        }
    }
});
export default ShareOrNotSlice;