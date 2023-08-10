import styles2 from './Quesinput.module.css';
import React from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import questionSlice from '../Slice/questionSlice';
import IDSlice from '../Slice/IDSlice';

function Quesinput() {

    const dispatch = useDispatch();
    
    const ID = useSelector(state=>{
        return state.idcounter.value;
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
            <input value={question} onChange={inputing} placeholder='여기에 질문하세요' type='text' maxLength={100} className={styles2.answer_input}></input>
            <button className={styles2.answer_button}></button>
        </form>
    );
};

export default Quesinput;