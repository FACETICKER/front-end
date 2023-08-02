import {createSlice} from '@reduxjs/toolkit';

const Buttons_idSlice = createSlice({
    name: 'buttons_id',
    initialState: false,
    reducers: {
        change: (state, action) => {
            return !state;
        }
    }
});
export default Buttons_idSlice;