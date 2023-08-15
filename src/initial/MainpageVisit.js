import NextLoginList , { update } from "./NextLoginList";
import message from "../img/MainpageVisit_img/ri_message-3-line.png";
import Vector from "../img/MainpageVisit_img/Group 157 1.png";
import threeboll from "../img/MainpageVisit_img/Group 77.svg";
import user from "../img/MainpageVisit_img/user.png";
import close from "../img/MainpageVisit_img/close-x.svg";
import sticker from "../img/MainpageVisit_img/sticker.svg";
import recordpage from "../img/MainpageVisit_img/3users.svg";
import styled from "styled-components";
import React, { useState,useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./MainpageVisit.css";
import { useNavigate } from "react-router-dom";

import {
  setStickeris,
  setQuestionis,
  setNothing,
} from './NextLoginList.js'; // 경로는 실제 파일 경로에 맞게 수정해주세요


function MainpageVisit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const NextLoginList = useSelector(state => {return state.nextLoginList;});
  const [showFooter, setShowFooter] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [stickerInput, setStickerInput] = useState(false);
  const [stickerInput2, setStickerInput2] = useState(false);

  const BackgroundWrap = styled.div`
    background: linear-gradient(180deg, #ffd25d 0%, #ff984b 100%);
  `;
  const Background = styled.div`
    height: calc(var(--vh, 1vh) * 100);
    max-width: 37.5rem;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, #ffd25d 0%, #ff984b 100%);
    position: relative;
    left: 100px;
  `;
  const Div = styled.div`
    position: absolute;
    left: 30%;
  `;

  const toggleFooter = () => {
    setShowFooter(!showFooter);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleModal3 = () => {
    setShowModal3(!showModal3);
  };
  const toggleModal2 = () => {
    setShowModal2(!showModal2);
  };

  const handleDragBtnNo = () => {
    const resultDiv = document.getElementById("No");
    resultDiv.className = "l15";
  };
  const handleOutBtnNo = () => {
    const resultDiv = document.getElementById("No");
    resultDiv.className = "l14";
  };

  const handleDragBtnYes = () => {
    const resultDiv = document.getElementById("Yes");
    resultDiv.className = "l15";
  };
  const handleOutBtnYes = () => {
    const resultDiv = document.getElementById("Yes");
    resultDiv.className = "l14";
  };

  const handleNo = () => {
    navigate("/makesticker");
  };
  const handleYes = () => {
    console.log(NextLoginList);
    navigate("/");
    console.log(NextLoginList);
  };
  const handleQna = () => {
    navigate("/qna");
  };
  const handleMainHost = () => {
    navigate("/mainhost");
  };
  const handleVisitorsticker = () => {
    navigate("/visitorsticker");
  };
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  {/*const handleStickerLogin = () => {
    stickerLogin();
    console.log(NextLoginList);
    handleYes();
  };
  useEffect(() => {
    stickerLogin();
    setCount1(count1+1);
    
  }, [stickerInput]);
  const stickerLogin = () => {
    if (count1==1){
      dispatch(setStickeris(1));
      dispatch(setQuestionis(0));
      console.log(NextLoginList);
    }
    setStickerInput(100)
  };



  const handleQuestionLogin = () => {
    questionLogin();
    console.log(NextLoginList);
    handleYes();
  };
  useEffect(() => {
    questionLogin();
    setCount2(count2+1);
    
  }, [stickerInput2]);
  const questionLogin = () => {
    if (count2==1){
      dispatch(setQuestionis(1));
      dispatch(setStickeris(0));
      console.log(NextLoginList);
    }
    setStickerInput2(100)
  };
*/}
const dispatchNothing = () => {
  dispatch(setNothing(1));
}

const handleStickerLogin = () => {
  console.log(count1);
  setCount1(count1+1);
  console.log(count1);
  handleYes();
};
const dispatchSticker = () => {
  dispatch(setStickeris(1));
}
useEffect(() => {
  if (count1){
    dispatchSticker();
    console.log(NextLoginList);
  }
}, [count1]);

const handleQuestionLogin = () => {
  setCount2(count2+1);
  handleYes();
};
const dispatchQuestion = () =>{
  dispatch(setQuestionis(1));
}
useEffect(() => {
  if (count2) {
    dispatchQuestion();
    console.log(NextLoginList);
  }
}, [count2]);
const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VyX2VtYWlsIjoiaW16emFuZzZ1QG5hdmVyLmNvbSIsImlhdCI6MTY5MjEwMzI5NiwiZXhwIjoxNjkyMTA2ODk2fQ.11fvOad-CvkH7YGY30NkD5fg568_S9nIFxosEJkgHCY";
  
  
  const test1 = () => {

    const headers = {
        "x-access-token": JWT,
        'Content-Type': 'application/json'
    };
    
    fetch(`http://app.faceticker.site/3`, {
        method: "GET", // 또는 "POST", "PUT", "DELETE" 등 요청하려는 메소드에 따라 설정
        headers: headers,
      }) // 서버로 GET 요청을 보냄
        .then((response) => response.json()) // 서버에서 받은 응답을 JSON 형태로 파싱
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error("오류 발생", error); // 요청이 실패하면 에러를 콘솔에 출력
        });
  }
  test1();




  return (
    <div className="BackgroundWarp">
      <div className="Background">
        <div className="l25" style={{ position: "relative" }}>
          <header
            style={{
              float: "down",
              width: "320px",
              height: "70px",
              position: "relative",
              top: "0px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                position: "relative",
                top: "35%",
                left: "-3%",
              }}
            >
              <button
                style={{ border: "none", backgroundColor: "transparent" }}
                onClick={handleMainHost}
              >
                <img src={user} className="l1" alt="setting" />
              </button>
            </div>
            <div style={{ float: "left" }}>
              <button
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                <p className="l12">FACETICKER</p>
              </button>
            </div>
            <div
              style={{
                width: "26px",
                height: "26px",
                float: "left",
                position: "relative",
                top: "35%",
                left: "-3%",
              }}
              onClick={toggleModal3}
            >
              <button
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                <img src={message} className="l1" alt="message" />
              </button>
            </div>
          </header>
          <div style={{ position: "relative", top: "0px" }}>
            <div id="PrtSc" className="l2">
              <div
                style={{ position: "relative", left: "18%", top: "35%" }}
                name="사진"
              >
                <img src={Vector} alt="Vector" />
              </div>
              <div style={{ position: "relative", top: "-300px" }}>
                <div>
                  <p className="l13">WIN 겨울 TER</p>
                </div>
                <div id="ment" className="l22">
                  <div className="l23">
                    <p id="" className="l3">
                      어서옵쇼 다들 스티커 붙여주세요..!
                    </p>
                  </div>
                </div>
                <div style={{ width: "390px", height: "100px" }}>
                  <div style={{ float: "left" }} name="이름">
                    <p id="" className="l4">
                      수진님
                    </p>
                  </div>
                  <div style={{ float: "left" }} name="숫자">
                    <p id="" className="l5">
                      #28
                    </p>
                  </div>
                  <div style={{ float: "left" }} name="날짜">
                    <p id="" className="l6">
                      JUNE, 28
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "155%",
                    width: "338px",
                    height: "400px",
                  }}
                >
                  <div name="사자성어">
                    <div
                      name="threeboll"
                      style={{
                        width: "100px",
                        position: "absolute",
                        left: "0%",
                        top: "70%",
                      }}
                    >
                      <div
                        className="l24"
                        style={{ backgroundColor: "#FF6D00" }}
                      ></div>
                      <div
                        className="l24"
                        style={{ backgroundColor: "#FFE14F" }}
                      ></div>
                      <div
                        className="l24"
                        style={{ backgroundColor: "#FEFAEF" }}
                      ></div>
                    </div>
                    <p id="" className="l7">
                      오매불망
                    </p>
                  </div>
                  <div name="한자">
                    <p id="" className="l8">
                      寤寐不忘
                    </p>
                  </div>
                  <div name="뜻">
                    <p id="" className="l9">
                      자나깨나 잊지 못함
                    </p>
                  </div>
                </div>
                <Div>
                  <button className="l10" onClick={handleVisitorsticker}>
                    <img src={recordpage} alt="recordpage" />
                  </button>
                  <button className="l10" onClick={toggleModal}>
                    <img src={sticker} alt="sticker" />
                  </button>
                </Div>
              </div>
            </div>
          </div>
          {showFooter && (
            <footer className="FixedFooter">
              <div>
                <button id="" name="gohome" className="l11">
                  <p>나의 프로필</p>
                </button>
              </div>
              <div></div>
            </footer>
          )}
          {showModal && (
            <div className="Modal">
              <div>
                <div style={{}}>
                  <div className="l17">!</div>
                  <button className="l18" name="close" onClick={toggleModal}>
                    <img src={close}></img>
                  </button>
                  <div className="l26">
                    <p>앗!</p>
                  </div>
                  <div className="l27">
                    <p>
                      ‘호스트명’님 공간에 흔적을 남기기 전, 로그인 하시겠어요?
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    width: "318px",
                    display: "flex",
                    position: "relative",
                    left: "14px",
                    top: "100px",
                  }}
                >
                  <button
                    id="No"
                    className="l14"
                    onClick={handleNo}
                    onMouseOver={handleDragBtnNo}
                    onMouseLeave={handleOutBtnNo}
                    style={{ float: "left" }}
                  >
                    NO
                  </button>
                  <button
                    id="Yes"
                    className="l14"
                    onClick={handleStickerLogin}
                    onMouseOver={handleDragBtnYes}
                    onMouseLeave={handleOutBtnYes}
                  >
                    YES스티커
                  </button>
                </div>
              </div>
            </div>
          )}
          {showModal3 && (
            <div className="Modal">
              <div>
                <div style={{}}>
                  <div className="l17">!</div>
                  <button className="l18" name="close" onClick={toggleModal3}>
                    <img src={close}></img>
                  </button>
                  <div className="l26">
                    <p>앗!</p>
                  </div>
                  <div className="l27">
                    <p>
                      ‘호스트명’님 공간에 흔적을 남기기 전, 로그인 하시겠어요?
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    width: "318px",
                    display: "flex",
                    position: "relative",
                    left: "14px",
                    top: "100px",
                  }}
                >
                  <button
                    id="No"
                    className="l14"
                    onClick={handleQna}
                    onMouseOver={handleDragBtnNo}
                    onMouseLeave={handleOutBtnNo}
                    style={{ float: "left" }}
                  >
                    NO
                  </button>
                  <button
                    id="Yes"
                    className="l14"
                    onClick={handleQuestionLogin}
                    onMouseOver={handleDragBtnYes}
                    onMouseLeave={handleOutBtnYes}
                  >
                    YES질문
                  </button>
                </div>
              </div>
            </div>
          )}
          {showModal2 && (
            <div className="Modal">
              <div>
                <div className="l17">!</div>
                <button id="close" className="l18" onClick={toggleModal2}>
                  <img src={close}></img>
                </button>
                <div style={{ position: "relative", top: "50px" }}>
                  <p style={{ position: "relative", left: "-20px" }}>
                    내 플로필로 가시겠습니까?
                  </p>
                  <p>계정이 없는 유저는 로그인 페이지로 이동됩니다.</p>
                </div>
                <button id="OK" className="l16">
                  YES
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainpageVisit;
