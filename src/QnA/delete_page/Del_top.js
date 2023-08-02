import React, { useState, useEffect } from 'react';
import styles from './Del.module.css';
import Del_page_x from '../../img/QnA_img/del_page_x.png';
import AnswerSlice from '../Slice/AnswerSlice';
import questionSlice from '../Slice/questionSlice';
import PageSlice from '../Slice/PageSlice';
import { useDispatch, useSelector } from 'react-redux';

const Del_top = () => {

    const dispatch = useDispatch();

    const ans = useSelector(state=>{
        return state.answer;
    });

    const ques = useSelector(state=>{
        return state.question;
    });

    const [allChosen, setallChosen] = useState(false);

    useEffect(() => {
        const chosen_ans = ans.filter(item => item.clicked === true);
        const chosen_ques = ques.filter(item => item.clicked === true);
        const ChosenOrNot = (chosen_ans.length + chosen_ques.length) === ques.length + ans.length; // 전체 선택 상태가 아닐 경우 false 반환
        setallChosen(ChosenOrNot);
    }, [ans, ques]);

    const onclick = () => {
        if(allChosen) {
            dispatch(questionSlice.actions.off());
            dispatch(AnswerSlice.actions.off());
        } // 전체 해제 단계
        else {
            dispatch(questionSlice.actions.on());
            dispatch(AnswerSlice.actions.on());
        }
    }

    const cancel = () => {
        dispatch(PageSlice.actions.host());
        dispatch(questionSlice.actions.off());
        dispatch(AnswerSlice.actions.off()); // 페이지 이동 후 클릭 초기화
    }

    return (
        <div className={styles.draw}>
            <img src={Del_page_x} className={styles.close_x} alt='x' onClick={cancel}></img>
            <p className={styles.del_p}>삭제</p>
            <p className={`${allChosen ? styles.all_none : styles.all_choice}`} onClick={onclick}>{allChosen ? '전체해제' : '전체선택'}</p>
        </div>
    );
};

export default Del_top;