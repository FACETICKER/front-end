import React, { useState, useEffect } from "react";
import Logo from "../img/QnA_img/logo.png";
import styles from "./style/QnApage.module.css";
import { useDispatch, useSelector } from "react-redux";
import questionSlice from "./Slice/questionSlice";
import IDSlice from "./Slice/IDSlice";
import Nickname from "./Nickname";
import Quesinput from "./guest_input/Quesinput";
import Guest_Btn from "./guest_input/Guest_Btn";

function QnApage_guest() {
  /*
    function Btn(props) {
        return (
            <button className={styles.buttonArray} id={props.id} type={props.type} data-open={props.open}>{props.text}</button>
        );
    };
    */

  const dispatch = useDispatch();
  const ID = useSelector((state) => {
    return state.idcounter.value;
  });

  const ques = useSelector((state) => {
    return state.question;
  });

  const onsubmit = (event) => {
    event.preventDefault();
    if (question === "") {
      return;
    }
    dispatch(IDSlice.actions.up(1));
    dispatch(
      questionSlice.actions.up({
        text: question,
        id: ID,
        type: "question",
        open: true,
        clicked: false,
      })
    );
    setquestion("");
  };

  /* (redux 확인용)
    useEffect(() => {
        console.log(ques);
    }, [ques]);
    */

  const [question, setquestion] = useState("");

  const inputing = (event) => setquestion(event.target.value);

  return (
    <div className={styles.background}>
      <Nickname page="guest" />
      <div className={styles.buttons}>
        {ques.map((item, index) => (
          <Guest_Btn
            key={index}
            text={item.text}
            id={item.id}
            type={item.type}
            open={item.open}
            clicked={item.clicked}
          />
        ))}
      </div>
      <div className={styles.ans}>
        <Quesinput />
      </div>
    </div>
  );
}

export default QnApage_guest;
