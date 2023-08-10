import React from "react";
import { useNavigate } from "react-router-dom";

import Modal from "react-modal";
import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";

//사용 x

const ModalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  content: {
    height: "20vh",
    width: "60vw",
    top: "50vh",
    left: "50vw",
    right: "auto",
    bottom: "auto",
    boxShadow: "0px 4px 16px #00000040",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    border: "none",
  },
};

const YesButton = styled.button`
  background-color: #5d31ff;
  border-radius: 10px;
  box-shadow: 0px 4px 16px #00000040;
  border: 1px none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  color: white;
  height: 80%;
  margin-left: 2vw;
`;

const ModalContents = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const NoButton = styled.button`
  background-color: #f4f3f9;
  border-radius: 10px;
  box-shadow: 0px 4px 16px #00000040;
  border: 1px none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 80%;
  margin-right: 2vw;
`;

const YNButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: row;

  height: 8vh;
  padding: 2%;
`;

const ModalText = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
`;

const BackgroundWrap = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  background: linear-gradient(180deg, #ffd25d 0%, #ff984b 100%);
`;
//Background : 모바일로 보이는 영역
const Background = styled.div`
  max-width: 680px;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #ffd25d 0%, #ff984b 100%);
`;

const Upper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25vh;
  width: 100%;
`;

const Menuwrap = styled.div`
  height: 30px;
  width: 30px;
  position: absolute;
  top: 6vh;
  left: 5vw;
  display: flex;
  justify-content: center;
  background-color: #5d31ff;
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
  margin: 2vh;
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
  font-family: "Actor", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 20px;
`;

const Text2Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1vh;
`;

const Text2 = styled.div`
  color: #ffffff;
  font-family: "ABeeZee", Helvetica;
  font-size: 20px;

  font-weight: 400;
  letter-spacing: 0;
  line-height: 36px;
`;

const CardWrap = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 25vh;
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 4px 16px #00000040;
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${(props) => props.length};
  position: absolute;
  width: 80vw;
  top: 0px;
  flex-direction: ${(props) => props.nickflex};
`;

const Sticker_Img = styled.img`
  display: flex;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  margin: 2vw;
`;

const NextWrap = styled.div`
  border-radius: 100%;
  background-color: white;
  height: 13vw;
  weight: 13vw;
  display: flex;
  position: absolute;
  top: 40vh;
  right: 10vw;
  box-shadow: 0px 4px 16px #00000040;
`;

const NextIcon = styled.img`
  margin: 2vw;
`;

const Nickname = styled.input`
  display: flex;
  width:${(props) => props.width}
  background-color: #f4f3f9;
  border-radius: 10px;
  height: ${(props) => props.height}
  border : none
  justify-content: center;
  align-items: center;
  bottom: 2vh;
  text-align: center;
  color: #999999;
  font-family: "Actor", Helvetica;
  font-size: 13px;
  font-weight: 400;
`;
const StickerEditButton = styled.div`
  background-color: #f4f3f9;
  border-radius: 10px;
  box-shadow: 0px 4px 16px #00000040;
  border: 1px none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7vh;
  position: absolute;
  width: 45vw;
  bottom: 9vh;
  font-family: "ABeeZee", Helvetica;
  font-size: 16px;

  font-weight: 400;
  text-align: center;
`;
export function NicknameSetting() {
  const navigate = useNavigate();

  const [cardLength, setCardLength] = useState("90%");
  const [imgSize, setImgSize] = useState("37vh");
  const [nicknameFlex, setnicknameFLex] = useState("column");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [nicknameWidth, setnicknameWidth] = useState("75%");
  const [nicknameHeight, setnicknameHeight] = useState("13%");
  const [showNext, setShowNext] = useState(false);
  const [nicknameValue, setNicknameValue] = useState("");
  const [editclose, setEditClose] = useState(true);

  const handleNicknameClick = () => {
    setCardLength("15%");
    setImgSize("7vh");
    setnicknameFLex("row");
    setnicknameWidth("65%");
    setnicknameHeight("65%");
    setShowNext(true);
    setEditClose(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const saveNickname = (event) => {
    setNicknameValue(event.target.value);
    console.log(event.target.value);
  };

  //닉네임 입력하고 다음 아이콘 누르면 서버에 전송됨
  const handleNicknameSubmit = () => {
    fetch("http://localhost:3001/profile", {
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
    navigate("/guest");
  };

  //서버에서 닉네임 값 받아오기
  useEffect(() => {
    fetch("http://localhost:3001/profile")
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
        <Upper>
          <Menuwrap>
            <MenuButton
              className="back-button"
              alt="Back button"
              src="https://i.ibb.co/Tt529xN/menu-burger.png"
            />
          </Menuwrap>

          <TextWrap>
            <Logo src="https://i.ibb.co/S55prB4/FACETICKER-1.png" />

            <Text1Wrap>
              <Text1>스티커가 완성되었어요!</Text1>
            </Text1Wrap>
            <Text2Wrap>
              <Text2>스티커 네임을 작성해 주세요.</Text2>
            </Text2Wrap>
          </TextWrap>
        </Upper>

        <CardWrap>
          <Card length={cardLength} nickflex={nicknameFlex}>
            <Sticker_Img
              size={imgSize}
              alt="Img"
              src="https://i.ibb.co/dtC3T7g/svg-character-mr-daydream-1.png"
            />
            <Modal
              style={ModalStyle}
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Faceticker-Modal"
            >
              <ModalContents>
                <ModalText>페이스티커를 수정하시겠어요?</ModalText>
                <YNButton>
                  <NoButton onClick={closeModal}>아니요</NoButton>
                  <YesButton>네</YesButton>
                </YNButton>
              </ModalContents>
            </Modal>
            <Nickname
              placeholder="스티커 네임 입력 (15자 이내)"
              maxLength="15"
              value={nicknameValue}
              onChange={saveNickname}
              onClick={handleNicknameClick}
              width={nicknameWidth}
              height={nicknameHeight}
            ></Nickname>
          </Card>
        </CardWrap>
        {editclose && (
          <StickerEditButton onClick={openModal}>스티커 수정</StickerEditButton>
        )}

        {showNext && (
          <NextWrap onClick={handleNicknameSubmit}>
            <NextIcon src="https://i.ibb.co/XkVS6kQ/arrow-right.png" />
          </NextWrap>
        )}
      </Background>
    </BackgroundWrap>
  );
}

export default NicknameSetting;
