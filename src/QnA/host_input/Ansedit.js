import styles2 from '../style/QnApage_2.module.css';
import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import AnswerSlice from '../Slice/AnswerSlice';
import questionSlice from '../Slice/questionSlice';
import ChoiceSlice from '../Slice/ChoiceSlice';
import Plus from '../../img/QnA_img/Plus.png';
import X_input from '../../img/QnA_img/input-x.png';
import OpencheckSlice from '../Slice/OpencheckSlice';

function Ansedit() {

    const dispatch = useDispatch();

    const ans = useSelector(state=>{
        return state.answer;
    });

    const ques = useSelector(state=>{
        return state.question;
    });

    let ID = ''

    const count = ques.filter(obj => obj.clicked === true).length;

    if (count > 0) {
        ID = ques.filter(obj => obj.clicked === true).map(obj => obj.id)[0];
    } else {
        ID = ans.filter(obj => obj.clicked === true).map(obj => obj.id)[0];
    }

    const ques_open = useSelector(state=>{
        return state.share.ques;
    });

    const ans_open = useSelector(state=>{
        return state.share.ans;
    });

    const first = ans.filter(obj => obj.id === ID).map(obj => obj.text)[0];

    const [answer, setanswer] = useState(first);

    const onsubmit = (event) => {
        event.preventDefault();
        if (answer === "") {
            return;
        }
        dispatch(AnswerSlice.actions.remove(ID));
        dispatch(AnswerSlice.actions.up({text: answer, id: ID, type: "answer", open: ans_open, clicked: false}));
        setanswer("");
        dispatch(questionSlice.actions.openswitch([ID, ques_open])); // 답변, 질문에 공개 여부 설정
        dispatch(AnswerSlice.actions.openswitch([ID, ans_open]));
        dispatch(ChoiceSlice.actions.change());
        dispatch(questionSlice.actions.off());
    }

    const onchange = (event) => setanswer(event.target.value); /* 답변 입력시 answer에 저장 */ 

    const open = useSelector(state=>{
        return state.opencheck;
    });

    const openswitch = () => {
        dispatch(OpencheckSlice.actions.change());
    }

    return (
        <form onSubmit={onsubmit} className={styles2.chat}>
            <div className={styles2.checkboxzone} onClick={openswitch}>
                <img src={`${open ? X_input : Plus}`} className={styles2.checkbox}></img>
            </div>
            <input value={answer} onChange={onchange} maxLength={100} placeholder='여기에 답변을 입력하세요' type='text' className={styles2.answer_input}></input>
            <button className={styles2.answer_button}></button>
        </form>
    );
};

export default Ansedit;