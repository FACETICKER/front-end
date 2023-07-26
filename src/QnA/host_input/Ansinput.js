import styles2 from '../style/QnApage_2.module.css';
import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import AnswerSlice from '../Slice/AnswerSlice';
import questionSlice from '../Slice/questionSlice';
import ChoiceSlice from '../Slice/ChoiceSlice';
import Checkbox from '../image/Checkbox.png';
import Checked from '../image/Checked.png';
import OpencheckSlice from '../Slice/OpencheckSlice';

function Ansinput() {

    const dispatch = useDispatch();

    const [answer, setanswer] = useState("");

    const open = useSelector(state=>{
        return state.opencheck;
    });

    const ID = useSelector(state=>{
        return state.id_answer.value;
    });

    const onsubmit = (event) => {
        event.preventDefault();
        if (answer === "") {
            return;
        }
        dispatch(AnswerSlice.actions.up({text: answer, id: ID, type: "answer", open: open, clicked: false})); // 답변 생성
        setanswer(""); // 입력 칸 초기화
        dispatch(questionSlice.actions.edit(ID)); // 질문 클릭 안된 상태로 돌리기
        dispatch(questionSlice.actions.openswitch([ID, open])); // 답변, 질문에 공개 여부 설정
        dispatch(AnswerSlice.actions.openswitch([ID, open]));
        dispatch(ChoiceSlice.actions.change()); // 입력 창 끄기
    }

    const onchange = (event) => setanswer(event.target.value); /* 답변 입력시 answer에 저장 */ 

    const openswitch = () => {
        dispatch(OpencheckSlice.actions.change());
    }

    return (
        <form onSubmit={onsubmit} className={styles2.chat}>
            <div className={styles2.checkboxzone} onClick={openswitch}>
                <img src={`${open ? Checkbox : Checked}`} className={styles2.checkbox}></img>
                <p className={`${open ? '' : styles2.clickedwrite}`}>비공개</p>
            </div>
            <input value={answer} onChange={onchange} placeholder='여기에 답변을 입력하세요' type='text' className={styles2.answer_input}></input>
            <button className={styles2.answer_button}></button>
        </form>
    );
};

export default Ansinput;