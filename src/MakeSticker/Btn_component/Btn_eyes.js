import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Btn.module.css";
import Check from "../image/check_icon.png";
import StickerSlice from "../StickerSlice";

import Eyes1 from "../image/eyes_image/eyes1.png";
import Eyes2 from "../image/eyes_image/eyes2.png";
import Eyes3 from "../image/eyes_image/eyes3.png";
import Eyes4 from "../image/eyes_image/eyes4.png";
import Eyes5 from "../image/eyes_image/eyes5.png";
import Eyes6 from "../image/eyes_image/eyes6.png";

const Btn_eyes = () => {
  const eyes = useSelector((state) => {
    return state.sticker.eyes;
  });

  const eyes1 = { img: Eyes1, index: 1 };
  const eyes2 = { img: Eyes2, index: 2 };
  const eyes3 = { img: Eyes3, index: 3 };
  const eyes4 = { img: Eyes4, index: 4 };
  const eyes5 = { img: Eyes5, index: 5 };
  const eyes6 = { img: Eyes6, index: 6 };

  const array = [eyes1, eyes2, eyes3, eyes4, eyes5, eyes6];

  const dispatch = useDispatch();

  const onclick = (index) => {
    if (eyes === index) {
      dispatch(StickerSlice.actions.update(["eyes", 0])); // 같은 거 2번 클릭 시 제거
    } else {
      dispatch(StickerSlice.actions.update(["eyes", index])); // 클릭한 얼굴의 index로 StickerSlice의 face 값 변경
    }
  };

  const renderClass = window.innerWidth >= 600 ? styles.background : styles.bgsmall;

  return (
    <div className={renderClass}>
      {array.map((item) => (
        <button
          className={`${styles.button} ${
            eyes === item.index ? styles.click : ""
          }`}
          onClick={() => onclick(item.index)}
        >
          <img src={item.img} className={styles.element}></img>
          <img
            src={Check} style={{width:'25px',height:'25px'}}
            className={`${styles.check} ${
              eyes === item.index ? "" : styles.hidden
            }`}
          ></img>
        </button>
      ))}
    </div>
  );
};

export default Btn_eyes;
