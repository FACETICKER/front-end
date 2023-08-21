import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Btn.module.css";
import Hand1 from "../image/hand_image/hand1.png";
import Hand2 from "../image/hand_image/hand2.png";
import Hand3 from "../image/hand_image/hand3.png";
import Hand4 from "../image/hand_image/hand4.png";
import Hand5 from "../image/hand_image/hand5.png";
import Hand6 from "../image/hand_image/hand6.png";

import Check from "../image/check_icon.png";
import StickerSlice from "../StickerSlice";

const Btn_hand = () => {
  const hand = useSelector((state) => {
    return state.sticker.hand;
  });

  const hand1 = { img: Hand1, index: 1 };
  const hand2 = { img: Hand2, index: 2 };
  const hand3 = { img: Hand3, index: 3 };
  const hand4 = { img: Hand4, index: 4 };
  const hand5 = { img: Hand5, index: 5 };
  const hand6 = { img: Hand6, index: 6 };

  const array = [hand1, hand2, hand3, hand4, hand5, hand6];

  const dispatch = useDispatch();

  const onclick = (index) => {
    if (hand === index) {
      dispatch(StickerSlice.actions.update(["hand", 0])); // 같은 거 2번 클릭 시 제거
    } else {
      dispatch(StickerSlice.actions.update(["hand", index])); // 클릭한 얼굴의 index로 StickerSlice의 face 값 변경
    }
  };

  const renderClass = window.innerWidth >= 600 ? styles.background : styles.bgsmall;

  return (
    <div className={renderClass}>
      {array.map((item) => (
        <button
          className={`${styles.button} ${
            hand === item.index ? styles.click : ""
          }`}
          onClick={() => onclick(item.index)}
        >
          <img src={item.img} className={styles.element}></img>
          <img
            src={Check} style={{width:'25px',height:'25px'}}
            className={`${styles.check} ${
              hand === item.index ? "" : styles.hidden
            }`}
          ></img>
        </button>
      ))}
    </div>
  );
};

export default Btn_hand;
