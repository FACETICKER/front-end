import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Btn.module.css";
import Face1 from "../image/face_image/purple_face.png";
import Face2 from "../image/face_image/orange_face.png";
import Face3 from "../image/face_image/whiteblue_face.png";
import Face4 from "../image/face_image/green_face.png";
import Face5 from "../image/face_image/red_face.png";
import Face6 from "../image/face_image/blue_face.png";
import Check from "../image/check_icon.png";
import StickerSlice from "../StickerSlice";

const Btn_face = () => {
  const face = useSelector((state) => {
    return state.sticker.face;
  });

  const face1 = { img: Face1, index: 1 };
  const face2 = { img: Face2, index: 2 };
  const face3 = { img: Face3, index: 3 };
  const face4 = { img: Face4, index: 4 };
  const face5 = { img: Face5, index: 5 };
  const face6 = { img: Face6, index: 6 };

  const array = [face1, face2, face3, face4, face5, face6];

  const dispatch = useDispatch();

  const onclick = (index) => {
    if (face === index) {
      dispatch(StickerSlice.actions.update(["face", 0])); // 같은 거 2번 클릭 시 제거
    } else {
      dispatch(StickerSlice.actions.update(["face", index])); // 클릭한 얼굴의 index로 StickerSlice의 face 값 변경
    }
  };

  const renderClass = window.innerWidth >= 600 ? styles.background : styles.bgsmall;

  return (
    <div className={renderClass}>
      {array.map((item) => (
        <button
          className={`${styles.button} ${
            face === item.index ? styles.click : ""
          }`}
          onClick={() => onclick(item.index)}
        >
          <img src={item.img} className={styles.element}></img>
          <img
            src={Check} style={{width:'25px',height:'25px'}}
            className={`${styles.check} ${
              face === item.index ? "" : styles.hidden
            }`}
          ></img>
        </button>
      ))}
    </div>
  );
};

export default Btn_face;
