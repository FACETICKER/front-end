import React from 'react';
import styles from '../style/Ansopen.module.css';
import Close from '../../img/QnA_img/close_switch.png';
import Open from '../../img/QnA_img/open_switch.png';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import ShareOrNotSlice from '../Slice/ShareOrNotSlice';

function Ansopen() {

    const dispatch = useDispatch();

    const ques_open = useSelector(state=>{
        return state.share.ques;
    });

    const ans_open = useSelector(state=>{
        return state.share.ans;
    });

    const [quesopen, setquesopen] = useState(ques_open);

    const [ansopen, setansopen] = useState(ans_open);

    const quesclick = () => {
        setquesopen(!quesopen);
        dispatch(ShareOrNotSlice.actions.ques_change());
    }

    const ansclick = () => {
        setansopen(!ansopen);
        dispatch(ShareOrNotSlice.actions.ans_change());
    }
    
    return (
        <div className={styles.background}>
            <div className={styles.quesopen} onClick={quesclick}>
                <p className={styles.p_ques}>질문 비공개</p>
                <img src={`${quesopen ? Open : Close}`} className={styles.img_ques}></img>
            </div>
            <div className={styles.ansopen} onClick={ansclick}>
                <p className={styles.p_ques}>답변 비공개</p>
                <img src={`${ansopen ? Open : Close}`} className={styles.img_ques}></img>
            </div>
            <div className={styles.blackline}></div>
        </div>
    )
}

export default Ansopen;
