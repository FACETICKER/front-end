import React, { useState, useRef } from "react";
import styles from "./style/STICKER.module.css";
import Face from "./sticker/Face";
import Hand from "./sticker/Hand";
import Foot from "./sticker/Foot";
import Eyes from "./sticker/Eyes";
import Nose from "./sticker/Nose";
import Mouth from "./sticker/Mouth";
import Accessory from "./sticker/Accessory";
import domtoimage from "dom-to-image";

const STICKER = () => {
  const [imageURL, setImageURL] = useState(null);
  const containerRef = useRef(null);

  const handleCaptureImg = () => {
    if (containerRef.current) {
      domtoimage
        .toPng(containerRef.current)
        .then(function (dataUrl) {
          setImageURL(dataUrl);
          downloadImage(dataUrl); // 이미지를 파일로 다운로드하는 함수 호출
          console.log(imageURL);
        })
        .catch(function (error) {
          console.error("이미지 캡처 오류:", error);
        });
    }
  };

  const downloadImage = (dataUrl) => {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "sticker.png";
    link.click();
  };

  return (
    <div className={styles.background}>
      {/*  <button onClick={handleCaptureImg}>저장</button> */}
      <div ref={containerRef} className={styles.stickersWrap}>
        <Face />
        <Hand />
        <Foot />
        <Eyes />
        <Mouth />
        <Nose />
        <Accessory />
      </div>
    </div>
  );
};

export default STICKER;
