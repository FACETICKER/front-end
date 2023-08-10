import {createSlice} from '@reduxjs/toolkit';

const PopupSlice = createSlice({
    name: 'popup',
    initialState: {view: false, text: ''},
    reducers: {
        open: (state, action) => {
            state.view = true;
            state.text = action.payload;
        },
        close: (state, action) => {
            state.view = false;
        }
    }
});
export default PopupSlice;