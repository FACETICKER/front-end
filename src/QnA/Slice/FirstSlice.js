import {createSlice} from '@reduxjs/toolkit';

const FirstSlice = createSlice({
    name: 'first',
    initialState: true,
    reducers: {
        new: (state, action) => {
            return true;
        },
        edit: (state, action) => {
            return false;
        },
        change: (state, action) => {
            return !state;
        }
    }
});
export default FirstSlice;