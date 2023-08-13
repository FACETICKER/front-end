import React, { useState, useRef, useEffect } from "react";
import styles from "./style/STICKER.module.css";
import Face from "./sticker/Face";
import Hand from "./sticker/Hand";
import Foot from "./sticker/Foot";
import Eyes from "./sticker/Eyes";
import Nose from "./sticker/Nose";
import Mouth from "./sticker/Mouth";
import Accessory from "./sticker/Accessory";
import domtoimage from "dom-to-image";
import { useDispatch, useSelector } from "react-redux";
import {
  setCaptureEnabled,
  setVisitorImageUrl,
  setImageUrl,
} from "./CaptureSlice";

const STICKER = () => {
  const containerRef = useRef(null);
  const dispatch = useDispatch();
  const captureEnabled = useSelector((state) => state.capture.captureEnabled);
  const imageUrl = useSelector((state) => state.capture.imageUrl);
  console.log(imageUrl);
  const handleCaptureImg = () => {
    if (containerRef.current) {
      domtoimage
        .toPng(containerRef.current)
        .then(function (dataUrl) {
          dispatch(setImageUrl(dataUrl));
          dispatch(setVisitorImageUrl(dataUrl));

          /*   downloadImage(dataUrl); // 이미지를 파일로 다운로드하는 함수 호출 */
          /*    console.log(dataUrl); */
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

  useEffect(() => {
    if (captureEnabled) {
      handleCaptureImg();
    }
  }, [captureEnabled]);

  return (
    <div className={styles.background}>
      <div ref={containerRef} className={styles.stickersWrap}>
        <Face />
        <Foot />
        <Eyes />
        <Mouth />
        <Nose />
        <Accessory />
        <Hand />
      </div>
    </div>
  );
};

export default STICKER;
