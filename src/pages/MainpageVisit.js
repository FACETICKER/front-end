import message from "../img/MainpageVisit_img/ri_message-3-line.png";
import Vector from "../img/MainpageVisit_img/Group 157 1.png";
import threeboll from "../img/MainpageVisit_img/Group 77.svg";
import user from "../img/MainpageVisit_img/user.png";
import close from "../img/MainpageVisit_img/close-x.svg";
import sticker from "../img/MainpageVisit_img/sticker.svg";
import recordpage from "../img/MainpageVisit_img/3users.svg";
import styled from "styled-components";
import React, { useState } from "react";

import "../style/MainpageVisit.css";
import { useNavigate } from "react-router-dom";

function MainpageVisit() {
  const navigate = useNavigate();
  const [showFooter, setShowFooter] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
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

  const toggleFooter = () => {
    setShowFooter(!showFooter);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
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

  return (
    <div className="BackgroundWarp">
      <div className="Background">
        <div className="App">
          <header style={{ position: "relative", left: "-10px" }}>
            <button
              onClick={toggleModal2}
              style={{ border: "none", backgroundColor: "transparent" }}
            >
              <img src={user} className="l1" alt="user" />
            </button>
            <button style={{ border: "none", backgroundColor: "transparent" }}>
              <p className="l12">FACETICKER</p>
            </button>
            <button
              onClick={toggleModal}
              style={{ border: "none", backgroundColor: "transparent" }}
            >
              <img src={message} className="l1" alt="message" />
            </button>
          </header>
          <body id="PrtSc" className="l2">
            <div
              style={{ position: "relative", left: "5px", top: "150px" }}
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
              <div style={{ position: "relative" }}>
                <div name="사자성어">
                  <div
                    name="threeboll"
                    style={{
                      position: "relative",
                      left: "-100px",
                      top: "150px",
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
              <div>
                <button className="l10">
                  <img src={recordpage} alt="recordpage" />
                </button>
                <button className="l10">
                  <img src={sticker} alt="sticker" onClick={toggleModal} />
                </button>
              </div>
            </div>
          </body>
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
                <div>
                  <div className="l17">!</div>
                  <button className="l18" name="close" onClick={toggleModal}>
                    <img src={close}></img>
                  </button>
                  <p className="l13" style={{ clear: "left" }}>
                    앗!
                  </p>
                  <p style={{ position: "relative", top: "20px" }}>
                    ‘호스트명’님 공간에 흔적을 남기기 전, 로그인 하시겠어요?
                  </p>
                </div>
                <div
                  style={{ position: "relative", left: "14px", top: "50px" }}
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
                    onMouseOver={handleDragBtnYes}
                    onMouseLeave={handleOutBtnYes}
                  >
                    YES
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
