import message from "./img/ri_message-3-line.png";
import shine from "./img/download-removebg-preview 1 (1).png";
import Vector from "./img/Vector.svg";
import threeboll from "./img/Group 77.svg";
import user from "./img/user.png";
import close from "./img/close-x.svg";
import sticker from "./img/sticker.svg";
import recordpage from "./img/3users.svg";
import ellipse from "./img/Ellipse 201.png";
import React, { useState } from "react";

import "../style/MainpageVisit.css";

function MainpageVisit() {
  const [showFooter, setShowFooter] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

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

  return (
    <div className="App">
      <div>
        <button onClick={toggleModal2}>
          <img src={user} className="l1" alt="user" />
        </button>
        <button>
          <p className="l12">FACETICKER</p>
        </button>
        <button onClick={toggleModal}>
          <img src={message} className="l1" alt="message" />
        </button>
      </div>
      <div id="PrtSc" className="l2">
        <div
          style={{ position: "absolute", left: "25px", top: "150px" }}
          name="사진"
        >
          <img src={Vector} alt="Vector" />
        </div>
        <div>
          <p className="l13">WIN 겨울 TER</p>
        </div>
        <div style={{ position: "relative" }}>
          <img src={shine} alt="shine" />
          <p id="" className="l3">
            어서옵쇼 다들 스티커 붙여주세요..!
          </p>
        </div>
        <div style={{ width: "390px", height: "100px" }}>
          <div style={{ float: "left" }} name="이름">
            <p id="" className="l4">
              홍길동
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
            <img src={threeboll}></img>
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
              <p className="l13">앗!</p>
              <p>‘호스트명’님 공간에 흔적을 남기기 전, 로그인 하시겠어요?</p>
            </div>
            <button
              id="No"
              className="l14"
              onMouseOver={handleDragBtnNo}
              onMouseLeave={handleOutBtnNo}
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
      )}
      {showModal2 && (
        <div className="Modal">
          <div>
            <div>
              <img src={ellipse}></img>
              <p>내 플로필로 가시겠습니까?</p>
              <p>계정이 없는 유저는 로그인 페이지로 이동됩니다.</p>
            </div>
            <button id="close" onClick={toggleModal2}>
              <img src={close}></img>
            </button>
            <button id="OK" className="l16">
              YES
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainpageVisit;
