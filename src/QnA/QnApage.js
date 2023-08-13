import React, { useState, useEffect } from "react";
import QnApage_host from "./QnApage_host";
import QnApage_guest from "./QnApage_guest";
import styles from "./style/origin.module.css";
import { useDispatch, useSelector } from "react-redux";
import FirstSlice from "./Slice/FirstSlice";
import PageSlice from "./Slice/PageSlice";
import Basic_Choice from "./Basic_Choice";
import Del_page from "./delete_page/Del_page";
import IDSlice from "./Slice/IDSlice";
import questionSlice from "./Slice/questionSlice";
import AnswerSlice from './Slice/AnswerSlice'

const QnApage = () => {
  const dispatch = useDispatch();

  const page = useSelector((state) => {
    return state.page;
  });

  const click = () => {
    {
      page === "host"
        ? dispatch(PageSlice.actions.guest())
        : dispatch(PageSlice.actions.host());
    }
    dispatch(FirstSlice.actions.change());
  };

  const [getques, setgetques] = useState(''); // 페이지 로드 시 api에서 n문n답 조회

  const test2 = () => {

    const headers = {
        "x-access-token": JWT,
        'Content-Type': 'application/json'
    };

    fetch(`http://app.faceticker.site/${userID}/nqna`, {
        method: "GET", // 또는 "POST", "PUT", "DELETE" 등 요청하려는 메소드에 따라 설정
        headers: headers,
      }) // 서버로 GET 요청을 보냄
        .then((response) => response.json()) // 서버에서 받은 응답을 JSON 형태로 파싱
        .then((data) => {
            console.log(data);
            setgetques(data);
        })
        .catch((error) => {
            console.error("오류 발생", error); // 요청이 실패하면 에러를 콘솔에 출력
        });
}

  /* userID와 토큰 정의 */

  const userID = 2;
  const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJ1c2VyX2VtYWlsIjoiYmFkdWswMzI2QG5hdmVyLmNvbSIsImlhdCI6MTY5MTk0Nzk1OCwiZXhwIjoxNjkxOTUxNTU4fQ._KIzNc4zSQB8oFUC-RrfcKTOg-3aZHlqBpzUeS1E13g';

  useEffect(() => {
    test2();
  }, []);

  useEffect(() => {
    if (getques) {
      const list = getques.result;
      let ID = 0;
      list.forEach(item => {
        const quesOpen = item.question_hidden === 0 ? true : false;
        dispatch(questionSlice.actions.up({text: item.question, id: ID, type: "question", open: quesOpen, clicked: false, nQnA_id: item.nQnA_id})); // type 수정 필요 벡에서 받은걸로
        if (item.answer) {
          const ansOpen = item.answer_hidden === 0 ? true : false;
          dispatch(AnswerSlice.actions.up({text: item.answer, id: ID, type: "answer", open: ansOpen, clicked: false, nQnA_id: item.nQnA_id}));
        }
        ID++;
      });
      dispatch(IDSlice.actions.set(ID));
    }
  }, [getques]);



  return (
    <div className={styles.dream}>
      <button onClick={click}>host / visitor 전환</button>
      {page === "host" && <QnApage_host />}
      {page === "guest" && <QnApage_guest />}
      {page === "basic" && <Basic_Choice />}
      {page === "del" && <Del_page />}
    </div>
  );
};

export default QnApage;

