import {createSlice} from '@reduxjs/toolkit';

const AnswerSlice = createSlice({
    name:'answerslice',
    initialState:[],
    reducers:{
        up:(state, action)=>{
            state.push(action.payload);
        },
        remove: (state, action) => {
            const idToRemove = action.payload;
            return state.filter(obj => obj.id !== idToRemove);
        },
        edit: (state, action) => {
            const idToUpdate = action.payload;
            const answerToEdit = state.find(answer => answer.id === idToUpdate);
            if (answerToEdit) {
                answerToEdit.clicked = !answerToEdit.clicked;  // 클릭 여부 바꾸기
            }
        },
        off: (state, action) => {
            state.forEach(obj => {
                obj.clicked = false;  // 모든 질문 상태 clicked = false로 바꾸기
            });
        },
        on: (state, action) => {
            state.forEach(obj => {
                obj.clicked = true;  // 모든 질문 상태 clicked = true로 바꾸기
            });
        },
        openswitch: (state, action) => {
            const idTochange = action.payload[0];
            const openTochange = action.payload[1];
            const answerTochange = state.find(answer => answer.id === idTochange);
            answerTochange.open = openTochange;
        }
    }
});
export default AnswerSlice;