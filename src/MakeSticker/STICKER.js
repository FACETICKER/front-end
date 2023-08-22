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
import html2canvas from "html2canvas";

const STICKER = () => {
  const containerRef = useRef(null);
  const dispatch = useDispatch();
  const captureEnabled = useSelector((state) => state.capture.captureEnabled);
  const imageUrl = useSelector((state) => state.capture.imageUrl);
  /*   console.log(imageUrl); */

  /*   const handleCaptureImg = () => {
    if (containerRef.current) {
      domtoimage
        .toPng(containerRef.current)
        .then(function (dataUrl) {
          dispatch(setImageUrl(dataUrl));
          console.log("넘어온", dataUrl);
          /* dispatch(setVisitorImageUrl(dataUrl)); */

  //downloadImage(dataUrl); //
  /*    console.log(dataUrl); */
  /*   })
        .catch(function (error) {
          console.error("이미지 캡처 오류:", error);
        });
    }
  };
 */
  const handleCaptureImg = () => {
    const backgroundColor = window.getComputedStyle(
      containerRef.current
    ).backgroundColor;

    // Override background color to be transparent
    /*     containerRef.current.style.backgroundColor = "transparent";
     */
    html2canvas(containerRef.current, { backgroundColor: null }).then(function (
      canvas
    ) {
      // Restore original background color
      /*       containerRef.current.style.backgroundColor = backgroundColor; */

      // Convert canvas to image URL and set it in state
      const capturedImageUrl = canvas.toDataURL();
      dispatch(setImageUrl(capturedImageUrl));
      //console.log("넘어온", capturedImageUrl);
    });
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
      dispatch(setCaptureEnabled(false));
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
