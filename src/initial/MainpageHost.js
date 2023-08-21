import InitialSurveyList from "./InitialSurveyList.js";
import Token from "../QnA/Token copy.js";
import message from "../img/MainpageHost_img/ri_message-3-line (1).svg";
import share from "../img/MainpageHost_img/share.svg";
import download from "../img/MainpageHost_img/download.svg";
import Vector from "../img/MainpageHost_img/Group 157 1.png";
import threeboll from "../img/MainpageHost_img/Group 77.svg";
import normalSticker from "../img/MainpageHost_img/기본 캐릭 1.png";
import styled from "styled-components";
import setting from "../img/MainpageHost_img/gear-settings.svg";
import edit from "../img/MainpageHost_img/square-edit.svg";
import recordpage from "../img/MainpageHost_img/3users.svg";
import close from "../img/MainpageHost_img/close-x.svg";
import React, { useState, useEffect } from "react";
import PageSlice from "../QnA/Slice/PageSlice";
import html2canvas from "html2canvas";
import "./MainpageHost.css";
import ReactDOM from "react-dom";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import { setChangeSticker } from "../components/SettingSllice.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setInitialName,
  setInitialSeason,
  setInitialNumber,
  setInitialDay,
  setInitialImport,
  setInitialSetSticker,
  setInitialMessage,
  Season_id,
} from "./InitialSurveyList.js"; // 경로는 실제 파일 경로에 맞게 수정해주세요
import HostHeader from "../components/HostHeader.js";

const Div = styled.div`
  position: absolute;
  left: 30%;
`;

