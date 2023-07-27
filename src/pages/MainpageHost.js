import message from "../img/MainpageHost_img/ri_message-3-line (1).svg";
import face from "../img/MainpageHost_img/Ellipse 103.png";
import share from "../img/MainpageHost_img/share.svg";
import download from "../img/MainpageHost_img/download.svg";
import Vector from "../img/MainpageHost_img/Group 157 1.png";
import threeboll from "../img/MainpageHost_img/Group 77.svg";
import styled from "styled-components";
import axios from "axios";
import setting from "../img/MainpageHost_img/gear-settings.svg";
import edit from "../img/MainpageHost_img/square-edit.svg";
import recordpage from "../img/MainpageHost_img/3users.svg";
import close from "../img/MainpageHost_img/close-x.svg";
import React, { useState } from "react";
import html2canvas from "html2canvas";
import "../style/MainpageHost.css";
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>;


function MainpageHost() {
  const [showFooter, setShowFooter] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [chattingNumber, setChattingNumber] = useState(0);
  const [recordNumber, setRecordNumber] = useState(0);
  const [Korean, setKorean] = useState("");
  const [Chinese, setChinese] = useState("");
  const [Mean, setMean] = useState("");
  const [Season, setSeason] = useState("");
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [Day, setDay] = useState("");
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
  `;


  const toggleFooter = () => {
    setShowFooter(!showFooter);
  };

  const toggleModal1 = () => {
    setShowModal1(!showModal1);
  };

  const toggleModal2 = () => {
    setShowModal2(!showModal2);
  };

  const toggleModal3 = () => {
    setShowModal3(!showModal3);
  };

  const handleLinkDownload = () => {
    const address = "http://localhost:3000/";
    navigator.clipboard
      .writeText(address)
      .then(() => {
        alert("주소가 클립보드에 복사되었습니다.");
      })
      .catch((error) => {
        console.error("클립보드 복사 실패:", error);
        alert("클립보드 복사에 실패했습니다. 수동으로 복사해주세요.");
      });
  };

  const handleDownload = () => {
    const targetElement = document.getElementById("PrtSc"); // 캡처할 대상 div의 id
    if (targetElement) {
      html2canvas(targetElement).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "capture.png";
        link.click();
        toggleModal2();
      });
    }
  };

  const handlePlusMessage = () => {
    const resultDiv1 = document.getElementById("countMessageDiv");
    resultDiv1.style.display = "block";
    setChattingNumber((prevNumber1) => prevNumber1 + 1);
  };
  const handleMinusMessage = () => {
    const resultDiv1 = document.getElementById("countMessageDiv");
    if (chattingNumber <= "1") {
      setChattingNumber(0);
      resultDiv1.style.display = "none";
    } else {
      resultDiv1.style.display = "block";
      setChattingNumber((prevNumber1) => prevNumber1 - 1);
    }
  };

  const handlePlusRecord = () => {
    const resultDiv1 = document.getElementById("countRecordDiv");
    resultDiv1.style.display = "block";
    setRecordNumber((prevNumber) => prevNumber + 1);
  };
  const handleMinusRecord = () => {
    const resultDiv1 = document.getElementById("countRecordDiv");
    if (recordNumber <= "1") {
      setRecordNumber(0);
      resultDiv1.style.display = "none";
    } else {
      resultDiv1.style.display = "block";
      setRecordNumber((prevNumber) => prevNumber - 1);
    }
  };

  const handleSpring = () => {
    setSeason("SPR 봄 ING");
  };
  const handleSummer = () => {
    setSeason("SUM 여름 MER");
  };
  const handleAutumn = () => {
    setSeason("AUT 가을 UMN");
  };
  const handleWinter = () => {
    setSeason("WIN 겨울 TER");
  };

  const handleNoneProfile = () => {
    const resultDiv1 = document.getElementById("ment");
    const resultDiv2 = document.getElementById("outyellow1");
    const resultDiv3 = document.getElementById("outyellow2");
    resultDiv1.style.display = "none";
    setSeason(" ");
    setName(" ");
    setNumber(" ");
    setDay(" ");
    resultDiv2.style.display = "none";
    resultDiv3.style.display = "block";
  };
  const handleHaveProfile = () => {
    const resultDiv1 = document.getElementById("ment");
    const resultDiv2 = document.getElementById("outyellow1");
    const resultDiv3 = document.getElementById("outyellow2");
    resultDiv1.style.display = "block";
    setSeason("WIN 겨울 TER");
    setName("홍길동");
    setNumber("#128");
    setDay("JUNE, 28");
    resultDiv2.style.display = "block";
    resultDiv3.style.display = "none";
  };

  return (
    <BackgroundWrap>
    <Background>
    <div className="App">
      <div style={{ float: "down" }}>
        <div style={{ float: "left" }}>
          <button
            style={{ border: "none", backgroundColor: "transparent" }}
            onClick={toggleFooter}
          >
            <img src={setting} className="l1" alt="setting" />
          </button>
        </div>
        <div style={{ float: "left" }}>
          <button style={{ border: "none", backgroundColor: "transparent" }}>
            <p className="l12">FACETICKER</p>
          </button>
        </div>
        <div style={{ float: "left" }}>
          <button style={{ border: "none", backgroundColor: "transparent" }}>
            <img src={message} className="l1" alt="message" />
          </button>
          <div id="countMessageDiv" className="l14" style={{ display: "none" }}>
            <p id="countMessage" className="l15">
              {chattingNumber || "0"}
            </p>
          </div>
          <button
            style={{ width: "20px", height: "20px" }}
            onClick={handlePlusMessage}
          >
            +1
          </button>
          <button
            style={{ width: "20px", height: "20px" }}
            onClick={handleMinusMessage}
          >
            -1
          </button>
        </div>
      </div>

      <div>
        <div id="PrtSc" style={{ width: "338px" }}>
          <div name="inyellow" className="l2" style={{ clear: "left" }}>
            <div
              style={{ position: "absolute", left: "25px", top: "150px" }}
              name="사진"
            >
              <img src={Vector} alt="Vector" />
            </div>
            <div>
              <p className="l13">{Season || "WIN 겨울 TER"}</p>
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
                  {Name || "수민님"}
                </p>
              </div>
              <div style={{ float: "left" }} name="숫자">
                <p id="" className="l5">
                  {Number || "#128"}
                </p>
              </div>
              <div style={{ float: "left" }} name="날짜">
                <p id="" className="l6">
                  {Day || "JUNE, 28"}
                </p>
              </div>
            </div>
          </div>
          <div
            id="outyellow1"
            name="outyellow1"
            style={{ position: "relative", width: "338px", height: "218px" }}
          >
            <div name="사자성어">
              <img src={threeboll} style={{ float: "left" }}></img>
              <p id="" className="l7">
                {Korean || "오매불망"}
              </p>
            </div>
            <div name="한자">
              <p id="" className="l8">
                {Chinese || "寤寐不忘"}
              </p>
            </div>
            <div name="뜻">
              <p id="" className="l9">
                {Mean || "자나깨나 잊지 못함"}
              </p>
            </div>
          </div>
          <div
            id="outyellow2"
            name="outyellow2"
            style={{
              position: "relative",
              width: "338px",
              height: "218px",
              display: "none",
            }}
          >
            <div>
              <img src={threeboll} style={{ float: "left" }}></img>
            </div>
            <div name="프로필 생성 제안">
              <p id="" className="ll6">
                프로필이 아직 없다면
              </p>
            </div>
            <div name="링크">
              <p id="" className="l17">
                <a onClick={toggleModal3} className="l18">
                  여기
                </a>
                를 클릭하세요
              </p>
            </div>
          </div>
        </div>
        <div>
          <div style={{ float: "left" }}>
            <button className="l10">
              <img src={recordpage} alt="recordpage" />
            </button>
            <div
              id="countRecordDiv"
              className="l14"
              style={{ display: "none" }}
            >
              <p id="countRecord" className="l15">
                {recordNumber || "0"}
              </p>
            </div>
            <button
              style={{ width: "20px", height: "20px" }}
              onClick={handlePlusRecord}
            >
              +1
            </button>
            <button
              style={{ width: "20px", height: "20px" }}
              onClick={handleMinusRecord}
            >
              -1
            </button>
          </div>
          <div style={{ float: "left" }}>
            <button className="l10" onClick={handleLinkDownload}>
              <img src={share} alt="share"/>
            </button>
          </div>
          <div>
            <button className="l10" onClick={handleDownload}>
              <img src={download} alt="download" />
            </button>
          </div>
        </div>
        <div>
          <button>사랑선택</button>
          <button>우정선택</button>
          <button onClick={handleSpring}>봄선택</button>
          <button onClick={handleSummer}>여름선택</button>
          <button onClick={handleAutumn}>가을선택</button>
          <button onClick={handleWinter}>겨울선택</button>
          <button onClick={handleNoneProfile}>프로필 생성 안함</button>
          <button onClick={handleHaveProfile}>프로필 생성 함</button>
        </div>
      </div>
      {showFooter && (
        <footer className="FixedFooter">
          <div>
            <button id="" name="cancel" className="l11" onClick={toggleFooter}>
              <p>취소</p>
            </button>
          </div>
          <div>
            <button
              id=""
              name="resetting"
              className="l11"
              onClick={toggleModal1}
            >
              <p>프로필 재설정</p>
            </button>
          </div>
        </footer>
      )}
      {showModal1 && (
        <div className="Modal">
          <div>
            <img src={edit}></img>
            <button
              style={{ border: "none", backgroundColor: "transparent" }}
              name="close"
              onClick={toggleModal1}
            >
              <img src={close}></img>
            </button>
            <div>
              <button>포스터 정보 수정</button>
              <button>스티커 수정</button>
              <button>상태메시지 수정</button>
            </div>
          </div>
        </div>
      )}
      {showModal2 && (
        <div className="Modal">
          <div>
            <button
              style={{ border: "none", backgroundColor: "transparent" }}
              name="close"
              onClick={toggleModal2}
            >
              <img src={close}></img>
            </button>
            <div>
              <p>사진이 저장되었습니다.</p>
            </div>
          </div>
        </div>
      )}
      {showModal3 && (
        <div className="Modal">
          <div>
            <div>
              <div
                style={{
                  borderRadius: "50%",
                  backgroundColor: "gray",
                  width: "60px",
                  height: "60px",
                  float: "left",
                }}
              >
                <p
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: "32px",
                  }}
                >
                  !
                </p>
              </div>
              <button
                style={{ border: "none", backgroundColor: "transparent" }}
                name="close"
                onClick={toggleModal3}
              >
                <img src={close}></img>
              </button>
            </div>
            <div style={{ clear: "left" }}>
              <p className="l20">프로필을 입력하시겠어요?</p>
              <p className="l21">프로필 정보 입력 페이지로 이동됩니다.</p>
              <button className="l19">
                <p style={{ color: "white", fontSize: "16px" }}>확인</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </Background>
    </BackgroundWrap>
  );
}

export default MainpageHost;
