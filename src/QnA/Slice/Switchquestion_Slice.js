import {createSlice} from '@reduxjs/toolkit';

const Switchquestion_Slice = createSlice({
    name: 'switch_question',
    initialState: true,
    reducers: {
        all: (state, action) => {
            return true;
        },
        noanswer: (state, action) => {
            return false;
        }
    }
});
export default Switchquestion_Slice;