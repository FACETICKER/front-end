import {createSlice} from '@reduxjs/toolkit';

const AnsEditSlice = createSlice({
    name: 'Ansedit',
    initialState: true,
    reducers: {
        new: (state, action) => {
            return true;
        },
        edit: (state, action) => {
            return false;
        }
    }
});
export default AnsEditSlice;