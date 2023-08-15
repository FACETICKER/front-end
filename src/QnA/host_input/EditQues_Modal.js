import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import Modal from 'react-modal';
import styles from '../style/EditQues_Modal.module.css';
import questionSlice from '../Slice/questionSlice';
import AnswerSlice from '../Slice/AnswerSlice';
import Close from '../../img/QnA_img/close_switch.png';
import Open from '../../img/QnA_img/open_switch.png';
import ShareOrNotSlice from '../Slice/ShareOrNotSlice';
import PageSlice from '../Slice/PageSlice';
import Token from '../Token';

// 팝업창 띄우기 버튼(전등), faceticker, 나만의 스티커를 만들어보세요, 얼굴형~악세사리 글자 표현 컴포넌트

const EditQues_Modal = () => {

    const dispatch = useDispatch();

    const ques = useSelector(state=>{
        return state.question;
    });

    const ID = ques.filter(obj => obj.clicked === true).map(obj => obj.id)[0]; // 클릭한 질문 아이디

    const nqna_id = ques.filter(obj => obj.clicked === true).map(obj => obj.nQnA_id)[0]; // 클릭한 질문 nqna아이디

    const first_ques_open = ques.filter(obj => obj.clicked === true).map(obj => obj.open)[0]; // 초기 질문 비공개값

    useEffect(() => {
        dispatch(ShareOrNotSlice.actions.reset());
        {!first_ques_open && dispatch(ShareOrNotSlice.actions.ques_false())} // 초기 질문 비공개값 불러오기
    }, []);

    const ques_open = useSelector(state=>{
        return state.share.ques;
    }); // 비공개값 왔다갔다 가능하게

    const [quesopen, setquesopen] = useState(first_ques_open); // 초기 비공개값 설정 완료

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
            width: '390px',
            height: '220px',
            padding: '0px',
            margin: '0px',
            position: 'absolute',
            top: '75%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            overflow: 'auto',
            dipslay: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }
    }; // 스타일

    const quesclick = () => {
        setquesopen(!quesopen);
        dispatch(ShareOrNotSlice.actions.ques_change());
    }

    const close = () => {
        dispatch(questionSlice.actions.off()); // 질문 클릭 안된 상태로 돌리기
        dispatch(questionSlice.actions.openswitch([ID, ques_open])); // 답변, 질문에 공개 여부 설정
        setview(false);
        QuesHiddenPatch();
    }

    const del = () => {
        dispatch(questionSlice.actions.off());
        dispatch(AnswerSlice.actions.off());
        dispatch(PageSlice.actions.del());
        setview(false);     // 삭제 페이지로 이동
    }

    const [view, setview] = useState(true); // 처음 렌더링 시 true

    const userID = Token()[0];
    const JWT = Token()[1];

    const QuesHiddenPatch = () => {

        const headers = {
            "x-access-token": JWT,
            'Content-Type': 'application/json',
        };

        const requestBody = {
            question_hidden: ques_open ? 0 : 1
        };

        fetch(`http://app.faceticker.site/${userID}/nqna/${nqna_id}/question/hidden`, {
            method: "PATCH", // 또는 "POST", "PUT", "DELETE" 등 요청하려는 메소드에 따라 설정
            headers: headers,
            body: JSON.stringify(requestBody),
        })
            .then((response) => response.json()) // 서버에서 받은 응답을 JSON 형태로 파싱
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error("오류 발생", error); // 요청이 실패하면 에러를 콘솔에 출력
            });
    }

    return (
        <>
            <Modal isOpen={view} style={modalStyle}>
                <div className={styles.controlzone}>
                    <div className={styles.sharezone} onClick={quesclick}>
                        <p className={styles.p_style}>비공개 설정</p>
                        <img src={`${quesopen ? Open : Close}`} className={styles.img_ques}></img>
                    </div>
                    <div className={styles.delzone} onClick={del}>
                        <p className={styles.p_style}>삭제하기</p>
                    </div>
                </div>
                <div className={styles.closezone} onClick={close}>
                    <p className={styles.p_style2}>확인</p>
                </div>
            </Modal>
        </>
    );
};

export default EditQues_Modal;