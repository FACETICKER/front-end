import React, { useState, useEffect } from 'react'
import styles2 from '../style/QnApage_2.module.css';
import styles3 from '../guest_input/Guest_Btn.module.css';
import AnswerSlice from '../Slice/AnswerSlice';
import ChoiceSlice from '../Slice/ChoiceSlice';
import {useDispatch, useSelector} from "react-redux";
import EditAns_Modal from './EditAns_Modal';

function Answer_button(props) {

    const dispatch = useDispatch();

    const onclick = () => {
        dispatch(AnswerSlice.actions.edit(props.id)); // Answer 버튼의 clicked가 on/off 바뀌게 설정
        dispatch(ChoiceSlice.actions.reset()); // choice를 off
    }

    const choice = useSelector(state=>{
        return state.choice;
    });

    const ans = useSelector(state=>{
        return state.answer;
    });

    const open = ans.filter(obj => obj.id === props.id).map(obj => obj.open)[0];

    const page = useSelector(state=>{
        return state.page;
    });

    return (
        <div>
            <div className={`${page === 'host' && styles2.answerbackground} ${page === 'guest' && styles3.answerbackground}`}>
                <button key={props.id} className={`${page === 'host' && styles2.button_answer} ${page === 'guest' && styles3.button_answer} ${page === 'guest' && !open && styles3.lock_ans} ${props.text.length > 16 ? styles2.radius_L : styles2.radius_S}`} id={props.id} type={props.type} data-open={props.open} onClick={onclick}>
                    <span className={styles2.answertext}>
                        {page === 'host' && (props.text)}
                        {page === 'guest' && open && (props.text)}
                    </span>
                </button>
                {props.clicked && !choice && page === 'host' && (
                    <EditAns_Modal />
                )}
            </div>
        </div>
    );
};

export default Answer_button;