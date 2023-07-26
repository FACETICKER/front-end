import {createSlice} from '@reduxjs/toolkit';

const Basic_questionSlice = createSlice({
    name:'basic_question',
    initialState:['기본 질문1', '기본 질문2', '기본 질문3', '기본 질문4', '기본 질문5', '기본 질문6', '기본 질문7', '기본 질문8', '기본 질문9', '기본 질문10'],
    reducers:{
        del:(state, action)=>{
            const elementToRemove = action.payload;
            return state.filter((item) => item !== elementToRemove);
        },
        add:(state, action)=>{
            state.push(action.payload);
        }  
    }
});
export default Basic_questionSlice;