function MainpageHost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const InitialSurveyList = useSelector((state) => {
    return state.initialList;
  });
  const [showFooter, setShowFooter] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [chattingNumber, setChattingNumber] = useState(0);
  const [recordNumber, setRecordNumber] = useState(0);
  const [messageNumber, setMessageNumber] =useState(0);
  const [Korean, setKorean] = useState("");
  const [Chinese, setChinese] = useState("");
  const [Mean, setMean] = useState("");
  const [Season, setSeason] = useState("");
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [Day, setDay] = useState("");
  const [Message, setMessage] = useState("");
  const [count,setCount] = useState("");

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

  const toggleModal4 = () => {
    setShowModal4(!showModal4);
  };

  const [address2, setAddress2] = useState("");
  const [address3, setAddress3] = useState("");

  useEffect(() => {
    console.log("sdnvud");
    setAddress3(`http://www.faceticker.site/main/${address2}`);
  },[address2])
  const handleLinkDownload = async () => {
    const address = `http://www.faceticker.site/main/${user_id}`;
    try {
        await navigator.clipboard.writeText(address);
        alert("주소가 클립보드에 복사되었습니다.");
    } catch (err) {
        console.error("클립보드 복사 실패:", err); // 에러 객체의 이름이 err로 변경되었습니다.
        alert("클립보드 복사에 실패했습니다. 수동으로 복사해주세요.");
    }
  }
  const handleDownload2 = () => {
    const targetElement = document.getElementById("PrtSc"); // 캡처할 대상 div의 id
    if (targetElement) {
      html2canvas(targetElement).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "capture.png";
        link.click();
      });
    }
    alert("다운로드 성공");
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
    setChattingNumber((prevNumber1) => prevNumber1 + 1);
    const resultDiv1 = document.getElementById("countMessageDiv");
    resultDiv1.style.display = "block";
  };
  const handleMinusMessage = () => {
    const resultDiv1 = document.getElementById("countMessageDiv");
    if (chattingNumber <= 1) {
      setChattingNumber(0);
      resultDiv1.style.display = "none";
    } else {
      resultDiv1.style.display = "block";
      setChattingNumber((prevNumber1) => prevNumber1 - 1);
    }
  };



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

  useEffect(() => {
    const handleSelleckName = () => {
      setName(InitialSurveyList.Name_id);
    };
    handleSelleckName();
  }, []);
  useEffect(() => {
    const handleSelleckNumber = () => {
      setNumber(InitialSurveyList.Number_id);
    };
    handleSelleckNumber();
  }, []);
  useEffect(() => {
    const handleSelleckDay = () => {
      setDay(InitialSurveyList.Day_id);
    };
    handleSelleckDay();
  }, []);

  const handleNoneProfile = () => {
    const resultDiv1 = document.getElementById("ment");
    const resultDiv2 = document.getElementById("outyellow1");
    const resultDiv3 = document.getElementById("outyellow2");
    resultDiv1.style.display = "none";
    resultDiv3.style.display = "block";
    resultDiv2.style.display = "none";
    setSeason(" "); // 계절 초기화
    setName(" "); // 이름 초기화
    setNumber(" "); // 숫자 초기화
    setDay(" "); // 날짜 초기화
  };
  const handleHaveProfile = () => {
    const resultDiv1 = document.getElementById("ment");
    const resultDiv2 = document.getElementById("outyellow1");
    const resultDiv3 = document.getElementById("outyellow2");
    resultDiv1.style.display = "block";
    resultDiv2.style.display = "block";
    resultDiv3.style.display = "none";
    setSeason("WIN 겨울 TER");
    setName("홍길동");
    setNumber("#128");
    setDay("JUNE, 28");
  };
  const handleMakeSticker = () => {
    dispatch(setChangeSticker(true));
    navigate("/makesticker");
  };
  const handleInitial = () => {
    navigate("/initial");
  };
  const handleStickerLetter = () => {
    navigate("/status");
  };

  const handleQna = () => {
    dispatch(PageSlice.actions.host());
    navigate(`/qna`);
  };
  const handleHoststicker = () => {
    navigate(`/sticker/host/${user_id}`);
  };

  const JWT = Token()[1];
  const user_id = Token()[0];
  const [messagedata, setMessagedata] = useState(null);
  const [stickerdata, setStickerdata] = useState(null);
  const test2 = () => {
    const headers = {
      "x-access-token": JWT,
      "Content-Type": "application/json",
    };

    fetch(`http://app.faceticker.site/${user_id}/sticker/message`, {
      method: "GET", // 또는 "POST", "PUT", "DELETE" 등 요청하려는 메소드에 따라 설정
      headers: headers,
    }) // 서버로 GET 요청을 보냄
      .then((response) => response.json()) // 서버에서 받은 응답을 JSON 형태로 파싱
      .then((data) => {
        console.log("성공", data.result[0]);
      })
      .catch((error) => {
        console.error("오류 발생", error); // 요청이 실패하면 에러를 콘솔에 출력
      });
  };
  test2();
  useEffect(() => {
    fetch(`https://app.faceticker.site/${user_id}`);
    fetch(`https://app.faceticker.site/${user_id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log("성공", data.result);
          setRecordNumber(data.result.hostnewSticer[0].count.toString());
          setMessageNumber(data.result.howtnewQuestion[0].emptyanswer.toString());
          setMessagedata(data.result.hostSticker[0].message);
          setChinese(data.result.hostPoster[0].chinese);
          setName(data.result.hostPoster[0].nickname);
          setMean(data.result.hostPoster[0].meaning);
          setKorean(data.result.hostPoster[0].pronunciation);
          setNumber('#'+data.result.hostPoster[0].q_number);
          setDay(data.result.hostPoster[0].q_date);
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
          setAddress2(data.result.hostPoster[0].user_id);
          handleSelleckSeason();
          setStickerdata(data.result.hostSticker[0].final_image_url);
        }
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);
  useEffect(() => {
    const handleSelleckName = () => {
      setName(InitialSurveyList.Name_id);
    };
    handleSelleckName();
  }, []);
  useEffect(() => {
    const count = document.getElementById("countRecordDiv")
    if (recordNumber == "0") {
      count.style.display="none"; 
    } else{
      count.style.display="block";
    }
  }, [recordNumber]);
  useEffect(() => {
    const count = document.getElementById("countMessageDiv")
    if (messageNumber == "0") {
      count.style.display="none"; 
    } else {
      count.style.display="block";
    }
  }, [messageNumber]);
  useEffect(() => {
    const Sticker = document.getElementById("Sticker")
    const Photo = document.getElementById("Photo")
    if (Sticker.src == "http://localhost:3000/static/media/%EA%B8%B0%EB%B3%B8%20%EC%BA%90%EB%A6%AD%201.484d8e0ea830f8eeff94.png") {
      Sticker.style.width="60%";
      Sticker.style.height="60%"
      //Photo.style.top="48%";
      //Photo.style.left="15%";
    }else{
      return;
    }
  }, [stickerdata]);
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

  const handleBokSa = () => {
    window.navigator.clipboard.writeText(address3)
    alert("복사되었습니다.");
    }



  return (
    <div className="BackgroundWarp" style={{background: '#FEFAEF'}}>
      <div className="Background" style={{background: '#FEFAEF'}}>
        <div className="l29-2" style={{ position: "relative", background: '#FEFAEF' }}>
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
                onClick={toggleModal1}
              >
                <img
                  src={setting}
                  className="l1-2"
                  alt="setting"
                  onClick={toggleModal1}
                />
              </button>
            </div>
            <div style={{ float: "left" }}>
              <button
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                <p className="l12-2">FACETICKER</p>
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
            >
              <button
                style={{ border: "none", backgroundColor: "transparent" }}
                onClick={handleQna}
              >
                <img src={message} className="l1-2" alt="message" />
              </button>
              <div
              onClick={handleQna}
                  id="countMessageDiv"
                  className="l14-2"
                  style={{position:'absolute' , top: "-25%", left: "88%" ,zIndex:'1', display:'block'}}
                >
                  <p id="countRecord" className="l15-2">
                    {messageNumber || ""}
                  </p>
                </div> 
              {/*
              <button
                style={{
                  width: "20px",
                  height: "20px",
                  position: "relative",
                  left: "330px",
                }}
                onClick={handlePlusMessage}
              >
                +1
              </button>
              <button
                style={{
                  width: "20px",
                  height: "20px",
                  position: "relative",
                  left: "330px",
                }}
                onClick={handleMinusMessage}
              >
                -1
              </button>{" "}
              */}
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
              background: "white",
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
                    
                    position: "relative",
                    display:'flex',
                    left: "50%",
                    top: "80%",
                    transform: 'translate(-50%, -50%)',
                    zIndex: "3",
                    flexWrap: 'wrap',
                  }}
                  name="사진" id="Photo"
                >
                  <img id="Sticker" style={{width:'60%',position:'relative', bottom:'30px' , margin:'0 auto', zIndex:"3"}} src={stickerdata || normalSticker} alt="Vector" />
                  <div className="l30-2" style={{zIndex:"2"}}></div>
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
                    <a onClick={toggleModal3} className="l18-2" style={{zIndex:'10'}}>
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
              <Div style={{ position: "absolute", top: "87%", left: "34%" }}>
                <button className="l10-2" onClick={handleHoststicker}>
                  <img src={recordpage} alt="recordpage" />
                </button>
                <div
                  id="countRecordDiv"
                  className="l14-2"
                  style={{position:'absolute' , top: "9%", left: "29%" ,zIndex:'1', display:'block'}}
                >
                  <p id="countRecord" className="l15-2">
                    {recordNumber || ""}
                  </p>
                </div> 
                {/*<CopyToClipboard text={{address3}} onCopy={() => alert("클립보드에 복사되었습니다.")}>*/}
                <button className="l10-2" onClick={handleBokSa}>
                  <img src={share} alt="share" />
                </button>
                {/*</CopyToClipboard>*/}
                <button className="l10-2">
                  <img src={download} alt="download" />
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
            <div id='makeprofile' style={{position:'absolute', top:'75%', left:'26%', display:'none'}}>
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
          {showFooter && (
            <footer className="FixedFooter">
              <div>
                <button
                  id=""
                  name="cancel"
                  className="l11-2"
                  onClick={toggleFooter}
                >
                  <p>취소</p>
                </button>
              </div>
              <div>
                <button
                  id=""
                  name="resetting"
                  className="l11-2"
                  onClick={toggleModal1}
                >
                  <p>프로필 재설정</p>
                </button>
              </div>
            </footer>
          )}
          {showModal1 && (
            <div><div className="modal-overlay"></div>
            <div className="Modal" style={{ zIndex: "100" }} onRequestClose={toggleModal1}>
              <div
                style={{
                  width: "250px",
                  height: "52px",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={edit} />
              </div>
              <button
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  position: "absolute",
                  top: "3%",
                  left: "85%",
                }}
                name="close"
                onClick={toggleModal1}
              >
                <img src={close}></img>
              </button>
              <div
                style={{
                  padding: "24px 0 0 0",
                  width: "260px",
                  height: "250px",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <button className="l24-2" onClick={handleInitial}>
                  포스터 정보 수정
                </button>
                <button className="l24-2" onClick={handleMakeSticker}>
                  스티커 수정
                </button>
                <button className="l24-2" onClick={handleStickerLetter}>
                  상태메시지 수정
                </button>
              </div>
            </div></div>
          )}

          {showModal4 && (
            <div className="ModalContent">
              <div
                className="Close"
                src="https://i.ibb.co/Cw1y11J/close-x.png"
              />
              <img src="https://i.ibb.co/LNBGHHr/square-edit.png" />
              <div className="EditButtons">
                <div
                  className="EditButton"
                  src="https://i.ibb.co/7QPq765/Group-190.png"
                />
                <div
                  className="EditButton"
                  src="https://i.ibb.co/TMWMM0g/Group-191.png"
                />
                <div
                  className="EditButton"
                  src="https://i.ibb.co/Qkm8sPF/Group-192.png"
                />
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
            <div><div className="modal-overlay"></div>
            <div className="Modal" onRequestClose={toggleModal3}>
              <div>
                <div>
                  <div className="l26-2">
                    <p style={{ position: "relative", top: "-25px" }}>!</p>
                  </div>
                  <button
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  position: "absolute",
                  top: "3%",
                  left: "85%",
                }}
                name="close"
                onClick={toggleModal3}
              >
                <img onClick={toggleModal3} src={close}></img>
              </button>
                </div>
                <div style={{ clear: "left" }}>
                  <p className="l20-2">프로필을 입력하시겠어요?</p>
                  <p className="l21-2">프로필 정보 입력 페이지로 이동됩니다.</p>
                  <button onClick={handleInitial} className="l19-2">
                    <p  style={{ color: "white", fontSize: "16px" }}>확인</p>
                  </button>
                </div>
              </div>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainpageHost;
