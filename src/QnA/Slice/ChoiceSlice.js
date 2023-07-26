import {createSlice} from '@reduxjs/toolkit';

const ChoiceSlice = createSlice({
    name: 'choice',
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
export default ChoiceSlice;