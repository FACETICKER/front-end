import React, { useState, useEffect, useRef } from 'react'
import styles2 from './style/QnApage_2.module.css';
import {useDispatch, useSelector} from "react-redux";
import Ansinput from './host_input/Ansinput';
import Ansedit from './host_input/Ansedit';
import Ansopen from './host_input/Ansopen';
import Nickname from './Nickname';
import Switchquestion from './Switchquestion';
import Btn from './Btn';
import Basicquestionbtn from '../img/QnA_img/basicquestionbtn.png';
import PageSlice from './Slice/PageSlice';
import questionSlice from './Slice/questionSlice';
import AnswerSlice from './Slice/AnswerSlice';
import EditQues_Modal from './host_input/EditQues_Modal';
import EditAns_Modal from './host_input/EditAns_Modal';

function QnApage_host() {

    const dispatch = useDispatch();

    const ques = useSelector(state=>{
        return state.question;
    });

    const ans = useSelector(state=>{
        return state.answer;
    });

    const choice = useSelector(state=>{
        return state.choice;
    });

    const ansEditorNot = useSelector(state=>{
        return state.ansedit;
    });

    const first = useSelector(state=>{
        return state.first;
    });

    const open = useSelector(state=>{
        return state.opencheck;
    });

    const view = useSelector(state=>{
        return state.switch_question;
    });

    const scrollRef = useRef();

    useEffect(() => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }, [first]); // 첫 렌더링 시 끝까지 아래로 스크롤

    const Basic_Choice = () => {
        dispatch(PageSlice.actions.basic());
    }

    useEffect(() => {
        console.log('ques', ques);
        console.log('ans', ans);
    }, [ques, ans]); 

    return (
        <div className={styles2.background}>
            <Nickname page='host'/>
            <Switchquestion/>
            <div className={`${!choice && styles2.original} ${choice && open && styles2.answering_open} ${choice && !open && styles2.answering} ${styles2.hiddenscroll}`}>
                {ques.map((item, index) => (<Btn key={index} text={item.text} id={item.id} type={item.type} open={item.open} clicked={item.clicked}/>))}
                {!view && (
                    <img src={Basicquestionbtn} className={styles2.basic_btn_img} onClick={Basic_Choice}></img>
                )}
                <div ref={scrollRef}></div>
            </div>
            {choice && ansEditorNot && (
                <div className={styles2.ans}>
                    <Ansinput/> 
                </div>
            )} 
            {choice && !ansEditorNot && (
                <div className={styles2.ans}>
                    <Ansedit/>
                </div>
            )}
            {choice && open && (
                <Ansopen />
            )}
        </div>
    )
};

export default QnApage_host