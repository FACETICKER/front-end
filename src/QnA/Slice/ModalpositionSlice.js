import {createSlice} from '@reduxjs/toolkit';

const ModalpositionSlice = createSlice({
    name:'modalpositionslice',
    initialState:{top: 0, left: 0},
    reducers:{
        up:(state, action)=>{
            state.top = action.payload.top;
            state.left = action.payload.left;
        }
    }
});
export default ModalpositionSlice;