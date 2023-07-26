import React from "react";
import Img from "../img/guestbook_img/GuestBookInput.svg";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

//guest 카드 뒷면 남기고 싶은 말 페이지

const BackgroundWrap = styled.div`
  background-color: #5d31ff;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Background = styled.div`
  background-color: #5d31ff;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Upper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 6vh;
  height: 15vh;
`;

const Menuwrap = styled.div`
  display: flex;
  position: absolute;
  left: 5vw;
  top: 6vh;

  justify-content: center;
  margin-left: 5vw;
`;

const MenuButton = styled.img`
  display: flex;
  height: 100%;
  width: 100%;
`;

const TextWrap = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Logo = styled.img`
  margin-bottom: 2vh;
`;

const Text1Wrap = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text1 = styled.div`
  color: #ffffffcc;
  font-family: "ABeeZee", Helvetica;
  font-size: 17px;

  font-weight: 400;
  letter-spacing: 0px;
  line-height: 36px;
`;

const Text2Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.2vh;
`;

const Text2 = styled.div`
  color: #ffffff;
  font-family: "ABeeZee", Helvetica;
  font-size: 13px;

  font-weight: 400;
  letter-spacing: 0;
  line-height: 36px;
`;

const CardWrap = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 4px 16px #00000040;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90%;
  width: 85%;
`;

const ClickWriteWrap = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
  height: 80%;
`;

const ClickWrite = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 95%;
  width: 90%;
`;

const WriteText = styled.div`
  display: flex;
  color: #999999;
  font-family: "Pretendard-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 500;
  position: absolute;
  top: 40vh;

  text-align: center;
`;
const Sticker_Img = styled.img`
  display: flex;
  width: 25vw;
  height: 25vw;
`;

const BackWrap = styled.div`
  display: flex;
  border-radius: 100%;
  background-color: white;
  height: 13vw;
  weight: 13vw;
  display: flex;
  box-shadow: 0px 4px 16px #00000040;
  left: 10vw;
  margin-top: 3vh;
  position: absolute;
`;
const Footer = styled.div`
  display: flex;

  height: 15vh;
`;

const BackIcon = styled.img`
  margin: 2vw;
`;

const InputWrap = styled.div`
  display: flex;
  height: 30vh;
  width: 100%;

  align-items: center;
  justify-content: center;
`;

const Input = styled.textarea`
  position: absolute;
  top: 25vh;
  vertical-align: top;
  width: 70vw;
  height: 15vh;
  word-wrap: break-word;
  color: #999999;
  font-family: "Actor";
  font-size: 20px;
  font-weight: 400;
  background-color: transparent;
  border: none;
`;

const InputImg = styled.img`
  display: flex;
  height: 30vh;
  width: 95vw;
`;

const NextWrap = styled.div`
  border-radius: 100%;
  background-color: white;
  height: 13vw;
  weight: 13vw;
  display: flex;
  position: absolute;
  top: 50vh;
  right: 10vw;
  box-shadow: 0px 4px 16px #00000040;
`;

const NextIcon = styled.img`
  margin: 2vw;
`;

export function GuestBook() {
  const navigate = useNavigate();
  const [guestBookValue, setGuestBookValue] = useState("");
  const [cardHide, setCardHide] = useState(true);
  const [backHide, setBackHide] = useState(true);
  const [showNext, setShowNext] = useState(false);
  const [inputHide, setInputHide] = useState(false);

  const saveguestBook = (event) => {
    setGuestBookValue(event.target.value);
    console.log(event.target.value);
  };

  const handleInputClick = () => {
    setCardHide(false);
    setBackHide(false);
    setInputHide(true);
    setShowNext(true);
  };

  const handleBoardSubmit = () => {
    fetch("http://localhost:3001/board", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ board: guestBookValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("성공", data);
      })
      .catch((error) => {
        console.error("실패", error);
      });
    navigate("/put");
  };

  //서버에서 메시지 받아오기
  useEffect(() => {
    fetch("http://localhost:3001/board")
      .then((response) => response.json())
      .then((data) => {
        if (data.board) {
          setGuestBookValue(data.board);
        }
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);

  return (
    <BackgroundWrap>
      <Background>
        <Upper>
          <Menuwrap>
            <MenuButton
              className="back-button"
              alt="Back button"
              src="https://i.ibb.co/Tt529xN/menu-burger.png"
            />
          </Menuwrap>

          <Logo src="https://i.ibb.co/S55prB4/FACETICKER-1.png" />

          <TextWrap>
            <Text1Wrap>
              <Text1>남기고 싶은 메시지가 있나요?</Text1>
            </Text1Wrap>
            <Text2Wrap>
              <Text2>미입력 시 스티커만 저장됩니다.</Text2>
            </Text2Wrap>
          </TextWrap>
        </Upper>
        {cardHide && (
          <CardWrap>
            <Card>
              <ClickWriteWrap>
                <ClickWrite
                  src="https://i.ibb.co/MCb12MZ/Rectangle-4160.png"
                  onClick={handleInputClick}
                />
              </ClickWriteWrap>
              <WriteText>여기에 입력해주세요.</WriteText>
              <Sticker_Img
                alt="Img"
                src="https://i.ibb.co/dtC3T7g/svg-character-mr-daydream-1.png"
              />
            </Card>
          </CardWrap>
        )}

        {backHide && (
          <Footer>
            <BackWrap onClick={() => navigate(-1)}>
              <BackIcon src="https://i.ibb.co/yXHLvsK/arrow-right-1.png" />
            </BackWrap>
          </Footer>
        )}

        {inputHide && (
          <InputWrap>
            <InputImg src={Img} />
            <Input
              placeholder="입력된 메세지가 이 곳에 나타납니다."
              value={guestBookValue}
              onChange={saveguestBook}
            ></Input>
          </InputWrap>
        )}

        {showNext && (
          <NextWrap onClick={handleBoardSubmit}>
            <NextIcon src="https://i.ibb.co/XkVS6kQ/arrow-right.png" />
          </NextWrap>
        )}
      </Background>
    </BackgroundWrap>
  );
}

export default GuestBook;
