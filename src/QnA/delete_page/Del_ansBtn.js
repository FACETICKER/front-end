import React, { useState, useEffect } from "react";
import styles from "./Del.module.css";
import AnswerSlice from "../Slice/AnswerSlice";
import { useDispatch, useSelector } from "react-redux";
import Check from "../../img/QnA_img/ok_check.png";
import NoneCheck from "../../img/QnA_img/none_check.png";

function Del_ansBtn(props) {
  const dispatch = useDispatch();

  const ans = useSelector((state) => {
    return state.answer;
  });

  const click = ans
    .filter((obj) => obj.id === props.id)
    .map((obj) => obj.clicked)[0];

  const onclick = () => {
    dispatch(AnswerSlice.actions.edit(props.id));
  };

  return (
    <div className={styles.answerbackground} onClick={onclick}>
      <img
        src={`${click ? Check : NoneCheck}`}
        className={styles.check_img}
      ></img>
      <button
        key={props.id}
        className={`${styles.button_answer} ${
          props.text.length > 16 ? styles.radius_L : styles.radius_S
        }`}
        id={props.id}
        type={props.type}
        data-open={props.open}
      >
        <span className={styles.answertext}>{props.text}</span>
      </button>
    </div>
  );
}

export default Del_ansBtn;
