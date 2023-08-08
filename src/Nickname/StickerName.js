import styled from "styled-components";
import "../font/font.css";
import { useState, useEffect } from "react";

import { NicknamePageSlice } from "./NicknamePageSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
//var(--vh, 1vh) : 1vh 생략 가능. --vh 안 되면 1vh
//브라우저 상단, 하단 메뉴 때문에 개발자 도구에서 보는 뷰포트 높이와 다름
//현재 뷰포트 높이 가져와서 쓰기(App.js App함수 return 위에 꼭 함수 추가해주기)
/*
function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
 */

//BackgroundWrap : 가로 길어졌을 때 Background는 고정. 나머지 영역에 보이게 할 색/이미지 설정
const BackgroundWrap = styled.div`
  background: linear-gradient(180deg, #ffd25d 0%, #ff984b 100%);
`;
//Background : 모바일로 보이는 영역
const Background = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  max-width: 37.5rem;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  background: white;
`;

const HeaderWrap = styled.div`
  height: 10%;
  justify-content: center;
  align-item: center;
  display: flex;
  background-color: white;
  border: none;
`;
const Header = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  margin: auto;
  flex-direction: row;
  justify-content: left;
`;
const HeaderIcon = styled.div`
  width: 20%;
  justify-content: center;
  align-item: center;
  display: flex;
`;

const style = {
  margin: "auto",
};

const Middle = styled.div`
  height: 20%;
  justify-content: center;
  align-item: center;
  display: flex;
  background-color: #ffd25e;
  border: 0px;
`;
const TextWrap = styled.div`
  flex-direction: column;
  display: flex;
  border-bottom-right-radius: 50px;
  background-color: white;
  justify-content: center;
  align-item: center;
  height: 100%;
  width: 100%;
  padding-left: 8%;
`;

const Text1 = styled.div`
  color: #191919;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 128.571% */
`;

const Text2 = styled.div`
  color: rgba(25, 25, 25, 0.8);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
`;

const BottomWrap = styled.div`
  background-color: white;
  height: 70%;
  justify-content: center;
  align-item: center;
  display: flex;
  border: 0px;
`;

const Bottom = styled.div`
  background-color: #ffd25e;
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  border-top-left-radius: 50px;
  flex-direction: column;
`;
const HostImg = styled.img`
  max-width: ${(props) => props.size};
`;
const CheckIcon = styled.img`
  max-height: 60px;

  position: absolute;
  top: -30px;
  right: 20px;
  z-index: 1;
`;
const ImgWrap = styled.div`
  max-height: 50%;
  padding-top: 10px;
  justify-content: center;
  align-item: center;
  display: flex;
`;

const InputWrap = styled.div`
  height: ${(props) => props.height};
  justify-content: center;

  padding-top: 30px;
  display: flex;
  position: relative;
  display: flex;
`;

const InputImg = styled.img`
  position: absolute;
  height: 150px;
  width: 80%;
  display: flex;
`;

const Input = styled.input`
  display: flex;
  position: absolute;
  width: 80%;
  height: 80%;
  top: ${(props) => props.top};
  text-align: center;
  background-color: transparent;
  border: none;
  color: #191919;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 140% */
  outline: none;
`;

//${(props) => props.height}

export function StickerName() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [stickerSize, setStickerSize] = useState("200px");
  const [Margin, setMargin] = useState("0%");
  const [HostImgurl, setHostImg] = useState("");
  const [clickname, setClickname] = useState(false);
  const [inputheight, setInputheight] = useState("30%");
  const [inputTop, setInputTop] = useState("-2%");
  const [nicknameValue, setNicknameValue] = useState("");

  //입력 누르면 변하는 것들
  const handleClickInput = () => {
    setStickerSize("50px");
    setMargin("50%");
    setClickname(true);
    setInputheight("80%");
    setInputTop("-25%");
  };
  //처음 back은 누르면 이전 페이지
  const handleFirstBack = () => {
    navigate("/makesticker");
  };
  //이전 누르면 state 이전값으로 바뀜
  const handleSecondBack = () => {
    setStickerSize("200px");
    setMargin("0%");
    setClickname(false);
    setInputheight("30%");
    setInputTop("-2%");
  };

  //host 이미지 url 받아오기
  useEffect(() => {
    fetch("http://localhost:3011/user/1")
      .then((response) => response.json())
      .then((data) => {
        if (data.url) {
          setHostImg(data.url);
        }
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);

  //닉네임 저장

  const saveNickname = (event) => {
    setNicknameValue(event.target.value);
  };

  const headers = {
    "x-access-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VyX2VtYWlsIjoic3UxMGppbjExQGhhbm1haWwubmV0IiwiaWF0IjoxNjkxMjQzNDY2LCJleHAiOjE2OTEyNDcwNjZ9.Wm3t2Fcwy2Q-lt_iIjTzqkFUTBUg_be3KQy2whDpl8U",
    "Content-Type": "application/json",
  };

  //닉네임 입력하고 다음 아이콘 누르면 서버에 전송됨
  const handleNicknameSubmit = () => {
    fetch("https://faceticker.site/app/3/sticker/message?type=visitor", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ nickname: nicknameValue }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("성공", data);
      })
      .catch((error) => {
        console.error("실패", error);
      });
    navigate("/stickerletter"); //letter로 페이지 전환 */
  };

  /*   //서버에서 닉네임 값 받아오기
  useEffect(() => {
    fetch("https://faceticker.site/app/:user_id/sticker/message?type=visitor")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setNicknameValue(data);
        }
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []); */

  return (
    <BackgroundWrap>
      <Background>
        <HeaderWrap>
          <Header>
            <HeaderIcon>
              {!clickname && (
                <img
                  onClick={handleFirstBack}
                  style={style}
                  src="https://i.ibb.co/rdqkHHs/arrow-left.png"
                  alt="setting-icon"
                />
              )}
              {clickname && (
                <img
                  onClick={handleSecondBack}
                  style={style}
                  src="https://i.ibb.co/rdqkHHs/arrow-left.png"
                  alt="setting-icon"
                />
              )}
            </HeaderIcon>
          </Header>
        </HeaderWrap>
        <Middle>
          <TextWrap>
            <Text1>스티커가 완성되었어요</Text1>
            <Text2>스티커 네임을 작성해주세요.</Text2>
          </TextWrap>
        </Middle>

        <BottomWrap>
          <Bottom>
            {clickname && (
              <CheckIcon
                onClick={handleNicknameSubmit}
                src="https://i.ibb.co/PrmpgLr/Group-74.png"
              />
            )}
            <ImgWrap>
              <HostImg size={stickerSize} style={style} src={HostImgurl} />
            </ImgWrap>

            <InputWrap height={inputheight} onClick={handleClickInput}>
              <InputImg
                height={inputheight}
                src="https://i.ibb.co/B4Y5jgG/Group-69.png"
              />
              <Input
                maxLength="15"
                onChange={saveNickname}
                value={nicknameValue}
                top={inputTop}
                placeholder={nicknameValue}
              ></Input>
            </InputWrap>
          </Bottom>
        </BottomWrap>
      </Background>
    </BackgroundWrap>
  );
}

export default StickerName;
