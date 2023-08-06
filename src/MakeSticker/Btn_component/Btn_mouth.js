import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Btn.module.css";
import Check from "../image/check_icon.png";
import StickerSlice from "../StickerSlice";

import Mouth1 from "../image/mouth_image/mouth1-1.png";
import Mouth2 from "../image/mouth_image/mouth2-1.png";
import Mouth3 from "../image/mouth_image/mouth3-1.png";
import Mouth4 from "../image/mouth_image/mouth4-1.png";
import Mouth5 from "../image/mouth_image/mouth5-1.png";
import Mouth6 from "../image/mouth_image/mouth6-1.png";

const Btn_mouth = () => {
  const mouth = useSelector((state) => {
    return state.sticker.mouth;
  });

  const mouth1 = { img: Mouth1, index: 1 };
  const mouth2 = { img: Mouth2, index: 2 };
  const mouth3 = { img: Mouth3, index: 3 };
  const mouth4 = { img: Mouth4, index: 4 };
  const mouth5 = { img: Mouth5, index: 5 };
  const mouth6 = { img: Mouth6, index: 6 };

  const array = [mouth1, mouth2, mouth3, mouth4, mouth5, mouth6];

  const dispatch = useDispatch();

  const onclick = (index) => {
    if (mouth === index) {
      dispatch(StickerSlice.actions.update(["mouth", 0])); // 같은 거 2번 클릭 시 제거
    } else {
      dispatch(StickerSlice.actions.update(["mouth", index])); // 클릭한 얼굴의 index로 StickerSlice의 face 값 변경
    }
  };

  return (
    <div className={styles.background}>
      {array.map((item) => (
        <button
          className={`${styles.button} ${
            mouth === item.index ? styles.click : ""
          }`}
          onClick={() => onclick(item.index)}
        >
          <img src={item.img} className={styles.element}></img>
          <img
            src={Check}
            className={`${styles.check} ${
              mouth === item.index ? "" : styles.hidden
            }`}
          ></img>
        </button>
      ))}
    </div>
  );
};

export default Btn_mouth;
