import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import Modal from 'react-modal';
import styles from '../style/EditQues_Modal.module.css';
import questionSlice from '../Slice/questionSlice';
import AnswerSlice from '../Slice/AnswerSlice';
import PageSlice from '../Slice/PageSlice';
import ChoiceSlice from '../Slice/ChoiceSlice';
import AnsEditSlice from '../Slice/AnsEditSlice';
import ShareOrNotSlice from '../Slice/ShareOrNotSlice';
import Switchquestion_Slice from '../Slice/Switchquestion_Slice';
import OpencheckSlice from '../Slice/OpencheckSlice';

// 팝업창 띄우기 버튼(전등), faceticker, 나만의 스티커를 만들어보세요, 얼굴형~악세사리 글자 표현 컴포넌트

const EditAns_Modal = () => {

    const dispatch = useDispatch();

    const ans = useSelector(state=>{
        return state.answer;
    });

    const ques = useSelector(state=>{
        return state.question;
    });

    const ID = ans.filter(obj => obj.clicked === true).map(obj => obj.id)[0]; // 클릭한 답변 아이디

    const screenwidth = window.innerWidth;

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
            border: 'none',
            background: 'none',
            width: screenwidth >= 420 ? '390px': '90%',
            aspectRatio: '390 / 220',
            padding: '0px',
            margin: '0px',
            position: 'absolute',
            top: '75%',
            left: screenwidth >= 500 ? '50%' : '52.5%',
            transform: 'translate(-50%, -50%)',
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }
    }; // 스타일

    const close = () => {
        dispatch(AnswerSlice.actions.off()); // 답변 클릭 안된 상태로 돌리기
        setview(false);
    }

    const del = () => {
        dispatch(questionSlice.actions.off());
        dispatch(AnswerSlice.actions.off());
        dispatch(PageSlice.actions.del());
        setview(false);     // 삭제 페이지로 이동
    }

    const [view, setview] = useState(true); // 처음 렌더링 시 true

    const ans_open = ans.filter(obj => obj.clicked === true).map(obj => obj.open)[0];

    const ques_open = ques.filter(obj => obj.id === ID).map(obj => obj.open)[0];

    const onclick = () => {
        dispatch(AnsEditSlice.actions.edit()); // 수정
        dispatch(ChoiceSlice.actions.change());
        setview(false);
        dispatch(ShareOrNotSlice.actions.reset());
        {!ques_open && dispatch(ShareOrNotSlice.actions.ques_false())}
        {!ans_open && dispatch(ShareOrNotSlice.actions.ans_false())}
        dispatch(Switchquestion_Slice.actions.all());
        dispatch(OpencheckSlice.actions.close()); // 비공개 설정 창 일단 꺼놓기
    }

    return (
        <>
            <Modal isOpen={view} style={modalStyle}>
                <div className={styles.controlzone}>
                    <div className={styles.sharezone_ans} onClick={onclick}>
                        <p className={styles.p_style}>답변 수정하기</p>
                    </div>
                    <div className={styles.delzone_ans} onClick={del}>
                        <p className={styles.p_style}>삭제하기</p>
                    </div>
                </div>
                <div className={styles.closezone} onClick={close}>
                    <p className={styles.p_style2}>취소</p>
                </div>
            </Modal>
        </>
    );
};

export default EditAns_Modal;