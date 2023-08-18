import styles2 from './Quesinput.module.css';
import React from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import questionSlice from '../Slice/questionSlice';
import IDSlice from '../Slice/IDSlice';
import Token from '../Token';

function Quesinput() {

    const dispatch = useDispatch();
    
    const ID = useSelector(state=>{
        return state.idcounter.value;
    });

    const hostID = Token()[2];
    const JWT = Token()[1] === null ? '' : Token()[1];

    const postQuestion = () => {

        const headers = {
            "x-access-token": JWT,
            'Content-Type': 'application/json',
        };

        fetch(`http://app.faceticker.site/${hostID}/nqna/question/visitor`, {
            method: "POST", // 또는 "POST", "PUT", "DELETE" 등 요청하려는 메소드에 따라 설정
            headers: headers,
            body: JSON.stringify({question: question})
        })
            .then((response) => response.json()) // 서버에서 받은 응답을 JSON 형태로 파싱
            .then((data) => {
                console.log(data);
                dispatch(IDSlice.actions.up(1));
                dispatch(questionSlice.actions.up({text: question, id: ID, type: "question", open: true, clicked: false, nQnA_id: data.result}));
                setquestion("");
            })
            .catch((error) => {
                console.error("오류 발생", error); // 요청이 실패하면 에러를 콘솔에 출력
            });
    }

    const onsubmit = (event) => {
        event.preventDefault();
        if (question === "") {
            return;
        }
        postQuestion(); // 백엔드에 question 등록
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