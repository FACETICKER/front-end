import styled from "styled-components";
import "../font/font.css";
import { useState, useEffect } from "react";
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
  justify-content: center;
  align-items: center;
  display-direction: column;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.25);
  height: 80%;
  width: 85%;
  background-color: pink;
`;
const HostImg = styled.img`
  max-width: 50px;
`;
const CheckIcon = styled.img`
  height: 20vw;
  width: 20vw;
  position: absolute;
  right: 7vw;
  top: calc(var(--vh, 1vh) * 26);
  z-index: 1;
`;
const ImgWrap = styled.div`
  max-height: 10%;
  padding-top: 10px;
  justify-content: center;
  align-item: center;
  display: flex;
  z-index: 1;
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
  width: 80%;

  display: flex;
`;

const Input = styled.input`
  display: flex;
  position: absolute;
  width: 80%;
  height: 20%;
  top: ${(props) => props.top};
  text-align: center;
  background-color: transparent;
  border: none;
  outline: none;
`;

const style = {
  margin: "auto",
};

//${(props) => props.height}

export function StickerLetter() {
  const [stickerShow, setStickerShow] = useState(true);
  const [Margin, setMargin] = useState("0%");
  const [HostImgurl, setHostImg] = useState("");
  const [clickname, setClickname] = useState(false);
  const [inputheight, setInputheight] = useState("30%");
  const [inputTop, setInputTop] = useState("-2%");
  const [nicknameValue, setNicknameValue] = useState("");

  //입력 누르면 변하는 것들
  const handleClickInput = () => {
    setStickerShow(false);
    setMargin("50%");
    setClickname(true);
    setInputheight("80%");
    setInputTop("-25%");
  };

  //host 이미지 url 받아오기
  useEffect(() => {
    fetch("http://localhost:3020/user/1")
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
    console.log(event.target.value);
  };

  //닉네임 입력하고 다음 아이콘 누르면 서버에 전송됨
  const handleNicknameSubmit = () => {
    fetch("http://localhost:3020/user/1", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nickname: nicknameValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("성공", data);
      })
      .catch((error) => {
        console.error("실패", error);
      });
  };

  //서버에서 닉네임 값 받아오기
  useEffect(() => {
    fetch("http://localhost:3020/user/1")
      .then((response) => response.json())
      .then((data) => {
        if (data.nickname) {
          setNicknameValue(data.nickname);
        }
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
              <img
                style={style}
                src="https://i.ibb.co/rdqkHHs/arrow-left.png"
                alt="setting-icon"
              />
            </HeaderIcon>
          </Header>
        </HeaderWrap>
        <Middle>
          <TextWrap>
            <Text1>방문록을 남기시겠어요?</Text1>
            <Text2>미입력시 스티커만 기록됩니다.</Text2>
          </TextWrap>
        </Middle>
        {clickname && (
          <CheckIcon
            onClick={handleNicknameSubmit}
            src="https://i.ibb.co/PrmpgLr/Group-74.png"
          />
        )}

        <BottomWrap>
          <Bottom>
            <Wrap>
              <InputImg src="https://i.ibb.co/tMVcvBC/Post-it-4-1.png" />
              <Input placeholder="여기에 입력하세요."></Input>

              <HostImg src={HostImgurl} />
            </Wrap>
          </Bottom>
        </BottomWrap>
      </Background>
    </BackgroundWrap>
  );
}

export default StickerLetter;
