import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Status1 from "./image/status_bar_1.png";
import Status2 from "./image/status_bar_2.png";
import Status3 from "./image/status_bar_3.png";
import Status4 from "./image/status_bar_4.png";
import Status5 from "./image/status_bar_5.png";
import Status6 from "./image/status_bar_6.png";
import Status7 from "./image/status_bar_7.png";
import styles from "./style/Status.module.css";

// 진행 상황 표시하는 바 관리 컴포넌트

const StatusBar = () => {
  const steps = useSelector((state) => {
    return state.sticker.step;
  });

  const [bar, setbar] = useState();

  useEffect(() => {
    if (steps === 0) {
      setbar(Status1);
    }
    if (steps === 1) {
      setbar(Status2);
    }
    if (steps === 2) {
      setbar(Status3);
    }
    if (steps === 3) {
      setbar(Status4);
    }
    if (steps === 4) {
      setbar(Status5);
    }
    if (steps === 5) {
      setbar(Status6);
    }
    if (steps === 6) {
      setbar(Status7);
    }
  }, [steps]); // step에 따라 이미지 바꾸는 간단한 노가다 코드

  return (
    <div className={styles.bar}>
      <img src={bar}></img>
    </div>
  );
};

export default StatusBar;
