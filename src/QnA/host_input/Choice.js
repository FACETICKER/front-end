import styles3 from './QnApage_3.module.css';
import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import AnswerSlice from '../Slice/AnswerSlice';
import questionSlice from '../Slice/questionSlice';
import ChoiceSlice from '../Slice/ChoiceSlice';
import AnsEditSlice from '../Slice/AnsEditSlice';

function Choice(props) {

    const dispatch = useDispatch();

    const onclick = () => {
        if (props.edit) {
            dispatch(AnsEditSlice.actions.edit());
            dispatch(ChoiceSlice.actions.change()); // 답변 수정
        } else {
            dispatch(AnsEditSlice.actions.new());
            dispatch(ChoiceSlice.actions.change()); // 질문에 대한 답변이 하나도 없을 때 신규 작성
        }
    }

    const ques = useSelector(state=>{
        return state.question;
    });

    const ID = ques.filter(obj => obj.clicked === true).map(obj => obj.id)[0];

    const del = () => {
        dispatch(AnswerSlice.actions.remove(ID));
        dispatch(questionSlice.actions.remove(ID));
    }

    return (

        <div className={styles3.choiceBackground}>
            <button className={styles3.choiceBtn} onClick={onclick}>답변</button>
            <button className={styles3.choiceBtn} onClick={del}>삭제</button>
        </div>

    );
};

export default Choice;