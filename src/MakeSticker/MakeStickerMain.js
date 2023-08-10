import React, { useState } from "react";
import styles from "./style/origin.module.css";
import { useDispatch, useSelector } from "react-redux";
import Select from "./Select";
import StatusBar from "./StatusBar";
import Top from "./Top";
import STICKER from "./STICKER";
import styled from "styled-components";
import Popup from "./Popup";

// Main 컴포넌트 (Top 윗부분 관리 / STICKER 스티커 붙이는 곳 / 저 strip은 배경무늬 / StatusBar는 주황색 동그라미 표시창 / Select는 선택창)

const StickerWrap = styled.div`
  width: 20%;
`;

const MakeStickerMain = () => {
  return (
    <div className={styles.dream}>
      <Top />
      <STICKER />
      <div className={styles.strip}></div>
      <StatusBar />
      <Select />
      <Popup />
    </div>
  );
};

export default MakeStickerMain;
