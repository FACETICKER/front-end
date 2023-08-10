import InitialSurveyList from "./InitialSurveyList.js";
import check from "../img/InitialSurvey_img/icon _check circled outline_ (2).svg";
import down from "../img/InitialSurvey_img/chevron-down.png"
import up from "../img/InitialSurvey_img/chevron-up (1).png"
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import "./InitialSurvey.css";
import ReactDOM from "react-dom";
import Picker from "react-mobile-picker-scroll";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {
  setInitialName,
  setInitialSeason,
  setInitialNumber,
  setInitialDay,
  setInitialImport,
} from './InitialSurveyList.js'; // 경로는 실제 파일 경로에 맞게 수정해주세요
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>;



function InitialSurvey() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const [condition1, setCondition1] = useState(false);
  const [condition2, setCondition2] = useState(false);
  const [condition3, setCondition3] = useState(false);
  const [condition4, setCondition4] = useState(false);
  const [condition5, setCondition5] = useState(false);
  const [condition6, setCondition6] = useState(false);
  const [name, setName] = useState(false);
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

  const handleNameInput = (event) => {
    const nameInput = document.getElementById("name");
    const resultDiv1 = document.getElementById("result1");
    const resultDiv2 = document.getElementById("gauge");
    const resultDiv3 = document.getElementById("check1");
    if (nameInput.value.trim() !== "") {
      nameInput.style.backgroundColor = "#FFF";
      resultDiv1.style.display = "block";
      setName("name");
      resultDiv3.style.display = "block";
      resultDiv2.style.width = "114px";
      handleInitialNameChange()
    } else {
      resultDiv3.style.display = "none";
    }
  };

  const handleSeasonButtonClick = (season) => {
    const nameInput = document.getElementById("season");
    const nameInput2 = document.getElementById("chooseSeason");
    const resultDiv1 = document.getElementById("result2");
    const resultDiv2 = document.getElementById("gauge");
    const resultDiv3 = document.getElementById("result1-1");
    const resultDiv4 = document.getElementById("check2-2");
    const resultDiv5 = document.getElementById("check2-3");
    setChooseSeason(season); // 선택한 계절을 상태에 저장
    resultDiv1.style.display = "block";
    if (resultDiv2.style.width < "171px") {
      resultDiv2.style.width = "171px";
    }
    resultDiv3.style.display = "none";
    if (resultDiv5.style.display = "none") {
      resultDiv4.style.display = "none";
      resultDiv5.style.display = "block";
    }else{
      return
    }
    nameInput.className = "l5-1";
    nameInput2.style.position='relative';
    nameInput2.style.top='10%';
    nameInput2.style.left='-45%';
  };

  const handleShowSeasonButton = (event) => {
    const nameInput = document.getElementById("season");
    const resultDiv = document.getElementById("result1-1");
    const resultDiv2 = document.getElementById("check2-1");
    const resultDiv3 = document.getElementById("check2-2");
    const resultDiv4 = document.getElementById("check2-3");
    resultDiv.style.display = "block";
    nameInput.className = "l21-1";
    if (resultDiv4.style.display = "none") {
      resultDiv2.style.display = "none";
      resultDiv3.style.display = "block";
    }else{
      return
    }
  };

  const handleShowTextbox = (evant) => {
    const nameInput = document.getElementById("day");
    const nameInput2 = document.getElementById("chooseDay");
    const resultDiv1 = document.getElementById("result3-1");
    const resultDiv2 = document.getElementById("check4");
    const resultDiv3 = document.getElementById("result4");
    const resultDiv4 = document.getElementById("gauge");
    const resultDiv5 = document.getElementById("check4-1");
    const resultDiv6 = document.getElementById("check4-2");
    const resultDiv7 = document.getElementById("check4-3");
    if (resultDiv1.style.display == "none") {
      resultDiv1.style.display = "block";
      if (resultDiv7.style.display = "none") {
        resultDiv5.style.display = "none";
        resultDiv6.style.display = "block";
      }else{
        return
      }
      toggleBodyOverflow(showThirdTextbox);
      nameInput.className = "l21-1"
    } else {
      resultDiv1.style.display = "none";
      if (resultDiv7.style.display = "none") {
        resultDiv6.style.display = "none";
        resultDiv7.style.display = "block";
      }else{
        return
      }
      resultDiv3.style.display = "block";
      nameInput.className = "l5-1"
      nameInput2.style.position='relative';
      nameInput2.style.top='10%';
      nameInput2.style.left='-35%';
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
    const resultDiv2 = document.getElementById("check5-1");
    const resultDiv3 = document.getElementById("check5-2");
    const resultDiv4 = document.getElementById("check5-3");
    resultDiv.style.display = "block";
    nameInput.className = "l21-1"
    if (resultDiv4.style.display = "none") {
      resultDiv2.style.display = "none";
      resultDiv3.style.display = "block";
    }else{
      return
    }
  };

  const handleImportButtonClick = (evant) => {
    const nameInput = document.getElementById("import");
    const nameInput2 = document.getElementById("chooseImport");
    const resultDiv1 = document.getElementById("result5");
    const resultDiv2 = document.getElementById("gauge");
    const resultDiv3 = document.getElementById("result4-1");
    const resultDiv4 = document.getElementById("check5-2");
    const resultDiv5 = document.getElementById("check5-3");
    setChooseImport(evant); // 선택한 계절을 상태에 저장
    setShowThirdTextbox(true);
    nameInput.className = "l5-1"
    nameInput2.style.position='relative';
    nameInput2.style.top='10%';
    nameInput2.style.left='-42%';
    resultDiv1.style.display = "block";
    resultDiv2.style.width = "342px";
    resultDiv3.style.display = "none";
    if (resultDiv5.style.display = "none") {
      resultDiv4.style.display = "none";
      resultDiv5.style.display = "block";
    }else{
      return
    }
  };

  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");
  const [inputValue5, setInputValue5] = useState("");
  const [inputValue6, setInputValue6] = useState("");

  const handleShowFourNumber = () => {
    const nameInput = document.getElementById("number");
    const nameInput2 = document.getElementById("chooseNumber");
    const resultDiv = document.getElementById("result2-1");
    const resultDiv2 = document.getElementById("result3");
    const resultDiv3 = document.getElementById("gauge");
    const resultDiv4 = document.getElementById("check3-1");
    const resultDiv5 = document.getElementById("check3-2");
    const resultDiv6 = document.getElementById("check3-3");
    if (resultDiv.style.display == "block") {
      if (input1 != "" || input2 != "" || input3 != "" || input4 != "") {
        resultDiv.style.display = "none";
        if (resultDiv6.style.display = "none") {
          resultDiv5.style.display = "none";
          resultDiv6.style.display = "block";
        }else{
          return
        }
        setChooseNumber(input1 + input2 + input3 + input4);
        resultDiv2.style.display = "block";
        nameInput.className = "l5-1"
        nameInput2.style.position='relative';
        nameInput2.style.top='10%';
        nameInput2.style.left='-40%';
        if (resultDiv3.style.width < "228px") {
          resultDiv3.style.width = "228px";
        }
      }
    } else {
      nameInput.className = "l21-1"
      if (resultDiv6.style.display = "none") {
        resultDiv4.style.display = "none";
        resultDiv5.style.display = "block";
      }else{
        return
      }
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
    Month: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
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

  const handleOverMouse = (id) => {
    const resultDiv = document.getElementById(id);
    resultDiv.className = "l11-1";
  };
  const handleLeaveMouse = (id) => {
    const resultDiv = document.getElementById(id);
    resultDiv.className = "l10-1";
  };
  const handleNext = () => {
    navigate("/makesticker");
  };
  const handleInitialNameChange = () => {
    const nameInput = document.getElementById("name");
    dispatch(setInitialName(nameInput.value));
  };
  const handleInitialSeasonChange = () => {
    dispatch(setInitialSeason(chooseSeason));
  };
  const handleInitialNumberChange = () => {
    dispatch(setInitialNumber(chooseNumber));
  };
  const handleInitialDayChange = () => {
    dispatch(setInitialDay(chooseDay));
  };
  const handleInitialImportChange = () => {
    dispatch(setInitialImport(chooseImport));
  };
  

  return (
    <div className="BackgroundWrap">
      <div className="Background">
        <div className="l20-1" style={{ position: "relative" }}>
          <div className="l17-1">
            <div style={{width:'342px', height:'6px',position:'absolute',top:'40px'}}>
              <div className="l1-1"></div>
              <div className="l2-1" id="gauge"></div>
            </div>
            <div style={{width:'320px',height:'120px', position:'absolute',top:'76px',left:'3%',display:'flex',flexWrap: 'wrap'}}>
            <div className="l3-1" style={{position:'relative',left:'1%'}}>
              FACETICKER에서
            </div>
            <div className="l3-1">
              사용할 프로필 포스터 정보를
            </div>
            <div className="l3-1" style={{position:'relative',left:'0%'}}>
              등록해주세요.
            </div>
            </div>
          </div>
          <div style={{ width: "342px" }}>
            <div className="l16-1">
              <div style={{ padding: "10px 0 0 0" }}>
                <input
                  className="l5-1"
                  type="text"
                  id="name"
                  name="name"
                  minLength="2"
                  maxLength="15"
                  placeholder="닉네임 (최대 15자)"
                  style={{ width: "335px" }}
                  onInput={handleNameInput}
                />
                <img
                  src={check}
                  id="check1"
                  className="l15-1"
                  style={{ display:'none' , left: "88%", top: "-55px" }}
                ></img>
              </div>
              <div
                id="result1"
                style={{ display: "none", padding: "0 0 30px 0" }}
              >
                <button
                  id="season"
                  name="season"
                  className="l5-1"
                  onClick={() => handleShowSeasonButton()}
                >
                  <p id="chooseSeason" style={{position:'relative',left:'-10%',top:'0%'}}>
                    {chooseSeason || "좋아하는 계절을 선택하세요"}
                  </p>
                  <img src={down} id="check2-1" className="l15-1"></img>
                  <img src={up} id="check2-2" className="l15-1" style={{top:'-50%', display:'none'}}></img>
                  <img src={check} id="check2-3" className="l15-1" style={{top:'-50%', display:'none'}}></img>
                </button>
                <div
                  id="result1-1"
                  style={{ display: "none" }}
                  className="l7-1"
                >
                  <button
                    className="l8-1"
                    id="spring"
                    name="spring"
                    onClick={() => handleSeasonButtonClick("봄")}
                  >
                  
                    <p>봄</p>
                  </button>
                  <button
                    className="l8-1"
                    id="summer"
                    name="summer"
                    onClick={() => handleSeasonButtonClick("여름")}
                  >
                    <p>여름</p>
                  </button>
                  <button
                    className="l8-1"
                    id="autumn"
                    name="autumn"
                    onClick={() => handleSeasonButtonClick("가을")}
                  >
                    <p>가을</p>
                  </button>
                  <button
                    className="l8-1"
                    id="winter"
                    name="winter"
                    onClick={() => handleSeasonButtonClick("겨울")}
                  >
                    <p>겨울</p>
                  </button>
                </div>
              </div>
              <div
                id="result2"
                style={{ display: "none", padding: "0 0 30px 0" }}
              >
                <button
                  id="number"
                  name="number"
                  className="l5-1"
                  onClick={handleShowFourNumber}
                >
                  <p id="chooseNumber" style={{position:'relative',left:'-25%',top:'0%'}}>{chooseNumber || "좋아하는 숫자는?"}</p>
                  <img src={down} id="check3-1" className="l15-1"></img>
                  <img src={up} id="check3-2" className="l15-1" style={{top:'-50%', display:'none'}}></img>
                  <img src={check} id="check3-3" className="l15-1" style={{top:'-50%', display:'none'}}></img>
                </button>
                <div
                  id="result2-1"
                  className="l7-1"
                  style={{ display: "none" }}
                >
                  <input
                    ref={button1Ref}
                    value={input1}
                    className="l18-1"
                    onChange={handleInput1Change}
                    onInput={(e) => {
                      if (e.target.value.length > e.target.maxLength)
                        e.target.value = e.target.value.slice(
                          0,
                          e.target.maxLength
                        );
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
                    className="l18-1"
                    onChange={handleInput2Change}
                    onInput={(e) => {
                      if (e.target.value.length > e.target.maxLength)
                        e.target.value = e.target.value.slice(
                          0,
                          e.target.maxLength
                        );
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
                    className="l18-1"
                    onChange={handleInput3Change}
                    onInput={(e) => {
                      if (e.target.value.length > e.target.maxLength)
                        e.target.value = e.target.value.slice(
                          0,
                          e.target.maxLength
                        );
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
                    className="l18-1"
                    onChange={handleInput4Change}
                    onInput={(e) => {
                      if (e.target.value.length > e.target.maxLength)
                        e.target.value = e.target.value.slice(
                          0,
                          e.target.maxLength
                        );
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
                  padding: "0 0 30px 0",
                }}
              >
                <button
                  id="day"
                  name="day"
                  className="l5-1"
                  onClick={handleShowTextbox}
                >
                  <p id="chooseDay" style={{position:'relative',left:'-13%',top:'0%'}}>{chooseDay || "본인에게 의미있는 날은?"}</p>
                  <img src={down} id="check4-1" className="l15-1"></img>
                  <img src={up} id="check4-2" className="l15-1" style={{top:'-50%', display:'none'}}></img>
                  <img src={check} id="check4-3" className="l15-1" style={{top:'-50%', display:'none'}}></img>
                </button>
                <div
                  id="result3-1"
                  className="l22-1"
                  style={{ display: "none", height: "200px" }}
                >
                  <Picker
                    ref={pickerRef}
                    optionGroups={optionGroups}
                    valueGroups={valueGroups}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div
                id="result4"
                style={{ display: "none", padding: "0 0 30px 0" }}
              >
                <button
                  id="import"
                  name="import"
                  className="l5-1"
                  onClick={handleShowImport}
                >
                  <p id="chooseImport" style={{position:'relative',left:'-20%',top:'0%'}}>
                    {chooseImport || "내게 더 중요한 것은?"}
                  </p>
                  <img src={down} id="check5-1" className="l15-1"></img>
                  <img src={up} id="check5-2" className="l15-1" style={{top:'-50%', display:'none'}}></img>
                  <img src={check} id="check5-3" className="l15-1" style={{top:'-50%', display:'none'}}></img>
                </button>
                <div
                  id="result4-1"
                  style={{ display: "none" }}
                  className="l7-1"
                >
                  <div>
                    <button
                      id="love"
                      name="love"
                      className="l10-1"
                      onClick={() => handleImportButtonClick("사랑")}
                      onMouseOver={() => handleOverMouse("love")}
                      onMouseLeave={() => handleLeaveMouse("love")}
                    >
                      <p>{"사랑"}</p>
                    </button>
                  </div>
                  <div>
                    <button
                      id="friend"
                      name="friend"
                      className="l10-1"
                      onClick={() => handleImportButtonClick("우정")}
                      onMouseOver={() => handleOverMouse("friend")}
                      onMouseLeave={() => handleLeaveMouse("friend")}
                    >
                      <p>{"우정"}</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="result5"
              style={{
                display: showInputButton ? "block" : "none",
                position:'relative', left:'6%'
              }}
            >
              <div className="l19-1" />
              <div>
                <button onClick={handleNext} id="set_sticker" className="l6-1">
                  <p>스티커 만들기</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InitialSurvey;
