import React, { useState, useEffect, useRef } from "react";
import styles2 from "./style/QnApage_2.module.css";
import { useDispatch, useSelector } from "react-redux";
import questionSlice from "./Slice/questionSlice";
import ID_answerSlice from "./Slice/ID_AnswerSlice";
import AnswerSlice from "./Slice/AnswerSlice";
import Buttons_idSlice from "./Slice/Buttons_idSlice";
import ChoiceSlice from "./Slice/ChoiceSlice";
import Answer_button from "./host_input/Answer_button";
import Choice_Modal from "./host_input/Choice_Modal";
import ModalpositionSlice from "./Slice/ModalpositionSlice";
import Basicquestionbtn from "../img/QnA_img/basicquestionbtn.png";
import PageSlice from "./Slice/PageSlice";
import New_mark from "../img/QnA_img/new_mark.png";

function Btn(props) {
  const dispatch = useDispatch();

  const ans = useSelector((state) => state.answer);

  const ques = useSelector((state) => {
    return state.question;
  });

  const view = useSelector((state) => {
    return state.switch_question;
  });

  const choice = useSelector((state) => {
    return state.choice;
  });

  const onclick = (e) => {
    dispatch(Buttons_idSlice.actions.change());
    dispatch(ID_answerSlice.actions.up(props.id)); // answer id가 현재 질문 id와 같게 설정 (원래 e.target.id)
    dispatch(ChoiceSlice.actions.reset()); // choice를 off
    dispatch(questionSlice.actions.edit(props.id)); // question 버튼의 clicked가 on/off 바뀌게 설정

    const buttonRect = e.target.getBoundingClientRect();
    const modalTop = buttonRect.bottom + 10;
    const modalLeft = buttonRect.left + buttonRect.width / 2;
    dispatch(ModalpositionSlice.actions.up({ top: modalTop, left: modalLeft }));
  };

  const [hasMatchingId, setHasMatchingId] = useState(false); // 질문과 같은 id를 가진 답변이 존재하는지 여부
  const [filtered, setFiltered] = useState([]); // id가 같은 답변

  useEffect(() => {
    const count = ques.filter((obj) => obj.clicked === true).length;
    {
      count > 1 && dispatch(questionSlice.actions.off());
    } // 2개 이상 버튼 눌릴 경우 다 꺼버림
    const count2 = ans.filter((obj) => obj.clicked === true).length;
    {
      count > 0 && count2 > 0 && dispatch(questionSlice.actions.off());
    } // 질문과 답변 모두 클릭(결국 2개 이상 버튼 눌리는 경우) 다 끔
    {
      count > 0 && count2 > 0 && dispatch(AnswerSlice.actions.off());
    }
    {
      count2 > 1 && dispatch(AnswerSlice.actions.off());
    }
  }, []);

  useEffect(() => {
    const matchingIds = ans.filter((item) => item.id === props.id);
    setHasMatchingId(matchingIds.length > 0);
    setFiltered(matchingIds);
  }, [ans, props.id]);

  const maxId = ques.reduce((max, item) => {
    return item.id > max ? item.id : max;
  }, 0);

  const Basic_Choice = () => {
    dispatch(PageSlice.actions.basic());
  };

  const type = ques
    .filter((obj) => obj.id === props.id)
    .map((obj) => obj.type)[0];

  // view가 true면 답변 내역, false면 미답변 내역

  const classNames = [
    styles2.buttonArray, // 기본 스타일 (container)
    type === "basic_question" ? styles2.basic : "", // 기본 질문인가요?
  ].join(" ");

  // 답변 내역은 전부 보여주고, 미답변 내역에서는 답변이 있으면 div 숨기는 스타일 적용

  return (
    <div>
      <div
        className={`${styles2.buttonbackground} ${
          !view && hasMatchingId ? styles2.hidden : ""
        }`}
      >
        <button
          className={classNames}
          id={props.id}
          type={props.type}
          data-open={props.open}
          onClick={onclick}
        >
          <span className={styles2.buttontext}>{props.text}</span>
          <img
            src={New_mark}
            className={`${styles2.new} ${
              hasMatchingId || type === "basic_question" ? styles2.hidden : ""
            }`}
          ></img>
        </button>
      </div>
      {props.clicked && !choice && <Choice_Modal edit={hasMatchingId} />}
      {hasMatchingId &&
        view &&
        filtered.map((item) => (
          <Answer_button
            key={item.id}
            id={item.id}
            type={item.type}
            open={item.open}
            text={item.text}
            clicked={item.clicked}
          ></Answer_button>
        ))}
      {props.id === maxId && (
        <div className={styles2.basic_btn_background}>
          <img
            src={Basicquestionbtn}
            className={styles2.basic_btn_img}
            onClick={Basic_Choice}
          ></img>
        </div>
      )}
    </div>
  );
}

export default Btn;
