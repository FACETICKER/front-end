import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import Alarm from "./image/alarm_icon.png";
import styles from "./style/Popup.module.css";
import Close from "./image/close-x.png";
import PopupSlice from "./PopupSlice";

// 팝업창 띄우기 버튼(전등), faceticker, 나만의 스티커를 만들어보세요, 얼굴형~악세사리 글자 표현 컴포넌트

const Popup = () => {
  const dispatch = useDispatch();

  const view = useSelector((state) => {
    return state.popup;
  });

  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000, // z-index 값
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      zIndex: 1001,
      border: "2px solid rgba(245, 245, 245, 1)",
      borderRadius: "20px",
      width: "338px",
      height: "300px",
      padding: "0px",
      margin: "0px",
      boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.1)",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const close = () => {
    dispatch(PopupSlice.actions.close());
  };

  return (
    <Modal onRequestClose={close} isOpen={view} style={modalStyle}>
      <div className={styles.background}>
        <img src={Close} className={styles.close} onClick={close}></img>
        <img src={Alarm} className={styles.icon}></img>
        <p className={styles.p1}>모든 항목의 선택은 필수가 아닙니다.</p>
        <p className={styles.p2}>
          얼굴형을 선택하지 않아도, 눈을 선택하지 않아도, <br />그 어떤 것을
          선택하지 않아도, <br />
          스티커는 만들어집니다. 어떻게든요!
        </p>
        <p className={styles.p3}>
          완성된 스티커는 <br />
          호스트의 방문록 페이지에 남습니다.
        </p>
        <p className={styles.p4}>
          존재감을 알릴 수 있도록 개성 넘치는 스티커를 만들어 보세요!
        </p>
      </div>
    </Modal>
  );
};

export default Popup;
