import React, { useState, useEffect, useRef } from 'react';
import styles from './Del.module.css';
import {useDispatch, useSelector} from "react-redux";
import New_mark from '../../img/QnA_img/new_mark.png';
import Del_ansBtn from './Del_ansBtn';
import Check from '../../img/QnA_img/ok_check.png';
import NoneCheck from '../../img/QnA_img/none_check.png';
import questionSlice from '../Slice/questionSlice';
import AnswerSlice from '../Slice/AnswerSlice';

function Del_btn(props) {

    const dispatch = useDispatch();

    const ans = useSelector(state => {
        return state.answer;
    });

    const ques = useSelector(state=>{
        return state.question;
    });

    const [hasMatchingId, setHasMatchingId] = useState(false); // 질문과 같은 id를 가진 답변이 존재하는지 여부
    const [filtered, setFiltered] = useState([]);  // id가 같은 답변

    useEffect(() => {
        const matchingIds = ans.filter(item => item.id === props.id);   
        setHasMatchingId(matchingIds.length > 0);
        setFiltered(matchingIds);
    }, [ans, props.id]);

    const type = ques.filter(obj => obj.id === props.id).map(obj => obj.type)[0];

    const click = ques.filter(obj => obj.id === props.id).map(obj => obj.clicked)[0];

    const classNames = [
        styles.buttonArray, // 기본 스타일 (container)
        type === 'basic_question' ? styles.basic : '', // 기본 질문인가요? 
    ].join(' ');

    const onclick = () => {
        dispatch(questionSlice.actions.edit(props.id)); // 선택 여부 변경
        const ques_true = ques.filter(obj => obj.id === props.id).map(obj => obj.clicked)[0];
        const ans_true = ans.filter(obj => obj.id === props.id).map(obj => obj.clicked)[0]; // 질문 클릭 시 만약 답변이 선택 안된 상태면 선택되게
        if (!ques_true && !ans_true) {
            dispatch(AnswerSlice.actions.edit(props.id));
        }
    }

    const scrollRef = useRef();

    useEffect(() => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }, []); // 첫 렌더링 시 끝까지 아래로 스크롤

    return (
        <div>
            <div className={styles.buttonbackground} onClick={onclick}>
                <img src={`${click ? Check : NoneCheck}`} className={styles.check_img}></img>
                <button className={classNames} id={props.id} type={props.type} data-open={props.open}>
                    <span className={styles.buttontext}>{props.text}</span>
                    <img src={New_mark} className={`${styles.new} ${hasMatchingId || type === 'basic_question' ? styles.hidden : ''}`}></img>
                </button>
            </div>
            {hasMatchingId && (
                filtered.map(item => (
                    <Del_ansBtn key={item.id} id={item.id} type={item.type} open={item.open} text={item.text} clicked={item.clicked}></Del_ansBtn>
                ))
            )}
            <div ref={scrollRef}></div>
        </div>
    )
}

export default Del_btn
