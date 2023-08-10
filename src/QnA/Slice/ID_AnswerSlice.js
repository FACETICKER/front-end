import {createSlice} from '@reduxjs/toolkit';

const ID_answerSlice = createSlice({
    name: 'ID_answer',
    initialState: {value: 0},
    reducers:{
        up:(state, action)=>{
            state.value =  action.payload;
        }
    }
});
export default ID_answerSlice;