import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style/Select.module.css";
import StickerSlice from "./StickerSlice";
import BtnWrap from "./BtnWrap";

// 선택창 관리 컴포넌트

const Select = () => {
  const dispatch = useDispatch();

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
        {step == 6 && <button className={styles.button}>완료</button>}
      </div>
      <BtnWrap />
      <div className={styles.blackline}></div>
    </div>
  );
};

export default Select;
