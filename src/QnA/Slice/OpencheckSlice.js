import {createSlice} from '@reduxjs/toolkit';

const OpencheckSlice = createSlice({
    name: 'switch_question',
    initialState: true,
    reducers: {
        open: (state, action) => {
            return true;
        },
        close: (state, action) => {
            return false;
        },
        change: (state, action) => {
            return !state;
        }
    }
});
export default OpencheckSlice; 