import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style/Select.module.css";
import StickerSlice from "./StickerSlice";
import BtnWrap from "./BtnWrap";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

import styles1 from "./style/Popup.module.css";
import styles2 from "./Modal_jh.module.css";
import Close from "../img/QnA_img/close-x.png";
import Dots from "../components/Dots";

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
    width: "342px",
    height: "240px",
    padding: "0px",
    margin: "0px",
    boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.5)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

// 선택창 관리 컴포넌트

const Select = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const step = useSelector((state) => {
    return state.sticker.step;
  });

  const up = () => {
    dispatch(StickerSlice.actions.stepcontrol(true));
  };

  const down = () => {
    dispatch(StickerSlice.actions.stepcontrol(false));
  };

  return (
    <div className={styles.background}>
      <div className={styles.line}></div>
      <div className={styles.stepchoice}>
        <button
          className={`${styles.button} ${step !== 0 ? "" : styles.hidden}`}
          onClick={down}
        >
          이전
        </button>
        <button
          className={`${styles.button} ${step !== 6 ? "" : styles.hidden}`}
          onClick={up}
        >
          다음
        </button>
        {step == 6 && (
          <button onClick={openModal} className={styles.button}>
            완료
          </button>
        )}
        <Modal
          onRequestClose={closeModal}
          isOpen={modalIsOpen}
          style={modalStyle}
        >
          <div className={styles1.background}>
            <div className={styles2.top_div}>
              <Dots />
              <img
                src={Close}
                onClick={closeModal}
                className={styles2.close}
              ></img>
            </div>
            <div className={styles2.remain}>
              <p className={styles2.p1}>방문자들에게 한 마디 남기시겠어요?</p>
              <p className={styles2.p2}>미 작성시 랜덤 문구가 표시됩니다.</p>
              <div className={styles2.button_zone}>
                <div className={styles2.button1}>
                  <button className={styles2.btn}>나중에..</button>
                  <button className={styles2.btnshadow}></button>
                </div>
                <div className={styles2.button2}>
                  <button className={styles2.btn_red}>좋아요</button>
                  <button className={styles2.btnshadow}></button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      <BtnWrap />
    </div>
  );
};

export default Select;
