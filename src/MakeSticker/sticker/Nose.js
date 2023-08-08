import React from "react";
import { useSelector } from "react-redux";
import styles from "./Nose.module.css";
import Nose1 from "../image/nose_image/nose1-1.png";
import Nose2 from "../image/nose_image/nose2-1.png";
import Nose3 from "../image/nose_image/nose3-1.png";
import Nose4 from "../image/nose_image/nose4-1.png";
import Nose5 from "../image/nose_image/nose5-1.png";
import Nose6 from "../image/nose_image/nose6-1.png";

const Nose = () => {
  const nose = useSelector((state) => {
    return state.sticker.nose;
  });
  const face = useSelector((state) => {
    return state.sticker.face;
  });

  return (
    <div>
      {/* 
            코1
        */}

      <img
        src={Nose1}
        className={`${styles.nose12} 
        ${face === 0 && nose === 1 ? "" : styles.hidden}`}
      ></img>

      <img
        src={Nose1}
        className={`${styles.nose11} 
        ${face === 1 && nose === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose1}
        className={`${styles.nose12} 
        ${face === 2 && nose === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose1}
        className={`${styles.nose13} 
        ${face === 3 && nose === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose1}
        className={`${styles.nose14} 
        ${face === 4 && nose === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose1}
        className={`${styles.nose15} 
        ${face === 5 && nose === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose1}
        className={`${styles.nose16} 
        ${face === 6 && nose === 1 ? "" : styles.hidden}`}
      ></img>

      {/* 
            코2
        */}

      <img
        src={Nose2}
        className={`${styles.nose22} 
        ${face === 0 && nose === 2 ? "" : styles.hidden}`}
      ></img>

      <img
        src={Nose2}
        className={`${styles.nose21} 
        ${face === 1 && nose === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose2}
        className={`${styles.nose22} 
        ${face === 2 && nose === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose2}
        className={`${styles.nose23} 
        ${face === 3 && nose === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose2}
        className={`${styles.nose24} 
        ${face === 4 && nose === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose2}
        className={`${styles.nose25} 
        ${face === 5 && nose === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose2}
        className={`${styles.nose26} 
        ${face === 6 && nose === 2 ? "" : styles.hidden}`}
      ></img>

      {/* 
            코3
        */}

      <img
        src={Nose3}
        className={`${styles.nose32} 
        ${face === 0 && nose === 3 ? "" : styles.hidden}`}
      ></img>

      <img
        src={Nose3}
        className={`${styles.nose31} 
        ${face === 1 && nose === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose3}
        className={`${styles.nose32} 
        ${face === 2 && nose === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose3}
        className={`${styles.nose33} 
        ${face === 3 && nose === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose3}
        className={`${styles.nose34} 
        ${face === 4 && nose === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose3}
        className={`${styles.nose35} 
        ${face === 5 && nose === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose3}
        className={`${styles.nose36} 
        ${face === 6 && nose === 3 ? "" : styles.hidden}`}
      ></img>

      {/* 
            코4
        */}

      <img
        src={Nose4}
        className={`${styles.nose42} 
        ${face === 0 && nose === 4 ? "" : styles.hidden}`}
      ></img>

      <img
        src={Nose4}
        className={`${styles.nose41} 
        ${face === 1 && nose === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose4}
        className={`${styles.nose42} 
        ${face === 2 && nose === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose4}
        className={`${styles.nose43} 
        ${face === 3 && nose === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose4}
        className={`${styles.nose44} 
        ${face === 4 && nose === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose4}
        className={`${styles.nose45} 
        ${face === 5 && nose === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose4}
        className={`${styles.nose46} 
        ${face === 6 && nose === 4 ? "" : styles.hidden}`}
      ></img>

      {/* 
            코5
        */}

      <img
        src={Nose5}
        className={`${styles.nose52} 
        ${face === 0 && nose === 5 ? "" : styles.hidden}`}
      ></img>

      <img
        src={Nose5}
        className={`${styles.nose51} 
        ${face === 1 && nose === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose5}
        className={`${styles.nose52} 
        ${face === 2 && nose === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose5}
        className={`${styles.nose53} 
        ${face === 3 && nose === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose5}
        className={`${styles.nose54} 
        ${face === 4 && nose === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose5}
        className={`${styles.nose55} 
        ${face === 5 && nose === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose5}
        className={`${styles.nose56} 
        ${face === 6 && nose === 5 ? "" : styles.hidden}`}
      ></img>

      {/* 
            코6
        */}

      <img
        src={Nose6}
        className={`${styles.nose62} 
        ${face === 0 && nose === 6 ? "" : styles.hidden}`}
      ></img>

      <img
        src={Nose6}
        className={`${styles.nose61} 
        ${face === 1 && nose === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose6}
        className={`${styles.nose62} 
        ${face === 2 && nose === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose6}
        className={`${styles.nose63} 
        ${face === 3 && nose === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose6}
        className={`${styles.nose64} 
        ${face === 4 && nose === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose6}
        className={`${styles.nose65} 
        ${face === 5 && nose === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Nose6}
        className={`${styles.nose66} 
        ${face === 6 && nose === 6 ? "" : styles.hidden}`}
      ></img>
    </div>
  );
};

export default Nose;
