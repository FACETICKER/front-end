import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './style/Switchquestion.module.css';
import Switchquestion_Slice from './Slice/Switchquestion_Slice';

const Switchquestion = () => {

    const dispatch = useDispatch();

    const click = useSelector(state=>{
        return state.switch_question;
    });

    const onclick = () => {
        dispatch(Switchquestion_Slice.actions.all());
    }

    const onclick2 = () => {
        dispatch(Switchquestion_Slice.actions.noanswer());
    }

    return (
        <div className={styles.draw}>
            <div className={`${styles.zone} ${click ? styles.clicked : ''}`} onClick={onclick}>
                <span>답변 내역</span>
            </div>
            <div className={`${styles.zone} ${!click ? styles.clicked : ''}`} onClick={onclick2}>
                <span>미답변 내역</span>
            </div>
        </div>
    );
};

export default Switchquestion;