import React, { useState, useEffect } from 'react'
import styles from './style/QnApage.module.css';
import {useDispatch, useSelector} from "react-redux";
import questionSlice from './Slice/questionSlice';
import IDSlice from './Slice/IDSlice';
import Nickname from './Nickname';
import Quesinput from './guest_input/Quesinput';
import Guest_Btn from './guest_input/Guest_Btn';

function QnApage_guest() {

    /*
    function Btn(props) {
        return (
            <button className={styles.buttonArray} id={props.id} type={props.type} data-open={props.open}>{props.text}</button>
        );
    };
    */

    const ques = useSelector(state=>{
        return state.question;
    });
    
    return (
        <div className={styles.background}>
            <Nickname page='guest'/>
            <div className={styles.buttons}>
                {ques.map((item, index) => (<Guest_Btn key={index} text={item.text} id={item.id} type={item.type} open={item.open} clicked={item.clicked}/>))}
            </div>
            <div className={styles.ans}>
                <Quesinput/> 
            </div>
        </div>
    );
};

export default QnApage_guest
