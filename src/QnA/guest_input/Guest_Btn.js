import React, { useState, useEffect, useRef } from 'react';
import styles2 from './Guest_Btn.module.css';
import {useDispatch, useSelector} from "react-redux";
import questionSlice from '../Slice/questionSlice';
import ID_answerSlice from '../Slice/ID_AnswerSlice';
import AnswerSlice from '../Slice/AnswerSlice';
import Buttons_idSlice from '../Slice/Buttons_idSlice';
import ChoiceSlice from '../Slice/ChoiceSlice';
import Answer_button from '../host_input/Answer_button';
function Guest_Btn(props) {

    const dispatch = useDispatch();

    const ans = useSelector(state => state.answer);

    const ques = useSelector(state=>{
        return state.question;
    });

    const [hasMatchingId, setHasMatchingId] = useState(false); // 질문과 같은 id를 가진 답변이 존재하는지 여부
    const [filtered, setFiltered] = useState([]);  // id가 같은 답변

    useEffect(() => {
        const count = ques.filter(obj => obj.clicked === true).length;
        {count > 1 && (dispatch(questionSlice.actions.off()))}; // 2개 이상 버튼 눌릴 경우 다 꺼버림
        const count2 = ans.filter(obj => obj.clicked === true).length;
        {count > 0 && count2 > 0 && (dispatch(questionSlice.actions.off()))}; // 질문과 답변 모두 클릭(결국 2개 이상 버튼 눌리는 경우) 다 끔
        {count > 0 && count2 > 0 && (dispatch(AnswerSlice.actions.off()))};
        {count2 > 1 && (dispatch(AnswerSlice.actions.off()))};
    }, []);

    useEffect(() => {
        const matchingIds = ans.filter(item => item.id === props.id);   
        setHasMatchingId(matchingIds.length > 0);
        setFiltered(matchingIds);
    }, [ans, props.id]);

    const open = ques.filter(obj => obj.id === props.id).map(obj => obj.open)[0];

    // view가 true면 답변 내역, false면 미답변 내역

    const classNames = [
        styles2.buttonArray, // 기본 스타일 (container)
        open ? '' : styles2.lock,
    ].join(' ');

    const scrollRef = useRef();

    useEffect(() => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }, [ques]); // 질문 추가 시 끝까지 아래로 스크롤

    return (
        <div>
            <div className={styles2.buttonbackground}>
                <button className={classNames} id={props.id} type={props.type} data-open={props.open}>
                    <span className={styles2.buttontext}>{open && (props.text)}</span>
                </button>
            </div>
            {hasMatchingId && (
                filtered.map(item => (
                    <Answer_button key={item.id} id={item.id} type={item.type} open={item.open} text={item.text} clicked={item.clicked}></Answer_button>
                ))
            )}
            <div ref={scrollRef}></div>
        </div>
    );
};

export default Guest_Btn;