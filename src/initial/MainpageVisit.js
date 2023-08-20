import InitialSurveyList from "./InitialSurveyList.js";
import Token from "../QnA/Token copy.js";
import NextLoginList, { update } from "./NextLoginList";
import message from "../img/MainpageVisit_img/ri_message-3-line.png";
import Vector from "../img/MainpageVisit_img/Group 157 1.png";
import threeboll from "../img/MainpageVisit_img/Group 77.svg";
import user from "../img/MainpageVisit_img/user.png";
import close from "../img/MainpageVisit_img/close-x.svg";
import normalSticker from "../img/MainpageHost_img/기본 캐릭 1.png";
import sticker from "../img/MainpageVisit_img/sticker.svg";
import recordpage from "../img/MainpageVisit_img/3users.svg";
import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageSlice from "../QnA/Slice/PageSlice";

import "./MainpageVisit.css";
import { useNavigate } from "react-router-dom";

import { setStickeris, setQuestionis } from "./NextLoginList.js"; // 경로는 실제 파일 경로에 맞게 수정해주세요
import { setGoMakesticker, setHostId } from "../login/LoginSlice.js";

function MainpageVisit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const NextLoginList = useSelector((state) => {
    return state.nextLoginList;
  });
  const [showFooter, setShowFooter] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [stickerInput, setStickerInput] = useState(false);
  const [stickerInput2, setStickerInput2] = useState(false);
  const [Korean, setKorean] = useState("");
  const [Chinese, setChinese] = useState("");
  const [Mean, setMean] = useState("");
  const [Season, setSeason] = useState("");
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [Day, setDay] = useState("");
  const [Message, setMessage] = useState("");

  //방문자가 가지고 온 호스트 아이디 추출
  const currentURL = window.location.href;
  const parts = currentURL.split("/");
  const hostID = parts[parts.length - 1]; //방문자가 가지고 온 호스트 ID
  console.log(hostID);
  //호스트 아이디 저장
  dispatch(setHostId(hostID));

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
    dispatch(PageSlice.actions.guest());
    navigate('/qna');
  };
  const handleMainHost = () => {
    navigate(`/main/host/`);
  };
  const handleVisitorsticker = () => {
    navigate(`/sticker/${hostID}`);
  };
  const [count1, setCount1] = useState(false);
  const [count2, setCount2] = useState(false);

  {
    /*const handleStickerLogin = () => {
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
*/
  }
  const handleSpring = () => {
    const resultDiv1 = document.getElementById("ifSpring");
    setSeason("SPR 봄 ING");
    resultDiv1.style.left="24%";
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

  const handleStickerLogin = () => {
    dispatch(setStickeris(true));
    setCount1(true);
  };

  useEffect(() => {
    if (count1) {
      dispatch(setQuestionis(false));
      dispatch(setStickeris(true));
      navigate("/");
    }
  }, [count1]);

  const handleQuestionLogin = () => {
    dispatch(setStickeris(false));
    dispatch(setQuestionis(true));
    setCount2(true);
  };
  useEffect(() => {
    if (count2) {
      navigate("/");
    }
  }, [count2]);

  const JWT = Token()[1];
  const [messagedata, setMessagedata] = useState(null);
  const [stickerdata,setStickerdata] =useState(null);

  const test1 = () => {
    const headers = {
      "x-access-token": JWT,
      "Content-Type": "application/json",
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
  };
  test1();

  useEffect(() => {
    fetch(`https://app.faceticker.site/${hostID}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log("성공", data.result.hostPoster[0]);
          setMessagedata(data.result.hostSticker[0].message);
          setChinese(data.result.hostPoster[0].chinese);
          setName(data.result.hostPoster[0].nickname);
          setMean(data.result.hostPoster[0].meaning);
          setKorean(data.result.hostPoster[0].pronunciation);
          setNumber(data.result.hostPoster[0].q_number);
          const handleSelleckSeason = () => {
            if (data.result.hostPoster[0].q_season === "봄") {
              handleSpring();
            } else if (data.result.hostPoster[0].q_season === "여름") {
              handleSummer();
            } else if (data.result.hostPoster[0].q_season === "가을") {
              handleAutumn();
            } else if (data.result.hostPoster[0].q_season === "겨울") {
              handleWinter();
            }
          };
          handleSelleckSeason();
          setDay(data.result.hostPoster[0].q_date);
          setStickerdata(data.result.hostSticker[0].final_image_url);
        }
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);

  const test2 = () => {
    const headers = {
      "Content-Type": "application/json",
    };

    fetch(`http://app.faceticker.site/${hostID}/sticker/message`, {
      method: "GET", // 또는 "POST", "PUT", "DELETE" 등 요청하려는 메소드에 따라 설정
      headers: headers,
    }) // 서버로 GET 요청을 보냄
      .then((response) => response.json()) // 서버에서 받은 응답을 JSON 형태로 파싱
      .then((data) => {
        console.log("성공", data.result[0].message);
        setMessage(data.result[0].message);
      })
      .catch((error) => {
        console.error("오류 발생", error); // 요청이 실패하면 에러를 콘솔에 출력
      });
  };
  test2();

  useEffect(() => {
    const messageCircle = document.getElementById("ment")
    console.log(messagedata);
    if (messagedata)   {
      messageCircle.style.display = "block";
    } else {
      messageCircle.style.display = "none";
    }
  },[messagedata])
  useEffect(() =>{
    const makeProfile = document.getElementById("makeprofile")
    if (Season=="") {
      console.log(1);
      makeProfile.style.display="block";
    } else {
      makeProfile.style.display="none";
    }
  },[Season])

  return (
    <div className="BackgroundWarp" style={{background: '#FEFAEF'}}>
      <div className="Background" style={{background: '#FEFAEF'}}>
        <div className="l25" style={{ position: "relative" }}>
          <header
            style={{
              float: "down",
              width:'320px',
              height: "70px",
              position: "relative",
              top: "0px",
              display:'flex',
              justifyContent: 'space-between'
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
              onClick={handleQna}
            >
              <button
                style={{ border: "none", backgroundColor: "transparent" }}
                onClick={handleQna}
              >
                <img src={message} className="l1" alt="message" />
              </button>
            </div>
          </header>
          <div
            style={{
              width: "335px",
              height: "125%",
              position: "relative",
              top: "15px",  
              border: "3px solid var(--unnamed, #12151C)",
              borderRadius: "20px",
              boxShadow: "2px 2px 10px 0px rgba(0, 0, 0, 0.25",
            }}
          >
            <div
              id="PrtSc"
              style={{
                width: "310px",
                height: "87%",
                position: "relative",
                left: "4%",
              }}
            >
              <div name="inyellow" className="l2-2" style={{ clear: "left" }}>
                <div
                  style={{
                    width:'250px',
                    height: '300px',
                    position: "absolute",
                    display:'flex',
                    left: "50%",
                    top: "80%",
                    transform: 'translate(-50%, -50%)',
                    zIndex: "3",
                  }}
                  name="사진" id="Photo"
                >
                  <img id="Sticker" style={{width:'200px', height:'240px' ,position:'relative', margin:'0 auto'}} src={stickerdata || normalSticker} alt="Vector" />
                </div>
                <div >
                  <p id="ifSpring" className="l13-2">{Season || ""}</p>
                </div>
                <div id="ment" className="l22-2">
                  <div className="l23-2" style={{ zIndex: "2" }}>
                    <p id="" className="l3-2">
                      {messagedata || "어서옵쇼 다들 스티커 붙여주세요..!"}
                    </p>
                  </div>
                </div>
                <div style={{ width: "390px", height: "100px" }}>
                  <div style={{ float: "left" }} name="이름">
                    <p id="" className="l4-2">
                      {Name || ""}
                    </p>
                  </div>
                  <div style={{ float: "left" }} name="숫자">
                    <p id="" className="l5-2">
                      {Number || ""}
                    </p>
                  </div>
                  <div style={{ float: "left" }} name="날짜">
                    <p id="" className="l6-2" style={{ zIndex: "4" }}>
                      {Day || ""}
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="outyellow1"
                style={{
                  position: "absolute",
                  width: "338px",
                  height: "140px",
                  top: "73%",
                }}
              >
                <div name="사자성어">
                  <div style={{position:'relative',top:'20px',left:'2%'}}>
                    <div
                      className="l28-2"
                      style={{ backgroundColor: "#FF6D00" }}
                    ></div>
                    <div
                      className="l28-2"
                      style={{ backgroundColor: "#FFE14F" }}
                    ></div>
                    <div
                      className="l28-2"
                      style={{ backgroundColor: "#FEFAEF" }}
                    ></div>
                  </div>
                  <div className="l7-2">
                    <p id="">{Korean || ""}</p>
                  </div>
                </div>
                <div name="한자">
                  <p id="" className="l8-2">
                    {Chinese || ""}
                  </p>
                </div>
                <div name="뜻">
                  <p id="" className="l9-2">
                    {Mean || ""}
                  </p>
                </div>
              </div>
              <div
                id="outyellow2"
                style={{
                  position: "relative",
                  width: "338px",
                  height: "140px",
                  display: "none",
                }}
              >
                <div name="threeboll">
                  <div className="l28-2"></div>
                </div>
                <div name="프로필 생성 제안">
                  <p id="" className="ll6-2">
                    프로필이 아직 없다면
                  </p>
                </div>
                <div name="링크">
                  <p id="" className="l17-2">
                    <a onClick={toggleModal3} className="l18-2">
                      여기
                    </a>
                    를 클릭하세요
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div style={{ float: "left" }}>
                 
                {/*  <button
                  style={{
                    width: "20px",
                    height: "20px",
                    position: "relative",
                    top: "130px",
                  }}
                  onClick={handlePlusRecord}
                >
                  +1
                </button>
                <button
                  style={{
                    width: "20px",
                    height: "20px",
                    position: "relative",
                    top: "130px",
                  }}
                  onClick={handleMinusRecord}
                >
                  -1
                </button> */}
              </div>
              <Div style={{position:'absolute',top:'87%',left:'56%'}}>
                <button className="l10" onClick={handleVisitorsticker}>
                  <img src={recordpage} alt="recordpage" />
                </button>
                <button className="l10" onClick={handleNo}>
                  <img src={sticker} alt="sticker" />
                </button>
              </Div>

              {/* <div style={{ float: "left" }}>
                <button className="l10-2" onClick={handleLinkDownload}>
                  <img src={share} alt="share" />
                </button>
              </div> */}
              {/* <div>
                <button className="l10-2" onClick={handleDownload}>
                  <img src={download} alt="download" />
                </button>
              </div> */}
            </div>
            <div id='makeprofile' style={{position:'absolute', top:'73%', left:'25%', display:'none'}}>
            <div name="프로필 생성 제안">
                  <p id="" className="l28">
                    해당 유저가 아직
                  </p>
                </div>
                <div name="링크">
                  <p id="" className="l28" style={{position:'relative',left:'0px',top:'-20px'}}>
                    프로필을 작성하지 않았습니다.
                  </p>
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
            <div className="Modal" style={{zIndex:'100'}}>
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
                    YES
                  </button>
                </div>
              </div>
            </div>
          )}
          {showModal3 && (
            <div className="Modal" style={{zIndex:'100'}}>
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
                    YES
                  </button>
                </div>
              </div>
            </div>
          )}
          {showModal2 && (
            <div className="Modal" style={{zIndex:'1000'}}>
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
