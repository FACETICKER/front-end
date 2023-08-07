import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Btn.module.css";
import Foot1 from "../image/foot_image/foot1.png";
import Foot2 from "../image/foot_image/foot2.png";
import Foot3 from "../image/foot_image/foot3.png";
import Foot4 from "../image/foot_image/foot4.png";
import Foot5 from "../image/foot_image/foot5.png";
import Foot6 from "../image/foot_image/foot6.png";

import Check from "../image/check_icon.png";
import StickerSlice from "../StickerSlice";

const Btn_foot = () => {
  const foot = useSelector((state) => {
    return state.sticker.foot;
  });

  const foot1 = { img: Foot1, index: 1 };
  const foot2 = { img: Foot2, index: 2 };
  const foot3 = { img: Foot3, index: 3 };
  const foot4 = { img: Foot4, index: 4 };
  const foot5 = { img: Foot5, index: 5 };
  const foot6 = { img: Foot6, index: 6 };

  const array = [foot1, foot2, foot3, foot4, foot5, foot6];

  const dispatch = useDispatch();

  const onclick = (index) => {
    if (foot === index) {
      dispatch(StickerSlice.actions.update(["foot", 0])); // 같은 거 2번 클릭 시 제거
    } else {
      dispatch(StickerSlice.actions.update(["foot", index])); // 클릭한 얼굴의 index로 StickerSlice의 face 값 변경
    }
  };

  return (
    <div className={styles.background}>
      {array.map((item) => (
        <button
          className={`${styles.button} ${
            foot === item.index ? styles.click : ""
          }`}
          onClick={() => onclick(item.index)}
        >
          <img src={item.img} className={styles.element}></img>
          <img
            src={Check} style={{width:'25px',height:'25px'}}
            className={`${styles.check} ${
              foot === item.index ? "" : styles.hidden
            }`}
          ></img>
        </button>
      ))}
    </div>
  );
};

export default Btn_foot;
