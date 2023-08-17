import React, { useState, useEffect } from "react";
import styles from "./style/Top.module.css";
import { useDispatch, useSelector } from "react-redux";
import Light from "./image/light.png";
import StickerSlice from "./StickerSlice";
import PopupSlice from "./PopupSlice";
import { useNavigate } from "react-router-dom";
import Idtoken from "../Stickers/Idtoken";

// 팝업창 띄우기 버튼(전등), faceticker, 나만의 스티커를 만들어보세요, 얼굴형~악세사리 글자 표현 컴포넌트

const Top = () => {
  // userId, 토큰, 방문자가 가지고 온  호스트Id 가져오기
  const hostid = useSelector((state) => state.login.hostid);
  const jwt = Idtoken()[1]; //호스트 토큰
  const userId = Idtoken()[0]; //호스트 아이디

  const whatType = hostid == null ? "host" : "visitor";

  const ID = whatType == "host" ? userId : hostid;
  const Main = whatType == "host" ? `/main/host/${userId}` : `/main${hostid}`;
  console.log("id", ID);

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
    navigate(Main);
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
