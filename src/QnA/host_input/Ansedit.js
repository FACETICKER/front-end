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
import Token from '../Token';

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

    const userID = Token()[0];
    const JWT = Token()[1];

    const nqna_id = ans.filter(obj => obj.clicked === true).map(obj => obj.nQnA_id)[0];

    const onsubmit = (event) => {
        event.preventDefault();
        if (answer === "") {
            return;
        }
        Answerpatch();
        QuesHiddenPatch();
        AnswerHiddenPatch();
        dispatch(AnswerSlice.actions.remove(ID));
        dispatch(AnswerSlice.actions.up({text: answer, id: ID, type: "answer", open: ans_open, clicked: false, nQnA_id: nqna_id}));
        setanswer("");
        dispatch(questionSlice.actions.openswitch([ID, ques_open])); // 답변, 질문에 공개 여부 설정
        dispatch(AnswerSlice.actions.openswitch([ID, ans_open]));
        dispatch(ChoiceSlice.actions.change());
        dispatch(questionSlice.actions.off());
    }

    // 질문에 대한 답변 백엔드에 넘기기
    const Answerpatch = () => {

        const headers = {
            "x-access-token": JWT,
            'Content-Type': 'application/json',
        };

        fetch(`http://app.faceticker.site/${userID}/nqna/${nqna_id}/answer`, {
            method: "PATCH", // 또는 "POST", "PUT", "DELETE" 등 요청하려는 메소드에 따라 설정
            headers: headers,
            body: JSON.stringify({answer: answer}),
        })
            .then((response) => response.json()) // 서버에서 받은 응답을 JSON 형태로 파싱
            .then((data) => {
                // console.log(data);
            })
            .catch((error) => {
                console.error("오류 발생", error); // 요청이 실패하면 에러를 콘솔에 출력
            });
    }


    // 답변 공개 여부 백엔드 넘기기
    const AnswerHiddenPatch = () => {

        const headers = {
            "x-access-token": JWT,
            'Content-Type': 'application/json',
        };

        const requestBody = {
            answer_hidden: ans_open ? 0 : 1
        };

        fetch(`http://app.faceticker.site/${userID}/nqna/${nqna_id}/answer/hidden`, {
            method: "PATCH", // 또는 "POST", "PUT", "DELETE" 등 요청하려는 메소드에 따라 설정
            headers: headers,
            body: JSON.stringify(requestBody),
        })
            .then((response) => response.json()) // 서버에서 받은 응답을 JSON 형태로 파싱
            .then((data) => {
                // console.log(data);
            })
            .catch((error) => {
                console.error("오류 발생", error); // 요청이 실패하면 에러를 콘솔에 출력
            });
    }

    //질문 공개 여부 백엔드 넘기기
    const QuesHiddenPatch = () => {

        const headers = {
            "x-access-token": JWT,
            'Content-Type': 'application/json',
        };

        const requestBody = {
            question_hidden: ques_open ? 0 : 1
        };

        fetch(`http://app.faceticker.site/${userID}/nqna/${nqna_id}/question/hidden`, {
            method: "PATCH", // 또는 "POST", "PUT", "DELETE" 등 요청하려는 메소드에 따라 설정
            headers: headers,
            body: JSON.stringify(requestBody),
        })
            .then((response) => response.json()) // 서버에서 받은 응답을 JSON 형태로 파싱
            .then((data) => {
                // console.log(data);
            })
            .catch((error) => {
                console.error("오류 발생", error); // 요청이 실패하면 에러를 콘솔에 출력
            });
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