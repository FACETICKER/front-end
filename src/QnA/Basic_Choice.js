import React, { useState, useEffect, useRef } from 'react'
import styles from './style/Basic_Choice.module.css';
import {useDispatch, useSelector} from "react-redux";
import Nickname from './Nickname';
import Select from './Select';
import Popup from './Popup';

function Basic_Choice() {

    return (
        <div className={styles.background}>
            <Nickname page='basic'/>
            <Select />
            <Popup />
        </div>
    )
};

export default Basic_Choice;