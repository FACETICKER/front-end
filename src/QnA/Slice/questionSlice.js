import {createSlice} from '@reduxjs/toolkit';

const questionSlice = createSlice({
    name:'questionslice',
    initialState:[],
    reducers:{
        up:(state, action)=>{
            state.push(action.payload);  // 질문 추가하기
        },
        edit: (state, action) => {
            const idToUpdate = action.payload;
            const questionToEdit = state.find(question => question.id === Number(idToUpdate));
            if (questionToEdit) {
                questionToEdit.clicked = !questionToEdit.clicked;  // 클릭 여부 바꾸기
            }
        },
        off: (state, action) => {
            state.forEach(obj => {
                obj.clicked = false;  // 모든 질문 상태 clicked = false로 바꾸기
            });
        },
        remove: (state, action) => {
            const idToRemove = action.payload;
            return state.filter(obj => obj.id !== idToRemove); // 해당 id를 가진 질문 지우기
        },
        openswitch: (state, action) => {
            const idTochange = action.payload[0];
            const openTochange = action.payload[1];
            const questionTochange = state.find(question => question.id === Number(idTochange));
            questionTochange.open = openTochange;
        }  
    }
});
export default questionSlice;