import {createSlice} from '@reduxjs/toolkit';

const Popup_QnA_Slice = createSlice({
    name: 'popup',
    initialState: {view: false, text: ''},
    reducers: {
        open: (state, action) => {
            state.view = true;
            state.text = action.payload;
        },
        close: (state, action) => {
            state.view = false;
            state.text = '';
        }
    }
});
export default Popup_QnA_Slice;