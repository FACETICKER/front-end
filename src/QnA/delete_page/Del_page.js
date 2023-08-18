import React, { useState, useEffect } from 'react'
import styles from './Del.module.css';
import {useDispatch, useSelector} from "react-redux";
import Del_btn from './Del_btn';
import Del_top from './Del_top';
import questionSlice from '../Slice/questionSlice';
import AnswerSlice from '../Slice/AnswerSlice';
import PageSlice from '../Slice/PageSlice';
import Token from '../Token';

function Del_page() {

    const dispatch = useDispatch();
    
    const ques = useSelector(state=>{
        return state.question;
    });

    const ans = useSelector(state=>{
        return state.answer;
    });

    const [allChosen, setallChosen] = useState(true);

    useEffect(() => {
        const chosen_ans = ans.filter(item => item.clicked === true);
        const chosen_ques = ques.filter(item => item.clicked === true);
        const ChosenOrNot = (chosen_ans.length + chosen_ques.length) !== 0; // 아무것도 선택 안했을 경우 false 반환
        setallChosen(ChosenOrNot);
    }, [ans, ques]);

    const remove = () => {
        if (!allChosen) {
            return; // 아무것도 삭제 선택 안했을 경우 클릭 안 됨
        }

        // 백엔드 db 상에서 질문 삭제
        
        const ques_click_list_nqna = ques.filter(obj => obj.clicked === true).map(obj => obj.nQnA_id);
        {ques_click_list_nqna.map((nqna_id) => (
            Delquestion(nqna_id)
        ))} 

        // 프론트 redux 상에서 질문 삭제
        
        const ques_click_list = ques.filter(obj => obj.clicked === true).map(obj => obj.id);
        {ques_click_list.map((id) => (
            dispatch(questionSlice.actions.remove(id))
        ))} 

        // 백엔드 db 상에서 답변 삭제

        const ans_click_list_nqna = ans.filter(obj => obj.clicked === true).map(obj => obj.nQnA_id);
        {ans_click_list_nqna.map((nqna_id) => (
            Delanswer(nqna_id)
        ))}

        // 프론트 redux 상에서 답변 삭제
        
        const ans_click_list = ans.filter(obj => obj.clicked === true).map(obj => obj.id);
        {ans_click_list.map((id) => (
            dispatch(AnswerSlice.actions.remove(id))
        ))}
        dispatch(PageSlice.actions.host());
        dispatch(questionSlice.actions.off());
        dispatch(AnswerSlice.actions.off()); // 페이지 이동 후 클릭 초기화
    }

    const userID = Token()[0];
    const JWT = Token()[1];

    const Delquestion = (num) => {

        const headers = {
            "x-access-token": JWT,
            'Content-Type': 'application/json',
        };

        fetch(`http://app.faceticker.site/${userID}/nqna/${num}/question`, {
            method: "DELETE", // 또는 "POST", "PUT", "DELETE" 등 요청하려는 메소드에 따라 설정
            headers: headers,
        })
            .then((response) => response.json()) // 서버에서 받은 응답을 JSON 형태로 파싱
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error("오류 발생", error); // 요청이 실패하면 에러를 콘솔에 출력
            });
    }

    const Delanswer = (num) => {

        const headers = {
            "x-access-token": JWT,
            'Content-Type': 'application/json',
        };

        fetch(`http://app.faceticker.site/${userID}/nqna/${num}/answer`, {
            method: "DELETE", // 또는 "POST", "PUT", "DELETE" 등 요청하려는 메소드에 따라 설정
            headers: headers,
        })
            .then((response) => response.json()) // 서버에서 받은 응답을 JSON 형태로 파싱
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error("오류 발생", error); // 요청이 실패하면 에러를 콘솔에 출력
            });
    }
    
    return (
        <div className={styles.background}>
            <Del_top/>
            <div className={`${styles.btn_background} ${styles.hiddenscroll}`}>
                {ques.map((item, index) => (<Del_btn key={index} text={item.text} id={item.id} type={item.type} open={item.open} clicked={item.clicked}/>))}
            </div>
            <div className={styles.remover} onClick={remove}>
                <p className={`${styles.remover_p} ${allChosen && styles.remover_p_red}`}>삭제</p>
            </div>
        </div>
    );
};

export default Del_page