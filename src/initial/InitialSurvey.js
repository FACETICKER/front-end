import InitialSurveyList from "./InitialSurveyList.js";
import { setChangeInitial } from "../components/SettingSllice.js";
import Token from "../QnA/Token copy.js";
import check from "../img/InitialSurvey_img/icon _check circled outline_ (2).svg";
import down from "../img/InitialSurvey_img/chevron-down.png";
import up from "../img/InitialSurvey_img/chevron-up (1).png";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import "./InitialSurvey.css";
import ReactDOM from "react-dom";
import Picker from "react-mobile-picker-scroll";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setInitialName,
  setInitialSeason,
  setInitialNumber,
  setInitialDay,
  setInitialImport,
} from "./InitialSurveyList.js"; // 경로는 실제 파일 경로에 맞게 수정해주세요
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>;


function InitialSurvey() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const InitialSurveyList = useSelector((state) => {
    return state.initialList;
  });
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
  const [inputValues, setInputValues] = useState([]);
  const [initialdata, setInitialdata] = useState(null);
  const [seasonCheck, setSeasonCheck] = useState("");
  const [numberCheck, setNumberCheck] = useState("");
  const [dateCheck, setDateCheck] = useState("");
  const [importCheck, setImportCheck] = useState("");
  const [Month, setMonth] = useState(false);
  const [Date, setDate] = useState(false);
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
  const changeinitial = useSelector((state) => state.setting.changeinitial);
  dispatch(setChangeInitial(true));

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
      handleInitialNameChange();
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
    setChooseSeason(season); // 선택한 계절을 상태에 저장
    handleInitialSeasonChange();
    setSeasonCheck(check);
    resultDiv1.style.display = "block";
    if (resultDiv2.style.width < "171px") {
      resultDiv2.style.width = "171px";
    }
    resultDiv3.style.display = "none";
    
    nameInput.className = "l5-1";
    nameInput2.style.position = "relative";
    nameInput2.style.top = "10%";
    nameInput2.style.left = "-45%";
  };

  const handleShowSeasonButton = (event) => {
    const nameInput = document.getElementById("season");
    const resultDiv = document.getElementById("result1-1");
    const resultDiv2 = document.getElementById("check2-1");
    const resultDiv3 = document.getElementById("check2-2");
    const resultDiv4 = document.getElementById("check2-3");
    resultDiv.style.display = "block";
    setSeasonCheck(up);
    nameInput.className = "l21-1";
    
  };

  const handleShowTextbox = (evant) => {
    const nameInput = document.getElementById("day");
    const nameInput2 = document.getElementById("chooseDay");
    const resultDiv1 = document.getElementById("result3-1");
    const resultDiv2 = document.getElementById("check4");
    const resultDiv3 = document.getElementById("result4");
    const resultDiv4 = document.getElementById("gauge");
    const resultDiv5 = document.getElementById("check4-1");
    if (resultDiv1.style.display == "none") {
      resultDiv1.style.display = "block";
      setDateCheck(up);
      toggleBodyOverflow(showThirdTextbox);
      nameInput.className = "l21-1";
    } else {
      resultDiv1.style.display = "none";
      resultDiv3.style.display = "block";
      nameInput.className = "l5-1";
      nameInput2.style.position = "relative";
      nameInput2.style.top = "8%";
      nameInput2.style.left = "-30%";
      setChooseDay(selectedValue["month"] + " " + selectedValue["day"]);
      setDateCheck(check);
      setMonth(valueGroups["Month"]);
      setDate(valueGroups["Days"]);
      handleInitialDayChange();
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
    resultDiv.style.display = "block";
    nameInput.className = "l21-1";
    setImportCheck(up);
  };

  const handleImportButtonClick = (evant) => {
    const nameInput = document.getElementById("import");
    const nameInput2 = document.getElementById("chooseImport");
    const resultDiv1 = document.getElementById("result5");
    const resultDiv2 = document.getElementById("gauge");
    const resultDiv3 = document.getElementById("result4-1")
    const resultDiv6 = document.getElementById("l16-1");
    setChooseImport(evant); // 선택한 계절을 상태에 저장
    setShowThirdTextbox(true);
    handleInitialImportChange();
    nameInput.className = "l5-1";
    nameInput2.style.position = "relative";
    nameInput2.style.top = "10%";
    nameInput2.style.left = "-42%";
    resultDiv1.style.display = "block";
    resultDiv2.style.width = "342px";
    resultDiv3.style.display = "none";
    resultDiv6.style.height = "380px";
    setImportCheck(check);
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

    if (resultDiv.style.display == "block") {
      if (input1 != "" || input2 != "" || input3 != "" || input4 != "") {
        if (input1==0) {
          if (input2==0) {
            if (input3==0){
              if (input4==0) {
                setChooseNumber("0000")
              } else{
                setChooseNumber("000"+input4)
              }
            }else{
              setChooseNumber("00"+input3+input4)
            }
          } else{
            setChooseNumber("0"+input2+input3+input4);
          }
        } else{
          setChooseNumber(parseInt(input1 + input2 + input3 + input4));
        }
        handleInitialNumberChange();
        setNumberCheck(check);
        resultDiv.style.display ="none";
        resultDiv2.style.display = "block";
        nameInput.className = "l5-1";
        nameInput2.style.position = "relative";
        nameInput2.style.top = "8%";
        nameInput2.style.left = "-42%";
        if (resultDiv3.style.width < "228px") {
          resultDiv3.style.width = "228px";
        }
      }
    } else {
      nameInput.className = "l21-1";
      nameInput2.style.left = "-25%";
      resultDiv.style.display = "block"; // 닫혀있는 경우 열기
      setNumberCheck(up);
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

  useEffect(() => {
    const springO = document.getElementById("봄");
    const summerO = document.getElementById("여름");
    const autumnO = document.getElementById("가을");
    const winterO = document.getElementById("겨울");
    const orangeSeason = document.getElementById(chooseSeason);
    if (chooseImport) {
      springO.style.backgroundColor="white";
    summerO.style.backgroundColor="white";
    autumnO.style.backgroundColor="white";
    winterO.style.backgroundColor="white";
    springO.style.color="#767676";
    summerO.style.color="#767676";
    autumnO.style.color="#767676";
    winterO.style.color="#767676";
    console.log(orangeSeason);
    orangeSeason.style.backgroundColor= "var(--unnamed, #FF6D00)";
    orangeSeason.style.color= "#FFF";
    }
  },[chooseSeason])
  useEffect(() => {
    if (chooseImport) {
      const sarang = document.getElementById("사랑");
      const wjung = document.getElementById("우정");
      const orangeImport = document.getElementById(chooseImport);
      sarang.style.backgroundColor="white";
      sarang.style.color="#767676";
      wjung.style.backgroundColor="white";
      wjung.style.color="#767676";
      orangeImport.style.backgroundColor= "var(--unnamed, #FF6D00)";
      orangeImport.style.color= "#FFF";
    }
  }, [chooseImport])


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

  useEffect(() => {
    console.log("Updated chooseSeason:", chooseSeason);
    handleInitialSeasonChange();
  }, [chooseSeason]);
  useEffect(() => {
    console.log("Updated chooseNumber:", chooseNumber);
    handleInitialNumberChange();
  }, [chooseNumber]);
  useEffect(() => {
    console.log("Updated chooseDay:", chooseDay);
    handleInitialDayChange();
  }, [chooseDay]);
  useEffect(() => {
    console.log("Updated chooseImport:", chooseImport);
    handleInitialImportChange();
  }, [chooseImport]);

  const handleNext = () => {
    dispatch(setInitialImport(chooseImport));
    console.log(InitialSurveyList);
    test1();
    if (method == "PATCH") {
      navigate(`/main/host/${user_id}`);
    } else{
      navigate("/makesticker");
    }
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
  console.log(initialdata);
  const user_id = Token()[0];
  const API =
    initialdata == null
      ? `http://app.faceticker.site/${user_id}/poster`
      : `http://app.faceticker.site/${user_id}/poster/patch`;

  const method = initialdata == null ? "POST" : "PATCH";
  const JWT = Token()[1];
  
  //get
  useEffect(() => {
    const nameInput = document.getElementById("name");
    const seasonInput = document.getElementById("chooseSeason");
    const opendate = document.getElementById("result3");
    const openImport = document.getElementById("result4");
    const closecheck1 = document.getElementById("check2-1");
    const closecheck2 = document.getElementById("check5-1");
    const numberState= document.getElementById("chooseNumber");
    const numberCheckDown = document.getElementById("check3-1");
    const numberCheckDone = document.getElementById("check3-3");
    const dateState= document.getElementById("chooseDay");
    const dayCheckDown = document.getElementById("check4-1");
    const dayCheckDone = document.getElementById("check4-3");
    fetch(`https://app.faceticker.site/${user_id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log("get 성공", data);
          setInitialdata(data.result.hostPoster[0]);
          nameInput.value = data.result.hostPoster[0].nickname;
          handleNameInput();
          if (data.result.hostPoster[0].q_season == "여름") {
            handleSeasonButtonClick("여름");
          } else if (data.result.hostPoster[0].q_season == "봄") {
            handleSeasonButtonClick("봄");
          } else if (data.result.hostPoster[0].q_season == "가을") {
            handleSeasonButtonClick("가을");
          } else if (data.result.hostPoster[0].q_season == "겨울") {
            handleSeasonButtonClick("겨울");
          }
          //handleShowFourNumber();
          setChooseNumber(data.result.hostPoster[0].q_number);
          setNumberCheck(check);
          numberState.style.top = "8%";
          numberState.style.left = "-42%";
          opendate.style.display = "block";
          setChooseDay(data.result.hostPoster[0].q_date);
          setDateCheck(check);
          dateState.style.top = "8%";
          dateState.style.left = "-30%";
          openImport.style.display = "block";
          if (data.result.hostPoster[0].q_important == "사랑") {
            handleImportButtonClick("사랑");
          } else if (data.result.hostPoster[0].q_important == "우정") {
            handleImportButtonClick("우정");
          }
          setImportCheck(check);
        }
      })
      .catch((error) => {
        console.error("get 오류 발생", error);
      });
  }, []);

  //post or patch
  const test1 = () => {
    const headers = {
      "x-access-token": JWT,
      "Content-Type": "application/json",
    };

    fetch(API, {
      method: method, // 또는 "POST", "PUT", "DELETE" 등 요청하려는 메소드에 따라 설정
      headers: headers,
      body: JSON.stringify({
        nickname: InitialSurveyList.Name_id,
        season: InitialSurveyList.Season_id,
        number: InitialSurveyList.Number_id,
        date: selectedValue["month"] + ", " + selectedValue["day"],
        important: InitialSurveyList.Import_id,
      }),
    })
      .then((response) => response.json()) // 서버에서 받은 응답을 JSON 형태로 파싱
      .then((data) => {
        console.log("data", {
          nickname: InitialSurveyList.Name_id,
          season: InitialSurveyList.Season_id,
          number: InitialSurveyList.Number_id,
          date: selectedValue["month"] + ", " + selectedValue["day"],
          important: InitialSurveyList.Import_id,
        });
        console.log("Post / patch 성공", data);
      })
      .catch((error) => {
        console.error("오류 발생", error); // 요청이 실패하면 에러를 콘솔에 출력
      });
  };
  

  useEffect(() => {
    const digits = chooseNumber.toString().split("").map(Number);
    setInputValues(digits);
  }, []);

  useEffect(() => {
    if (chooseNumber !== "" && !isNaN(parseInt(chooseNumber))) {
      setInput1(chooseNumber.toString()[0]);
      setInput2(chooseNumber.toString()[1]);
      setInput3(chooseNumber.toString()[2]);
      setInput4(chooseNumber.toString()[3]);
    } else {
      return;
    }
  }, [chooseNumber]);

  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  const days = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );

  const [selectedValue, setSelectedValue] = useState({
    month: months[0],
    day: days[0],
  });
  const handleValueChange = (key, value) => {
    setSelectedValue((prevValues) => ({ ...prevValues, [key]: value }));
  };

  useEffect(()=> {
    const postorpatch = document.getElementById("postorpatch");
    if (method == "PATCH") {
      postorpatch.textContent="프로필로 돌아가기";
    }
  }, [method])

  


  return (
    <div className="BackgroundWrap" style={{background: '#F8F8FA'}}>
      <div className="Background">
        <div className="l20-1" style={{ position: "relative" }}>
          <div className="l17-1">
            <div
              style={{
                width: "342px",
                height: "6px",
                position: "absolute",
                top: "40px",
              }}
            >
              <div className="l1-1"></div>
              <div className="l2-1" id="gauge"></div>
            </div>
            <div
              style={{
                width: "320px",
                height: "120px",
                position: "absolute",
                top: "76px",
                left: "6%",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <div
                className="l3-1"
                style={{ position: "relative", left: "1%" }}
              >
                FACETICKER에서
              </div>
              <div className="l3-1" style={{position:'relative',top:'-10%'}}>사용할 프로필 포스터 정보를</div>
              <div
                className="l3-1"
                style={{ position: "relative", left: "0%" ,top:'-20%'}}
              >
                등록해주세요.
              </div>
            </div>
          </div>
          <div style={{ width: "342px" }}>
            <div id="l16-1" className="l16-1">
              <div style={{ padding: "10px 0 0 0" }}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  minLength="2"
                  maxLength="7"
                  placeholder="닉네임 (최대 7자)"
                  style={{ width: "313px",
                  height: '70px',
                  flexShrink: '0',
                  border: '2px solid #FFF',
                  borderRadius: '20px',
                  boxShadow: '4px 4px 15px 0px rgba(0, 0, 0, 0.15)',
                  background: '#FFF',
                  position: 'relative',
                  left:'2%',
                  zIndex: '2',
                  color: '#191919',
                  fontFamily: 'Pretendard',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: '20px', /* 100% */}}
                  onInput={handleNameInput}
                />
                <img
                  src={check}
                  id="check1"
                  className="l15-1"
                  style={{ display: "none", left: "85%", top: "-50px" }}
                ></img>
              </div>
              <div
                id="result1"
                style={{ display: "none", padding: "0 0 20px 0" }}
              >
                <button
                  id="season"
                  name="season"
                  className="l5-1"
                  onClick={() => handleShowSeasonButton()}
                >
                  <p
                    id="chooseSeason"
                    style={{ position: "relative", left: "-10%", top: "0%" }}
                  >
                    {chooseSeason || "좋아하는 계절을 선택하세요"}
                  </p>
                  <img src={seasonCheck || down} id="check2-1" className="l15-1"></img>
                  <img
                    src={up}
                    id="check2-2"
                    className="l15-1"
                    style={{ top: "-50%", display: "none" }}
                  ></img>
                  <img
                    src={check}
                    id="check2-3"
                    className="l15-1"
                    style={{ top: "-50%", display: "none" }}
                  ></img>
                </button>
                <div
                  id="result1-1"
                  style={{ display: "none" }}
                  className="l7-1"
                >
                  <button
                    className="l8-1"
                    id="봄"
                    name="spring"
                    onClick={() => handleSeasonButtonClick("봄")}
                  >
                    <p style={{position:'relative',top:'-5px'}}>봄</p>
                  </button>
                  <button
                    className="l8-1"
                    id="여름"
                    name="summer"
                    onClick={() => handleSeasonButtonClick("여름")}
                  >
                    <p style={{position:'relative',top:'-5px'}}>여름</p>
                  </button>
                  <button
                    className="l8-1"
                    id="가을"
                    name="autumn"
                    onClick={() => handleSeasonButtonClick("가을")}
                  >
                    <p style={{position:'relative',top:'-5px'}}>가을</p>
                  </button>
                  <button
                    className="l8-1"
                    id="겨울"
                    name="winter"
                    onClick={() => handleSeasonButtonClick("겨울")}
                  >
                    <p style={{position:'relative',top:'-5px'}}>겨울</p>
                  </button>
                </div>
              </div>
              <div
                id="result2"
                style={{ display: "none", padding: "0 0 20px 0" }}
              >
                <button
                  id="number"
                  name="number"
                  className="l5-1"
                  onClick={handleShowFourNumber}
                >
                  <p
                    id="chooseNumber"
                    style={{ position: "relative", left: "-25%", top: "0%" }}
                  >
                    {chooseNumber || "좋아하는 숫자는?"}
                  </p>
                  <img src={numberCheck || down} id="check3-1" className="l15-1"></img>
                  <img
                    src={up}
                    id="check3-2"
                    className="l15-1"
                    style={{ top: "-50%", display: "none" }}
                  ></img>
                  <img
                    src={check}
                    id="check3-3"
                    className="l15-1"
                    style={{ top: "-50%", display: "none" }}
                  ></img>
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
                  padding: "0 0 20px 0",
                }}
              >
                <button
                  id="day"
                  name="day"
                  className="l5-1"
                  onClick={handleShowTextbox}
                >
                  <p
                    id="chooseDay"
                    style={{ position: "relative", left: "-13%", top: "0%" }}
                  >
                    {chooseDay || "본인에게 의미있는 날은?"}
                  </p>
                  <img src={dateCheck || down} id="check4-1" className="l15-1"></img>
                  <img
                    src={up}
                    id="check4-2"
                    className="l15-1"
                    style={{ top: "-50%", display: "none" }}
                  ></img>
                  <img
                    src={check}
                    id="check4-3"
                    className="l15-1"
                    style={{ top: "-50%", display: "none" }}
                  ></img>
                </button>
                <div
                  id="result3-1"
                  className="l22-1"
                  style={{ display: "none", height: "150px" }}
                >
                  <Picker
                  
                    optionGroups={{ month: months, day: days }}
                    valueGroups={selectedValue}
                    onChange={handleValueChange}
                    className="l24-1"
                    style={{
                      // Picker 컴포넌트의 스타일을 수정
                      ".picker-container .picker-highlight:after": {
                        backgroundColor: "blue", // picker-highlight의 배경색 변경
                        // 다른 스타일 속성들도 여기에 추가할 수 있음
                      },}}
                  />
                </div>
              </div>
              <div
                id="result4"
                style={{ display: "none", padding: "0 0 20px 0" }}
              >
                <button
                  id="import"
                  name="import"
                  className="l5-1"
                  onClick={handleShowImport}
                >
                  <p
                    id="chooseImport"
                    style={{ position: "relative", left: "-20%", top: "0%" }}
                  >
                    {chooseImport || "내게 더 중요한 것은?"}
                  </p>
                  <img src={importCheck || down} id="check5-1" className="l15-1"></img>
                  <img
                    src={up}
                    id="check5-2"
                    className="l15-1"
                    style={{ top: "-50%", display: "none" }}
                  ></img>
                  <img
                    src={check}
                    id="check5-3"
                    className="l15-1"
                    style={{ top: "-50%", display: "none" }}
                  ></img>
                </button>
                <div
                  id="result4-1"
                  style={{ display: "none" }}
                  className="l7-1"
                >
                  <div>
                    <button
                      id="사랑"
                      name="love"
                      className="l10-1"
                      onClick={() => handleImportButtonClick("사랑")}
                    >
                      <p>{"사랑"}</p>
                    </button>
                  </div>
                  <div>
                    <button
                      id="우정"
                      name="friend"
                      className="l10-1"
                      onClick={() => handleImportButtonClick("우정")}
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
                position: "relative",
                left: "6%",
              }}
            >
              <div className="l19-1" />
              <div>
                <button onClick={handleNext} id="set_sticker" className="l6-1">
                  <p id="postorpatch" style={{position:'relative',top:'-10%'}}>스티커 만들기</p>
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
