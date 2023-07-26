import styles2 from './Quesinput.module.css';
import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import AnswerSlice from '../Slice/AnswerSlice';
import questionSlice from '../Slice/questionSlice';
import ChoiceSlice from '../Slice/ChoiceSlice';
import Checkbox from '../image/Checkbox.png';
import Checked from '../image/Checked.png';
import OpencheckSlice from '../Slice/OpencheckSlice';
import IDSlice from '../Slice/IDSlice';

function Quesinput() {

    const dispatch = useDispatch();
    
    const ID = useSelector(state=>{
        return state.idcounter.value;
    });
    
    const ques = useSelector(state=>{
        return state.question;
    });

    const onsubmit = (event) => {
        event.preventDefault();
        if (question === "") {
            return;
        }
        dispatch(IDSlice.actions.up(1));
        dispatch(questionSlice.actions.up({text: question, id: ID, type: "question", open: true, clicked: false}));
        setquestion("");
    }
    
    const [question, setquestion] = useState("");

    const inputing = (event) => setquestion(event.target.value);

    return (
        <form onSubmit={onsubmit} className={styles2.chat}>
            <input value={question} onChange={inputing} placeholder='여기에 질문하세요' type='text' className={styles2.answer_input}></input>
            <button className={styles2.answer_button}></button>
        </form>
    );
};

export default Quesinput;