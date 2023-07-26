import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import Modal from 'react-modal';
import Alarm from './image/alarm_icon.png';
import styles from './style/Popup.module.css';
import Close from './image/close-x.png';
import PopupSlice from './Slice/PopupSlice';
import Basic_questionSlice from './Slice/Basic_questionSlice';
import questionSlice from './Slice/questionSlice';
import IDSlice from './Slice/IDSlice'

// 팝업창 띄우기 버튼(전등), faceticker, 나만의 스티커를 만들어보세요, 얼굴형~악세사리 글자 표현 컴포넌트

const Popup = (props) => {

    const dispatch = useDispatch();

    const view = useSelector(state=>{
        return state.popup.view
    });

    const text = useSelector(state=>{
        return state.popup.text
    });

    const modalStyle = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            zIndex: 1000, // z-index 값
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        content: {
            zIndex: 1001,
            border: '2px solid rgba(245, 245, 245, 1)',
            borderRadius: '20px',
            width: '318px',
            height: '280px',
            padding: '0px',
            margin: '0px',
            boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.1)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }
    };

    const close = () => {
        dispatch(PopupSlice.actions.close());
    } // 창 닫기

    const ID = useSelector(state=>{
        return state.idcounter.value;
    });

    const add = () => {
        dispatch(Basic_questionSlice.actions.del(text))
        dispatch(PopupSlice.actions.close());
        dispatch(IDSlice.actions.up(1));
        dispatch(questionSlice.actions.up({text: text, id: ID, type: "basic_question", open: true, clicked: false}))
    } // 기본 질문 제거 후 창 닫기

    return (
        <Modal isOpen={view} style={modalStyle}>
            <div className={styles.background}>
                <img src={Close} className={styles.close} onClick={close}></img>
                <img src={Alarm} className={styles.icon}></img>
                <p className={styles.p1}>해당 질문을 추가할까요 ?</p>
                <p className={styles.p2}>확인하시면 ‘미답변 질문’ 내역에 추가됩니다.</p>
                <button className={styles.confirm} onClick={add}>확인</button>
                <button className={styles.confirm_shadow}></button>
            </div>
        </Modal>
    );
};

export default Popup;