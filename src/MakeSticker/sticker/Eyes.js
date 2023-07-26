import React from "react";
import { useSelector } from "react-redux";
import styles from "./Eyes.module.css";
import Eyes1 from "../image/eyes_image/eyes1.png";
import Eyes2 from "../image/eyes_image/eyes2.png";
import Eyes3 from "../image/eyes_image/eyes3.png";
import Eyes4 from "../image/eyes_image/eyes4.png";
import Eyes5 from "../image/eyes_image/eyes5.png";
import Eyes6 from "../image/eyes_image/eyes6.png";

const Eyes = () => {
  const eyes = useSelector((state) => {
    return state.sticker.eyes;
  });
  const face = useSelector((state) => {
    return state.sticker.face;
  });

  return (
    <div>
      {/* 
            눈1
        */}

      <img
        src={Eyes1}
        className={`${styles.eyes11} 
        ${face === 1 && eyes === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes1}
        className={`${styles.eyes21} 
        ${face === 2 && eyes === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes1}
        className={`${styles.eyes31} 
        ${face === 3 && eyes === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes1}
        className={`${styles.eyes41} 
        ${face === 4 && eyes === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes1}
        className={`${styles.eyes51} 
        ${face === 5 && eyes === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes1}
        className={`${styles.eyes61} 
        ${face === 6 && eyes === 1 ? "" : styles.hidden}`}
      ></img>

      {/* 
            눈2
        */}

      <img
        src={Eyes2}
        className={`${styles.eyes12} 
        ${face === 1 && eyes === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes2}
        className={`${styles.eyes22} 
        ${face === 2 && eyes === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes2}
        className={`${styles.eyes32} 
        ${face === 3 && eyes === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes2}
        className={`${styles.eyes42} 
        ${face === 4 && eyes === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes2}
        className={`${styles.eyes52} 
        ${face === 5 && eyes === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes2}
        className={`${styles.eyes62} 
        ${face === 6 && eyes === 2 ? "" : styles.hidden}`}
      ></img>

      {/* 
            눈3
        */}

      <img
        src={Eyes3}
        className={`${styles.eyes13} 
        ${face === 1 && eyes === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes3}
        className={`${styles.eyes23} 
        ${face === 2 && eyes === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes3}
        className={`${styles.eyes33} 
        ${face === 3 && eyes === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes3}
        className={`${styles.eyes43} 
        ${face === 4 && eyes === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes3}
        className={`${styles.eyes53} 
        ${face === 5 && eyes === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes3}
        className={`${styles.eyes63} 
        ${face === 6 && eyes === 3 ? "" : styles.hidden}`}
      ></img>

      {/* 
            눈4
        */}

      <img
        src={Eyes4}
        className={`${styles.eyes14} 
        ${face === 1 && eyes === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes4}
        className={`${styles.eyes24} 
        ${face === 2 && eyes === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes4}
        className={`${styles.eyes34} 
        ${face === 3 && eyes === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes4}
        className={`${styles.eyes44} 
        ${face === 4 && eyes === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes4}
        className={`${styles.eyes54} 
        ${face === 5 && eyes === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes4}
        className={`${styles.eyes64} 
        ${face === 6 && eyes === 4 ? "" : styles.hidden}`}
      ></img>

      {/* 
            눈5
        */}

      <img
        src={Eyes5}
        className={`${styles.eyes15} 
        ${face === 1 && eyes === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes5}
        className={`${styles.eyes25} 
        ${face === 2 && eyes === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes5}
        className={`${styles.eyes35} 
        ${face === 3 && eyes === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes5}
        className={`${styles.eyes45} 
        ${face === 4 && eyes === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes5}
        className={`${styles.eyes55} 
        ${face === 5 && eyes === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes5}
        className={`${styles.eyes65} 
        ${face === 6 && eyes === 5 ? "" : styles.hidden}`}
      ></img>

      {/* 
            눈6
        */}

      <img
        src={Eyes6}
        className={`${styles.eyes16} 
        ${face === 1 && eyes === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes6}
        className={`${styles.eyes26} 
        ${face === 2 && eyes === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes6}
        className={`${styles.eyes36} 
        ${face === 3 && eyes === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes6}
        className={`${styles.eyes46} 
        ${face === 4 && eyes === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes6}
        className={`${styles.eyes56} 
        ${face === 5 && eyes === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Eyes6}
        className={`${styles.eyes66} 
        ${face === 6 && eyes === 6 ? "" : styles.hidden}`}
      ></img>
    </div>
  );
};

export default Eyes;
