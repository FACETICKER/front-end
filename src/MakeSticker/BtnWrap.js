import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style/BtnWrap.module.css";
import Btn_face from "./Btn_component/Btn_face";
import Btn_hand from "./Btn_component/Btn_hand";
import Btn_foot from "./Btn_component/Btn_foot";
import Btn_eyes from "./Btn_component/Btn_eyes";
import Btn_nose from "./Btn_component/Btn_nose";
import Btn_mouth from "./Btn_component/Btn_mouth";
import Btn_accessory from "./Btn_component/Btn_accessory";
// 선택창에 뜰 버튼들 넣는 곳

const BtnWrap = () => {
  const steps = useSelector((state) => {
    return state.sticker.step;
  });

  const renderClass =
    window.innerWidth >= 600 ? styles.background : styles.bgsmall;

  //div 안에 {step === (해당하는 수) && (만든 컴포넌트)} 넣으시면 됩니다.

  return (
    <div className={renderClass}>
      {steps === 0 && <Btn_face />}
      {steps === 1 && <Btn_hand />}
      {steps === 2 && <Btn_foot />}
      {steps === 3 && <Btn_eyes />}
      {steps === 4 && <Btn_nose />}
      {steps === 5 && <Btn_mouth />}
      {steps === 6 && <Btn_accessory />}
    </div>
  );
};

export default BtnWrap;
