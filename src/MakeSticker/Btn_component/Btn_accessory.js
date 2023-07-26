import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Btn.module.css";
import Check from "../image/check_icon.png";
import StickerSlice from "../StickerSlice";

import Accessory1 from "../image/accessory_image/accessory1.png";
import Accessory2 from "../image/accessory_image/accessory2.png";
import Accessory3 from "../image/accessory_image/accessory3.png";
import Accessory4 from "../image/accessory_image/accessory4.png";
import Accessory5 from "../image/accessory_image/accessory5.png";
import Accessory6 from "../image/accessory_image/accessory6.png";


const Btn_accessory = () => {
  const accessory = useSelector((state) => {
    return state.sticker.accessory;
  });

  const accessory1 = { img: Accessory1, index: 1 };
  const accessory2 = { img: Accessory2, index: 2 };
  const accessory3 = { img: Accessory3, index: 3 };
  const accessory4 = { img: Accessory4, index: 4 };
  const accessory5 = { img: Accessory5, index: 5 };
  const accessory6 = { img: Accessory6, index: 6 };

  const array = [accessory1, accessory2, accessory3, accessory4, accessory5, accessory6];

  const dispatch = useDispatch();

  const onclick = (index) => {
    if (accessory === index) {
      dispatch(StickerSlice.actions.update(["accessory", 0])); // 같은 거 2번 클릭 시 제거
    } else {
      dispatch(StickerSlice.actions.update(["accessory", index])); // 클릭한 얼굴의 index로 StickerSlice의 face 값 변경
    }
  };

  return (
    <div className={styles.background}>
      {array.map((item) => (
        <button
          className={`${styles.button} ${
            accessory === item.index ? styles.click : ""
          }`}
          onClick={() => onclick(item.index)}
        >
          <img src={item.img} className={styles.element}></img>
          <img
            src={Check}
            className={`${styles.check} ${
              accessory === item.index ? "" : styles.hidden
            }`}
          ></img>
        </button>
      ))}
    </div>
  );
};

export default Btn_accessory;
