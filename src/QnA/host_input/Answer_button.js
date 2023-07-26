import React, { useState, useEffect } from 'react'
import styles2 from '../style/QnApage_2.module.css';
import styles3 from '../guest_input/Guest_Btn.module.css';
import AnswerSlice from '../Slice/AnswerSlice';
import Choice_answer_Slice from '../Slice/Choice_answer_Slice';
import Choice_ans from './Choice_ans';
import {useDispatch, useSelector} from "react-redux";

function Answer_button(props) {

    const dispatch = useDispatch();

    const onclick = (e) => {
        dispatch(AnswerSlice.actions.edit(e.target.id)); // Answer 버튼의 clicked가 on/off 바뀌게 설정
        dispatch(Choice_answer_Slice.actions.reset()); // choice를 off
    }

    const choice = useSelector(state=>{
        return state.choice_answer;
    });

    const ques = useSelector(state=>{
        return state.question;
    });

    const open = ques.filter(obj => obj.id === props.id).map(obj => obj.open)[0];

    const page = useSelector(state=>{
        return state.page;
    });

    return (
        <div className={styles2.answerbackground}>
            <button key={props.id} className={`${page === 'host' && styles2.button_answer} ${page === 'guest' && styles3.button_answer} ${page === 'guest' && !open && styles3.lock_ans}`} id={props.id} type={props.type} data-open={props.open} onClick={onclick}>
                <span className={styles2.answertext}>
                    {page === 'host' && (props.text)}
                    {page === 'guest' && open && (props.text)}
                </span>
            </button>
            {props.clicked && !choice && (
                <Choice_ans/>
            )}
        </div>
    );
};

export default Answer_button;