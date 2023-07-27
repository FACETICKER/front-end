import React, { useState, useEffect, useRef } from "react";
import styles2 from "./style/QnApage_2.module.css";
import { useDispatch, useSelector } from "react-redux";
import Ansinput from "./host_input/Ansinput";
import Ansedit from "./host_input/Ansedit";
import Nickname from "./Nickname";
import Switchquestion from "./Switchquestion";
import Btn from "./Btn";
import Basicquestionbtn from "../img/QnA_img/basicquestionbtn.png";
import PageSlice from "./Slice/PageSlice";
import questionSlice from "./Slice/questionSlice";
import AnswerSlice from "./Slice/AnswerSlice";

function QnApage_host() {
  const dispatch = useDispatch();

  const ques = useSelector((state) => {
    return state.question;
  });

  const ans = useSelector((state) => {
    return state.answer;
  });

  const choice = useSelector((state) => {
    return state.choice;
  });

  const ansEditorNot = useSelector((state) => {
    return state.ansedit;
  });

  const first = useSelector((state) => {
    return state.first;
  });

  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [first]); // 첫 렌더링 시 끝까지 아래로 스크롤

  const Basic_Choice = () => {
    dispatch(PageSlice.actions.basic());
  };

  useEffect(() => {
    console.log(ques);
    console.log(ans);
  }, [ques, ans]); // 첫 렌더링 시 끝까지 아래로 스크롤

  return (
    <div className={styles2.background}>
      <Nickname page="host" />
      <Switchquestion />
      <div className={`${choice ? styles2.answering : styles2.original}`}>
        {ques.map((item, index) => (
          <Btn
            key={index}
            text={item.text}
            id={item.id}
            type={item.type}
            open={item.open}
            clicked={item.clicked}
          />
        ))}
        {ques.length === 0 && (
          <div className={styles2.basic_btn_background}>
            <img
              src={Basicquestionbtn}
              className={styles2.basic_btn_img}
              onClick={Basic_Choice}
            ></img>
          </div>
        )}
        <div ref={scrollRef}></div>
      </div>
      {choice && ansEditorNot && (
        <div className={styles2.ans}>
          <Ansinput />
        </div>
      )}
      {choice && !ansEditorNot && (
        <div className={styles2.ans}>
          <Ansedit />
        </div>
      )}
    </div>
  );
}

export default QnApage_host;
