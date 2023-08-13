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

    const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJ1c2VyX2VtYWlsIjoiYmFkdWswMzI2QG5hdmVyLmNvbSIsImlhdCI6MTY5MTk0Nzk1OCwiZXhwIjoxNjkxOTUxNTU4fQ._KIzNc4zSQB8oFUC-RrfcKTOg-3aZHlqBpzUeS1E13g';

    const postQuestion = () => {

        const headers = {
            "x-access-token": JWT,
            'Content-Type': 'application/json',
        };

        fetch("http://app.faceticker.site/2/nqna/question/visitor", {
            method: "POST", // 또는 "POST", "PUT", "DELETE" 등 요청하려는 메소드에 따라 설정
            headers: headers,
            body: JSON.stringify({question: question})
        })
            .then((response) => response.json()) // 서버에서 받은 응답을 JSON 형태로 파싱
            .then((data) => {
                console.log(data);
                getNqnaID(); // 질문 조회 후 nqna_id를 받아서 questionslice에 등록
            })
            .catch((error) => {
                console.error("오류 발생", error); // 요청이 실패하면 에러를 콘솔에 출력
            });
    }

    const getNqnaID = () => { 

        const headers = {
            "x-access-token": JWT,
            'Content-Type': 'application/json'
        };
    
        fetch(`http://app.faceticker.site/2/nqna`, {
            method: "GET", // 또는 "POST", "PUT", "DELETE" 등 요청하려는 메소드에 따라 설정
            headers: headers,
          }) // 서버로 GET 요청을 보냄
            .then((response) => response.json()) // 서버에서 받은 응답을 JSON 형태로 파싱
            .then((data) => {
                console.log(data);
                dispatch(IDSlice.actions.up(1));
                dispatch(questionSlice.actions.up({text: question, id: ID, type: "question", open: true, clicked: false, nQnA_id: data.result[data.result.length - 1].nQnA_id}));
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