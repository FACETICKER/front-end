import styles3 from './QnApage_3.module.css';
import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import AnswerSlice from '../Slice/AnswerSlice';
import ChoiceSlice from '../Slice/ChoiceSlice';
import Choice_answer_Slice from '../Slice/Choice_answer_Slice';
import AnsEditSlice from '../Slice/AnsEditSlice';

function Choice_ans() {

    const dispatch = useDispatch();

    const onclick = () => {
        dispatch(AnsEditSlice.actions.edit());
        dispatch(ChoiceSlice.actions.change());
        dispatch(Choice_answer_Slice.actions.change());
    }

    const ans = useSelector(state=>{
        return state.answer;
    });

    const ID = ans.filter(obj => obj.clicked === true).map(obj => obj.id)[0];

    const del = () => {
        dispatch(AnswerSlice.actions.remove(ID));
    }

    useEffect(() => {
        const count = ans.filter(obj => obj.clicked === true).length;
        {count > 1 && (dispatch(AnswerSlice.actions.off()))}; // 2개 이상 버튼 눌릴 경우 다 꺼버림
    }, []);

    return (

        <div className={`${styles3.choicebackground} ${styles3.ans}`}>
            <button className={styles3.choiceBtn} onClick={onclick}>답변 수정</button>
            <button className={styles3.choiceBtn} onClick={del}>답변 삭제</button>
        </div>

    );
};

export default Choice_ans;