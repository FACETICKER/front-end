import check from "../img/InitialSurvey_img/icon _check circled outline_ (2).svg";
import React, { useState, useRef, useEffect } from "react";
import logo from "../img/InitialSurvey_img/icon _check circled outline_ (2).svg";
import styled from "styled-components";
import axios from "axios";
import "../style/InitialSurvey.css";
import ReactDOM from "react-dom";
import Picker from "react-mobile-picker-scroll";
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>;

function InitialSurvey() {
  const [showSecondTextbox, setShowSecondTextbox] = useState(false);
  const [showSecondChooseButton, setSecondChooseButton] = useState(false);
  const [showThirdTextbox, setShowThirdTextbox] = useState(false);
  const [showFourthTextbox, setShowFourthTextbox] = useState(false);
  const [showFifthTextbox, setShowFifthTextbox] = useState(false);
  const [showInputButton, setShowInputButton] = useState(false);
  const [chooseSeason, setChooseSeason] = useState(""); // 선택한 계절을 저장하는 상태
  const [chooseM, setChooseM] = useState(""); // 선택한 달을 저장하는 상태
  const [chooseD, setChooseD] = useState(""); // 선택한 날을 저장하는 상태
  const [chooseImport, setChooseImport] = useState(""); // 우정또는사랑을 저장하는 상태
  const [chooseDay, setChooseDay] = useState("");
  const [showSeasonButtons, setShowSeasonButtons] = useState(true); // 계절 버튼 선택 창을 표시하는 상태
  const [chooseNumber, setChooseNumber] = useState(""); // 선택한 숫자를 저장하는 상

  const handleNameInput = (event) => {
    const nameInput = document.getElementById("name");
    const resultDiv1 = document.getElementById("result1");
    const resultDiv2 = document.getElementById("gauge");
    const resultDiv3 = document.getElementById("check1");

    if (nameInput.value.trim() !== "") {
      resultDiv1.style.display = "block";
      resultDiv3.style.display = "block";
      resultDiv2.style.width = "114px";
    } else {
      resultDiv3.style.display = "none";
    }
  };

  const handleSeasonButtonClick = (season) => {
    const resultDiv1 = document.getElementById("result2");
    const resultDiv2 = document.getElementById("gauge");
    const resultDiv3 = document.getElementById("result1-1");
    const resultDiv4 = document.getElementById("check2");

    setChooseSeason(season); // 선택한 계절을 상태에 저장
    setShowThirdTextbox(true);
    resultDiv1.style.display = "block";
    if (resultDiv2.style.width < "171px") {
      resultDiv2.style.width = "171px";
    }
    resultDiv3.style.display = "none";
    resultDiv4.style.display = "block";
  };

  const handleShowSeasonButton = (event) => {
    const nameInput = document.getElementById("season");
    const resultDiv = document.getElementById("result1-1");
    resultDiv.style.display = "block";
  };

  const handleShowTextbox = (evant) => {
    const resultDiv1 = document.getElementById("result3-1");
    const resultDiv2 = document.getElementById("check4");
    const resultDiv3 = document.getElementById("result4");
    const resultDiv4 = document.getElementById("gauge");
    if (resultDiv1.style.display == "none") {
      resultDiv1.style.display = "block";
      toggleBodyOverflow(showThirdTextbox);
    } else {
      resultDiv1.style.display = "none";
      resultDiv2.style.display = "block";
      resultDiv3.style.display = "block";
      setChooseDay(valueGroups["Month"] + " " + valueGroups["Days"]);
      toggleBodyOverflow(false);
      if (resultDiv4.style.width < "285px") {
        resultDiv4.style.width = "285px";
      }
    }
  };

  const handleShowImport = (evant) => {
    const nameInput = document.getElementById("import");
    const resultDiv = document.getElementById("result4-1");
    resultDiv.style.display = "block";
  };

  const handleImportButtonClick = (evant) => {
    const resultDiv1 = document.getElementById("result5");
    const resultDiv2 = document.getElementById("gauge");
    const resultDiv3 = document.getElementById("result4-1");
    const resultDiv4 = document.getElementById("check5");
    setChooseImport(evant); // 선택한 계절을 상태에 저장
    setShowThirdTextbox(true);
    resultDiv1.style.display = "block";
    resultDiv2.style.width = "342px";
    resultDiv3.style.display = "none";
    resultDiv4.style.display = "block";
  };

  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");
  const [inputValue5, setInputValue5] = useState("");
  const [inputValue6, setInputValue6] = useState("");

  const handleShowFourNumber = () => {
    const resultDiv = document.getElementById("result2-1");
    const resultDiv1 = document.getElementById("check3");
    const resultDiv2 = document.getElementById("result3");
    const resultDiv3 = document.getElementById("gauge");
    if (resultDiv.style.display == "block") {
      if (input1 != "" || input2 != "" || input3 != "" || input4 != "") {
        resultDiv.style.display = "none";
        resultDiv1.style.display = "block";
        setChooseNumber(input1 + input2 + input3 + input4);
        resultDiv2.style.display = "block";
        if (resultDiv3.style.width < "228px") {
          resultDiv3.style.width = "228px";
        }
      }
    } else {
      resultDiv.style.display = "block"; // 닫혀있는 경우 열기
    }
  };

  const handleFourNumber = () => {
    const resultDiv = document.getElementById("result3");
    if (
      inputValue3 != "" &&
      inputValue4 != "" &&
      inputValue5 != "" &&
      inputValue6 != ""
    ) {
      resultDiv.style.display = "block"; // 닫혀있는 경우 열기
    } else {
      return;
    }
  };

  const [valueGroups, setValueGroups] = useState({
    Month: "1",
    Days: "1",
  });
  const optionGroups = {
    Month: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    Days: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ],
  };
  const handleChange = (name, value) => {
    setValueGroups((prevValueGroups) => ({
      ...prevValueGroups,
      [name]: value,
    }));
  };
  const pickerRef = useRef(null);

  // 본문 요소의 스크롤을 제어하는 함수
  const toggleBodyOverflow = (shouldLockScrolling) => {
    document.body.style.overflow = shouldLockScrolling ? "hidden" : "auto";
  };

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  const button3Ref = useRef(null);
  const button4Ref = useRef(null);

  const handleInput1Change = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    setInput1(e.target.value);
    if (e.target.value.length >= e.target.maxLength) {
      button2Ref.current.focus();
    }
  };

  const handleInput2Change = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    setInput2(e.target.value);
    if (e.target.value.length >= e.target.maxLength) {
      button3Ref.current.focus();
    }
  };

  const handleInput3Change = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    setInput3(e.target.value);
    if (e.target.value.length >= e.target.maxLength) {
      button4Ref.current.focus();
    }
  };

  const handleInput4Change = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    setInput4(e.target.value);
    if (e.target.value.length >= e.target.maxLength) {
      button1Ref.current.focus();
    }
  };

  return (
    <div className="App">
      <div>
        <div className="l1"></div>
        <div className="l2" id="gauge"></div>
      </div>
      <div className="l3">
        FACETICKER에서 사용할 프로필 포스터 정보를 등록해주세요.
      </div>

      <div style={{ border: "1px", height: "670px", overflow: "scroll" }}>
        <div style={{ padding: "30px" }}>
          <input
            className="l5"
            type="text"
            id="name"
            name="name"
            minLength="2"
            maxLength="15"
            placeholder="닉네임 (최대 15자)"
            onInput={handleNameInput}
          />
          <img src={check} id="check1" style={{ display: "none" }}></img>
        </div>
        <div id="result1" style={{ display: "none", padding: "30px" }}>
          <button
            id="season"
            name="season"
            className="l5"
            onClick={() => handleShowSeasonButton()}
          >
            <p id="chooseSeason">
              {chooseSeason || "좋아하는 계절을 선택하세요"}
            </p>
            <img src={check} id="check2" style={{ display: "none" }}></img>
          </button>
          <div id="result1-1" style={{ display: "none" }} className="l7">
            <button
              className="l8"
              id="spring"
              name="spring"
              onClick={() => handleSeasonButtonClick("봄")}
            >
              <p>봄</p>
            </button>
            <button
              className="l8"
              id="summer"
              name="summer"
              onClick={() => handleSeasonButtonClick("여름")}
            >
              <p>여름</p>
            </button>
            <button
              className="l8"
              id="autumn"
              name="autumn"
              onClick={() => handleSeasonButtonClick("가을")}
            >
              <p>가을</p>
            </button>
            <button
              className="l8"
              id="winter"
              name="winter"
              onClick={() => handleSeasonButtonClick("겨울")}
            >
              <p>겨울</p>
            </button>
          </div>
        </div>
        <div id="result2" style={{ display: "none", padding: "30px" }}>
          <button
            id="number"
            name="number"
            className="l5"
            onClick={handleShowFourNumber}
          >
            <p id="chooseNumber">{chooseNumber || "좋아하는 숫자는?"}</p>
            <img src={check} id="check3" style={{ display: "none" }}></img>
          </button>
          <div id="result2-1" className="l7" style={{ display: "none" }}>
            <input
              ref={button1Ref}
              value={input1}
              onChange={handleInput1Change}
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength)
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
              }}
              type="number"
              inputmode="decimal"
              min="0"
              max="9"
              maxLength={1}
            ></input>

            <input
              ref={button2Ref}
              value={input2}
              onChange={handleInput2Change}
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength)
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
              }}
              type="number"
              inputmode="decimal"
              min="0"
              max="9"
              maxLength={1}
            ></input>
            <input
              ref={button3Ref}
              value={input3}
              onChange={handleInput3Change}
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength)
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
              }}
              type="number"
              inputmode="decimal"
              min="0"
              max="9"
              maxLength={1}
            ></input>
            <input
              ref={button4Ref}
              value={input4}
              onChange={handleInput4Change}
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength)
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
              }}
              type="number"
              inputmode="decimal"
              min="0"
              max="9"
              maxLength={1}
            ></input>
          </div>
        </div>
        <div
          id="result3"
          style={{
            display: showFifthTextbox ? "block" : "none",
            padding: "30px",
          }}
        >
          <button
            id="day"
            name="day"
            className="l5"
            onClick={handleShowTextbox}
          >
            <p id="chooseDay">{chooseDay || "본인에게 의미있는 날은?"}</p>
            <img src={check} id="check4" style={{ display: "none" }}></img>
          </button>
          <div
            id="result3-1"
            className="l7"
            style={{ display: "none", overflow: "scroll", height: "200px" }}
          >
            <Picker
              ref={pickerRef}
              optionGroups={optionGroups}
              valueGroups={valueGroups}
              onChange={handleChange}
            />
          </div>
        </div>
        <div id="result4" style={{ display: "none", padding: "30px" }}>
          <button
            id="import"
            name="import"
            className="l5"
            onClick={handleShowImport}
          >
            <p id="chooseImport">{chooseImport || "내게 더 중요한 것은?"}</p>
            <img src={check} id="check5" style={{ display: "none" }}></img>
          </button>
          <div id="result4-1" style={{ display: "none" }} className="l7">
            <div>
              <button
                id="love"
                name="love"
                className="l10"
                onClick={() => handleImportButtonClick("사랑")}
              >
                <p className="l11">{"사랑"}</p>
              </button>
            </div>
            <div>
              <button
                id="friend"
                name="friend"
                className="l10"
                onClick={() => handleImportButtonClick("우정")}
              >
                <p className="l11">{"우정"}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="result5"
        style={{ display: showInputButton ? "block" : "none", padding: "30px" }}
      >
        <button id="set_sticker" name="set_sticker" className="l6">
          스티커 만들기
        </button>
      </div>
    </div>
  );
}

export default InitialSurvey;
