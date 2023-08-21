import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import styles from './style/origin.module.css';
import styles2 from './style/QnApage_2.module.css';
import styles3 from './style/Basic_Choice.module.css';
import styles4 from './style/QnApage.module.css';
import Arrow_left from '../img/QnA_img/arrow-left.png'
import PageSlice from './Slice/PageSlice';
import Token from './Token';

const Nickname = (props) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    
    const [name, setname] = useState("questicker");

    const hostId = Token()[2];
    const userID = Token()[0];

    const goBack = () => {
        if (props.page === 'guest') {
            navigate(`/main/${hostId}`); // 이전 페이지로 이동
        }
        if (props.page === 'basic') {
            dispatch(PageSlice.actions.host());
        }
        if (props.page === 'host') {
            navigate(`/main/host/${userID}`);
        }
    };

    return (
        <div className={`${props.page === 'host' && styles2.draw} ${props.page === 'guest' && styles4.draw} ${props.page === 'basic' && styles3.draw}` }>
            <img src={Arrow_left} className={styles2.Arrow_left} alt='Logo' onClick={goBack}></img>
            <h1 className={styles.name}>{name}</h1>
        </div>
    );
};

export default Nickname;