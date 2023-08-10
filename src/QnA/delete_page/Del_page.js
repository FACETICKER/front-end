import React, { useState, useEffect } from 'react'
import styles from './Del.module.css';
import {useDispatch, useSelector} from "react-redux";
import Del_btn from './Del_btn';
import Del_top from './Del_top';
import questionSlice from '../Slice/questionSlice';
import AnswerSlice from '../Slice/AnswerSlice';
import PageSlice from '../Slice/PageSlice';

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
        
        const ques_click_list = ques.filter(obj => obj.clicked === true).map(obj => obj.id);
        {ques_click_list.map((id) => (
            dispatch(questionSlice.actions.remove(id))
        ))} 
        const ans_click_list = ans.filter(obj => obj.clicked === true).map(obj => obj.id);
        {ans_click_list.map((id) => (
            dispatch(AnswerSlice.actions.remove(id))
        ))} // 선택된 항목 삭제
        dispatch(PageSlice.actions.host());
        dispatch(questionSlice.actions.off());
        dispatch(AnswerSlice.actions.off()); // 페이지 이동 후 클릭 초기화
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
            <div className={styles.blackline}></div>
        </div>
    );
};

export default Del_page