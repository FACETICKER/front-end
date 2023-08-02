import {createSlice} from '@reduxjs/toolkit';

const IDSlice = createSlice({
    name: 'ID',
    initialState: {value: 0},
    reducers:{
        up:(state, action)=>{
            state.value =  state.value + action.payload;
        }
    }
});
export default IDSlice;