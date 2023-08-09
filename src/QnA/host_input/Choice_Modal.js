import styles3 from './QnApage_3.module.css';
import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import AnswerSlice from '../Slice/AnswerSlice';
import questionSlice from '../Slice/questionSlice';
import ChoiceSlice from '../Slice/ChoiceSlice';
import AnsEditSlice from '../Slice/AnsEditSlice';
import Modal from 'react-modal';
import OpencheckSlice from '../Slice/OpencheckSlice';
import Basic_questionSlice from '../Slice/Basic_questionSlice';
import Switchquestion_Slice from '../Slice/Switchquestion_Slice';
import ShareOrNotSlice from '../Slice/ShareOrNotSlice';
import Edit from '../../img/QnA_img/edit.png';
import Delete from '../../img/QnA_img/trash-delete.png';


function Choice_Modal(props) {

    const dispatch = useDispatch();

    const onclick = () => {
        if (props.edit) {
            dispatch(AnsEditSlice.actions.edit());
            dispatch(ChoiceSlice.actions.change());
            setview(false);
            dispatch(ShareOrNotSlice.actions.reset());
            {!ques_open && dispatch(ShareOrNotSlice.actions.ques_false())}
            {!ans_open && dispatch(ShareOrNotSlice.actions.ans_false())}  // 수정
        } else {
            dispatch(AnsEditSlice.actions.new());
            dispatch(ChoiceSlice.actions.change());
            setview(false);
            dispatch(ShareOrNotSlice.actions.reset());  // 신규 질문
        }
        dispatch(Switchquestion_Slice.actions.all());
        dispatch(OpencheckSlice.actions.close()); // 비공개 설정 창 일단 꺼놓기
    }

    const ques = useSelector(state=>{
        return state.question;
    });

    const ans = useSelector(state=>{
        return state.answer;
    });

    const position = useSelector(state=>{
        return state.modalposition;
    });

    const [view, setview] = useState(true);

    const ID = ques.filter(obj => obj.clicked === true).map(obj => obj.id)[0];

    const ques_open = ques.filter(obj => obj.clicked === true).map(obj => obj.open)[0];

    const ans_open = ans.filter(obj => obj.id === ID).map(obj => obj.open)[0];

    const del = () => {
        dispatch(AnswerSlice.actions.remove(ID));
        
        const type = ques.filter(obj => obj.id === ID).map(obj => obj.type)[0];
        if (type === 'basic_question') {
            const text = ques.filter(obj => obj.id === ID).map(obj => obj.text)[0];
            dispatch(Basic_questionSlice.actions.add(text));
        } // 기본 질문 삭제 시 기본 질문 리스트에 다시 추가

        dispatch(questionSlice.actions.remove(ID));
    }

    const modalStyle = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000, // z-index 값
        },
        content: {
            zIndex: 1001,
            width: '170px',
            height: '90px',
            border: '2px solid rgba(245, 245, 245, 1)',
            padding: '0px',
            margin: '0px',
            boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.1)',
            position: 'absolute',
            top: position.top,
            left: position.left
        }
    };

    const handleOverlayClick = () => {
        closeModal();
    };

    const closeModal = () => {
        dispatch(questionSlice.actions.off()); // 클릭 상태 전부 off
        dispatch(AnswerSlice.actions.off());
        setview(false);
    };

    useEffect(() => {
        const count = ques.filter(obj => obj.clicked === true).length;
        {count > 1 ? setview(false) : setview(true)}; // 2개 이상 버튼 눌릴 경우 다 꺼버림
        {count > 1 && (dispatch(questionSlice.actions.off()))}; // 2개 이상 버튼 눌릴 경우 다 꺼버림
    }, []);

    return (
        <Modal isOpen={view} style={modalStyle} ariaHideApp={false} onOverlayClick={handleOverlayClick} onRequestClose={closeModal}>
            <div className={styles3.choiceBackground}>
                <div className={styles3.ctn} onClick={onclick}>
                    <p className={styles3.pencil_p}>답장하기</p>
                    <img src={Edit} className={styles3.pencil} ></img>
                </div>
                <div className={styles3.ctn} onClick={del}>
                    <p className={styles3.trash_p}>삭제하기</p>
                    <img src={Delete} className={styles3.trash}></img>
                </div>
            </div>
        </Modal>
    );
};

export default Choice_Modal;