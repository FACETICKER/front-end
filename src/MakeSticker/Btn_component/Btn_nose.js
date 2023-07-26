import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Btn.module.css";
import Check from "../image/check_icon.png";
import StickerSlice from "../StickerSlice";

import Nose1 from "../image/nose_image/nose1.png";
import Nose2 from "../image/nose_image/nose2.png";
import Nose3 from "../image/nose_image/nose3.png";
import Nose4 from "../image/nose_image/nose4.png";
import Nose5 from "../image/nose_image/nose5.png";
import Nose6 from "../image/nose_image/nose6.png";


const Btn_nose = () => {
  const nose = useSelector((state) => {
    return state.sticker.nose;
  });

  const nose1 = { img: Nose1, index: 1 };
  const nose2 = { img: Nose2, index: 2 };
  const nose3 = { img: Nose3, index: 3 };
  const nose4 = { img: Nose4, index: 4 };
  const nose5 = { img: Nose5, index: 5 };
  const nose6 = { img: Nose6, index: 6 };

  const array = [nose1, nose2, nose3, nose4, nose5, nose6];

  const dispatch = useDispatch();

  const onclick = (index) => {
    if (nose === index) {
      dispatch(StickerSlice.actions.update(["nose", 0])); // 같은 거 2번 클릭 시 제거
    } else {
      dispatch(StickerSlice.actions.update(["nose", index])); // 클릭한 얼굴의 index로 StickerSlice의 face 값 변경
    }
  };

  return (
    <div className={styles.background}>
      {array.map((item) => (
        <button
          className={`${styles.button} ${
            nose === item.index ? styles.click : ""
          }`}
          onClick={() => onclick(item.index)}
        >
          <img src={item.img} className={styles.element}></img>
          <img
            src={Check}
            className={`${styles.check} ${
              nose === item.index ? "" : styles.hidden
            }`}
          ></img>
        </button>
      ))}
    </div>
  );
};

export default Btn_nose;
