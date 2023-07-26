import styled from "styled-components";
import "./font/font.css";
import { useState } from "react";
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

const Text = styled.div`
  color: #191919;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 150% */
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
  flex-direction: column;
`;

const CheckIcon = styled.img`
  height: 20vw;
  width: 20vw;
  position: absolute;
  right: 7vw;
  top: calc(var(--vh, 1vh) * 26);
`;
const ImgWrap = styled.div`
  height: 60%;
  justify-content: center;
  align-item: center;
  display: flex;
`;

const InputWrap = styled.div`
  height: 20%;
  justify-content: center;
  margin-top:  ${(props) => props.margin}
  display: flex;

`;

const Input = styled.input`
  display: flex;
  position: absolute;
  width: 60%;
  height: 13%;
  text-align: center;
  background-color: transparent;
  border: none;
  outline: none;
`;

export function StatusMessage() {
  const [hideImg, setHideImg] = useState(true);
  const [Margin, setMargin] = useState("0%");

  const handleClickInput = () => {
    setHideImg(false);
    setMargin("10%");
  };

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
            <Text>방문자들에게</Text>
            <Text>하고 싶은 말을 남겨보세요!</Text>
          </TextWrap>
        </Middle>
        {!hideImg && <CheckIcon src="https://i.ibb.co/PrmpgLr/Group-74.png" />}

        <BottomWrap>
          <Bottom>
            {hideImg && (
              <ImgWrap>
                <img
                  style={style}
                  src="https://i.ibb.co/r4qpQzX/Love-Letter.png"
                />
              </ImgWrap>
            )}

            <InputWrap margin={Margin} onClick={handleClickInput}>
              <img src="https://i.ibb.co/B4Y5jgG/Group-69.png" />
              <Input placeholder="30자 이내로 작성"></Input>
            </InputWrap>
          </Bottom>
        </BottomWrap>
      </Background>
    </BackgroundWrap>
  );
}

export default StatusMessage;
