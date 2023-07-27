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
  height: 20vw;
  width: 20vw;
  position: absolute;
  right: 7vw;
  top: calc(var(--vh, 1vh) * 26);
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
  background-color: pink;
  padding-top: 10px;
  display: flex;
  position: relative;
  display: flex;
`;

const InputImg = styled.img`
  position: absolute;
  height: 150px;
  width: 350px;
  display: flex;
  left: 18px;
`;

const Input = styled.input`
  display: flex;
  position: absolute;
  left: 25px;
  width: 80%;
  height: 80%;
  top: -2%;
  text-align: center;
  background-color: transparent;
  border: none;
  outline: none;
`;

//${(props) => props.height}

export function StickerName() {
  const [stickerSize, setStickerSize] = useState("200px");
  const [Margin, setMargin] = useState("0%");
  const [HostImgurl, setHostImg] = useState("");
  const [clickname, setClickname] = useState(false);
  const [inputheight, setInputheight] = useState("30%");
  const handleClickInput = () => {
    setStickerSize("50px");
    setMargin("50%");
    setClickname(true);
    setInputheight("80%");
  };

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
            <Text1>스티커가 완성되었어요</Text1>
            <Text2>스티커 네임을 작성해주세요.</Text2>
          </TextWrap>
        </Middle>
        {clickname && <CheckIcon src="https://i.ibb.co/PrmpgLr/Group-74.png" />}

        <BottomWrap>
          <Bottom>
            <ImgWrap>
              <HostImg size={stickerSize} style={style} src={HostImgurl} />
            </ImgWrap>

            <InputWrap height={inputheight} onClick={handleClickInput}>
              <InputImg
                height={inputheight}
                src="https://i.ibb.co/B4Y5jgG/Group-69.png"
              />
              <Input placeholder="스티커 네임 입력 (15자 이내)"></Input>
            </InputWrap>
          </Bottom>
        </BottomWrap>
      </Background>
    </BackgroundWrap>
  );
}

export default StickerName;
