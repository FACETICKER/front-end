import React, { useState, useEffect, useRef } from 'react'
import styles from './style/Basic_Choice.module.css';
import {useDispatch, useSelector} from "react-redux";
import Popup_QnA_Slice from './Slice/Popup_QnA_Slice';
import Popup from './Popup';

function Basic_btn(props) {

    const dispatch = useDispatch();

    const onclick = () => {
        dispatch(Popup_QnA_Slice.actions.open(props.text));
    }

    return (
        <div className={styles.buttonbackground}>
            <button className={styles.btn} onClick={onclick}>{props.text}</button>
            <button className={styles.btnshadow}></button>
            <Popup />
        </div>
    )
};

export default Basic_btn;