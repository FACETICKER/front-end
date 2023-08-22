import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './style/Select.module.css'
import Basic_btn from './Basic_btn';

const Select = () => {

    const basic = useSelector(state=>{
        return state.basic_question;
    });


    return (
        <div className={styles.background}>
            <div className={styles.Top}>
                <p className={styles.Top_p}>60가지 기본 질문 중 자유롭게 선택하세요.</p>
            </div>
            <div className={styles.btnwrap}>
                {basic.map((item, index) => (<Basic_btn text={item} key={index}/>))}
            </div>
        </div>
    );
};

export default Select;