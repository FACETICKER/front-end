import styled from "styled-components";
import "../font/font.css";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";

import button1 from "../img/Header_img/button1.png";
import button2 from "../img/Header_img/button2.png";
import button3 from "../img/Header_img/button3.png";
import chat from "../img/Header_img/chat.png";
import close from "../img/Header_img/close.png";
import pencil from "../img/Header_img/pencil.png";
import setting from "../img/Header_img/setting.png";

//호스트 헤더

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
  background: linear-gradient(180deg, #ffd25d 0%, #ff984b 100%);
`;

const HeaderWrap = styled.div`
  height: 10%;
  justify-content: center;
  align-item: center;
  display: flex;
`;
const Header = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  margin: auto;
  flex-direction: row;
  justify-content: space-around;
`;
const HeaderIcon = styled.div`
  width: 15%;
  justify-content: center;
  align-item: center;
  display: flex;
`;
const LogoWrap = styled.div`
  justify-content: center;
  align-item: center;
  display: flex;
  width: 70%;
`;
const Logo = styled.div`
  margin: auto;
  font-family: "LotteriaChab";
  color: #ff6d00;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 83.333% */
`;

const style = {
  width: "50%",
  margin: "auto",
};

const ModalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.50)",
  },
  content: {
    top: "50%",
    left: "50%",
    height: "300px",
    width: "250px",
    boxShadow: "2px 4px 10px 0px #00000030",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    border: "none",
  },
};

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 300px;
  width: 250px;
`;

const EidtImg = styled.img`
  width: 20%;
  display: flex;
`;
const EidtButtons = styled.div`
  width: 90%;
  height:70%:
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 10%;
`;

const EditButton = styled.img`
  display: flex;
  width: 100%;
  margin-bottom: 3%;
`;

const Close = styled.img`
  position: absolute;
  width: 10%;
  right: 5%;
  top: 0%;
`;

export function MainHeader() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  //설정
  const handleFirstClick = () => {
    navigate("/initial");
  };
  const handleSecondClick = () => {
    navigate("/makesticker");
  };
  const handleThirdClick = () => {
    navigate("/status");
  };

  const handleLogoClick = () => {
    navigate("/mainhost");
  };

  const handleChatClick = () => {
    navigate("/qna");
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <HeaderWrap>
      <Header>
        <HeaderIcon>
          <img onClick={openModal} style={style} src={setting} />
        </HeaderIcon>
        <Modal
          style={ModalStyle}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Faceticker-Modal"
        >
          <ModalContent>
            <Close onClick={closeModal} src={close} />
            <EidtImg src={pencil} />
            <EidtButtons>
              <EditButton onClick={handleFirstClick} src={button1} />
              <EditButton onClick={handleSecondClick} src={button2} />
              <EditButton onClick={handleThirdClick} src={button3} />
            </EidtButtons>
          </ModalContent>
        </Modal>
        <LogoWrap>
          <Logo onClick={handleLogoClick}>FACETICKER</Logo>
        </LogoWrap>

        <HeaderIcon>
          <img onClick={handleChatClick} style={style} src={chat} />
        </HeaderIcon>
      </Header>
    </HeaderWrap>
  );
}

export default MainHeader;
