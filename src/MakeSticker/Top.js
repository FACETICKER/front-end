import React, { useState, useEffect } from "react";
import styles from "./style/Top.module.css";
import { useDispatch, useSelector } from "react-redux";
import Light from "./image/light.png";
import StickerSlice from "./StickerSlice";
import PopupSlice from "./PopupSlice";
import { useNavigate } from "react-router-dom";

// 팝업창 띄우기 버튼(전등), faceticker, 나만의 스티커를 만들어보세요, 얼굴형~악세사리 글자 표현 컴포넌트

const Top = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const steps = useSelector((state) => {
    return state.sticker.step;
  });

  useEffect(() => {
    if (steps === 0) {
      setstep("얼굴형");
    }
    if (steps === 1) {
      setstep("손");
    }
    if (steps === 2) {
      setstep("발");
    }
    if (steps === 3) {
      setstep("눈");
    }
    if (steps === 4) {
      setstep("코");
    }
    if (steps === 5) {
      setstep("입");
    }
    if (steps === 6) {
      setstep("악세사리");
    }
  }, [steps]); // step에 따라 글자 바뀌게 하는 간단한 노가다 코드

  const [step, setstep] = useState("");

  const open = () => {
    dispatch(PopupSlice.actions.open());
  };
  const faceticker = () => {
    //방문자, 호스트에 따라 바꾸기
    navigate("/mainvisit");
  };
  return (
    <div className={styles.background}>
      <img src={Light} className={styles.light} onClick={open}></img>
      <p onClick={faceticker} className={styles.title}>
        FACETICKER
      </p>
      <p className={styles.explanation}>나만의 스티커를 만들어보세요.</p>
      <p className={styles.step}>{step}</p>
    </div>
  );
};

export default Top;
