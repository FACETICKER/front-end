import React from "react";
import { useSelector } from "react-redux";
import styles from "./Hand.module.css";
import Hand1 from "../image/hand_image/hand1.png";
import Hand2 from "../image/hand_image/hand2.png";

import Hand6 from "../image/hand_image/hand6.png";
import Hand13 from "../image/hand_image/1hand3.png";
import Hand23 from "../image/hand_image/2hand3.png";
import Hand33 from "../image/hand_image/3hand3.png";
import Hand43 from "../image/hand_image/4hand3.png";
import Hand53 from "../image/hand_image/5hand3.png";
import Hand63 from "../image/hand_image/6hand3.png";
import Hand14 from "../image/hand_image/1hand4.png";
import Hand24 from "../image/hand_image/2hand4.png";
import Hand34 from "../image/hand_image/3hand4.png";
import Hand44 from "../image/hand_image/4hand4.png";
import Hand54 from "../image/hand_image/5hand4.png";
import Hand64 from "../image/hand_image/6hand4.png";
import Hand15 from "../image/hand_image/1hand5.png";
import Hand25 from "../image/hand_image/2hand5.png";
import Hand35 from "../image/hand_image/3hand5.png";
import Hand45 from "../image/hand_image/4hand5.png";
import Hand55 from "../image/hand_image/5hand5.png";
import Hand65 from "../image/hand_image/6hand5.png";

const Hand = () => {
  const hand = useSelector((state) => {
    return state.sticker.hand;
  });
  const face = useSelector((state) => {
    return state.sticker.face;
  });

  return (
    <div>
      {/* 
            팔1
        */}

      <img
        src={Hand1}
        className={`${styles.hand11} 
        ${face === 1 && hand === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand1}
        className={`${styles.hand21} 
        ${face === 2 && hand === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand1}
        className={`${styles.hand31} 
        ${face === 3 && hand === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand1}
        className={`${styles.hand41} 
        ${face === 4 && hand === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand1}
        className={`${styles.hand51} 
        ${face === 5 && hand === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand1}
        className={`${styles.hand61} 
        ${face === 6 && hand === 1 ? "" : styles.hidden}`}
      ></img>
      {/* 
             팔2
        */}
      <img
        src={Hand2}
        className={`${styles.hand12} 
        ${face === 1 && hand === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand2}
        className={`${styles.hand22} 
        ${face === 2 && hand === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand2}
        className={`${styles.hand32} 
        ${face === 3 && hand === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand2}
        className={`${styles.hand42} 
        ${face === 4 && hand === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand2}
        className={`${styles.hand52} 
        ${face === 5 && hand === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand2}
        className={`${styles.hand62} 
        ${face === 6 && hand === 2 ? "" : styles.hidden}`}
      ></img>
      {/* 
        팔3은 Face값에 따라 달라짐 
        */}
      <img
        src={Hand13}
        className={`${styles.hand13} 
        ${face === 1 && hand === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand23}
        className={`${styles.hand23} 
        ${face === 2 && hand === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand33}
        className={`${styles.hand33} 
        ${face === 3 && hand === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand43}
        className={`${styles.hand43} 
        ${face === 4 && hand === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand53}
        className={`${styles.hand53} 
        ${face === 5 && hand === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand63}
        className={`${styles.hand63} 
        ${face === 6 && hand === 3 ? "" : styles.hidden}`}
      ></img>
      {/* 
         팔4은 Face값에 따라 달라짐
      */}
      <img
        src={Hand14}
        className={`${styles.hand14} 
        ${face === 1 && hand === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand24}
        className={`${styles.hand24} 
        ${face === 2 && hand === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand34}
        className={`${styles.hand34} 
        ${face === 3 && hand === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand44}
        className={`${styles.hand44} 
        ${face === 4 && hand === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand54}
        className={`${styles.hand54} 
        ${face === 5 && hand === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand64}
        className={`${styles.hand64} 
        ${face === 6 && hand === 4 ? "" : styles.hidden}`}
      ></img>
      {/* 
         팔5은 Face값에 따라 달라짐
      */}
      <img
        src={Hand15}
        className={`${styles.hand15} 
        ${face === 1 && hand === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand25}
        className={`${styles.hand25} 
        ${face === 2 && hand === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand35}
        className={`${styles.hand35} 
        ${face === 3 && hand === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand45}
        className={`${styles.hand45} 
        ${face === 4 && hand === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand55}
        className={`${styles.hand55} 
        ${face === 5 && hand === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand65}
        className={`${styles.hand65} 
        ${face === 6 && hand === 5 ? "" : styles.hidden}`}
      ></img>
      {/* 
         팔6
      */}
      <img
        src={Hand6}
        className={`${styles.hand16} 
        ${face === 1 && hand === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand6}
        className={`${styles.hand26} 
        ${face === 2 && hand === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand6}
        className={`${styles.hand36} 
        ${face === 3 && hand === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand6}
        className={`${styles.hand46} 
        ${face === 4 && hand === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand6}
        className={`${styles.hand56} 
        ${face === 5 && hand === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Hand6}
        className={`${styles.hand66} 
        ${face === 6 && hand === 6 ? "" : styles.hidden}`}
      ></img>
    </div>
  );
};

export default Hand;
