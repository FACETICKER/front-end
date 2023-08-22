import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "../font/font.css";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import backicon from "../img/Stickers_img/backIcon.png";
import post from "../img/Stickers_img/post.png";
import checkicon from "../img/Stickers_img/checkicon.png";
import container from "../img/Stickers_img/container.png";
import Idtoken from "../Stickers/Idtoken";
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

const Back = styled.img`
  max-width: 38%;
  height: auto;
  display: flex;
`;

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
  display: flex;
  height: 100%;
  width: 100%;
  border-top-left-radius: 50px;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  border-radius: 20px;
  background: #fff;
  display: flex;
  align-items: center;

  flex-direction: column;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.25);
  height: 90%;
  width: 85%;
`;
const HostImg = styled.img`
  max-width: 50px;
  display: flex;
  padding-top: 10px;
`;
const CheckIcon = styled.img`
  max-height: 60px;
  position: absolute;
  top: -50px;
  right: 20px;
  z-index: 1;
`;
const ImgWrap = styled.div`
  height: 70%;
  width: 85%;

  padding-top: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Wrap2 = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;

  justify-content: center;
`;

const Container = styled.img`
  height: 50%;
  max-width: 80%;
  padding-top: 30px;
`;

const InputImg = styled.img`
  display: flex;
  object-fit: cover;
  max-width: 80%;
  max-height: 90%;
`;
const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 280px;
  position: absolute;
  padding-top: ${(props) => props.height};
  display: flex;
`;
const Input = styled.textarea`
  text-align: center;
  height: 50%;
  width: 90%;
  resize: none;
  background-color: transparent;
  border: none;
  outline: none;
  z-index: 1;
  display: flex;
  color: #191919;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 166.667% */
  vertical-align: middle;
`;

const TotalWrap = styled.div`
  display: flex;
  position: relative;
  height: 90%;
  width: 100%;

  justify-content: center;
`;
const style = {
  margin: "auto",
};

//${(props) => props.height}

export function StickerLetter() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [HostImgurl, setHostImg] = useState("");
  const [firstBottom, setFirstBottom] = useState(true);
  const [letterValue, setLetterValue] = useState("");
  const [inputHeight, setInputHeight] = useState("20%");
  const [visitorSticker, setVisitorSticker] = useState(null);

  //방문자 스티커
  const imageUrl = useSelector((state) => state.capture.visitorimageUrl);
  //console.log("letter", imageUrl);
  //방문자 스티커 id
  const currentURL = window.location.href;
  const parts = currentURL.split("/");
  const visitorid = parseInt(parts[parts.length - 1]); //방문자가 가지고 온 호스트 ID
  //console.log("방문자 id", visitorid);

  //입력 누르면 변하는 것들
  const handleClickInput = () => {
    setFirstBottom(false);
    setInputHeight("10%");
  };
  //첫 번째 이전 버튼
  const handleFirstBack = () => {
    navigate(`/stickername/${visitorid}`); //nickname으로 페이지 전환
  };

  //두 번째 이전버튼
  const handleSecondBack = () => {
    setFirstBottom(true);
    setInputHeight("20%");
  };

  //방문록 저장
  const saveLetter = (event) => {
    setLetterValue(event.target.value);
  };
  // userId, 토큰, 방문자가 가지고 온  호스트Id 가져오기
  const hostid = useSelector((state) => state.login.hostid);

  const ID = hostid;

  //방문자 이미지 불러오기
  useEffect(() => {
    fetch(`http://app.faceticker.site/${ID}/sticker/visitor/${visitorid}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log("letter", data);

        const visitorImg = data.result.final_image_url;

        setVisitorSticker(visitorImg);
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);

  //방문록 입력하고 체크 아이콘 누르면 서버에 전송됨
  const handleLetterSubmit = () => {
    fetch(
      `https://app.faceticker.site/${ID}/sticker/visitor/message?id=${visitorid}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: letterValue }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log("성공", data);
      })
      .catch((error) => {
        console.error("실패", error);
      });

    navigate(`/put/${visitorid}`);
  };

  //서버에서 방문록 받아오기
  useEffect(() => {
    fetch(`http://app.faceticker.site/sticker/visitor/message?id=${visitorid}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log("성공2", data.result[0].message);
        setLetterValue(data.result[0].message);
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);

  return (
    <BackgroundWrap>
      <Background>
        <HeaderWrap>
          <Header>
            <HeaderIcon>
              {firstBottom && <Back onClick={handleFirstBack} src={backicon} />}
              {!firstBottom && (
                <Back onClick={handleSecondBack} src={backicon} />
              )}
            </HeaderIcon>
          </Header>
        </HeaderWrap>
        <Middle>
          <TextWrap>
            <Text1>방문록을 남기시겠어요?</Text1>
            <Text2>미입력시 스티커만 기록됩니다.</Text2>
          </TextWrap>
        </Middle>

        <BottomWrap>
          <Bottom>
            <TotalWrap>
              {firstBottom && (
                <Wrap>
                  <ImgWrap>
                    <InputImg src={post} />
                  </ImgWrap>

                  <HostImg src={visitorSticker} />
                </Wrap>
              )}
              <InputWrap height={inputHeight}>
                <Input
                  rows="1"
                  onChange={saveLetter}
                  value={letterValue}
                  onClick={handleClickInput}
                  placeholder="여기에 입력하세요."
                ></Input>
              </InputWrap>

              {!firstBottom && (
                <Wrap2>
                  <CheckIcon onClick={handleLetterSubmit} src={checkicon} />
                  <Container src={container} />
                </Wrap2>
              )}
            </TotalWrap>
          </Bottom>
        </BottomWrap>
      </Background>
    </BackgroundWrap>
  );
}

export default StickerLetter;
