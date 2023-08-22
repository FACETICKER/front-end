import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dots from "../components/Dots";
import StaticSticker from "./StaticSticker";
import MainHeader from "../components/HostHeader";

import "./ClickSticker.css";
import "../font/font.css";
import trash from "../img/Stickers_img/trash.png";
import post from "../img/Stickers_img/post.png";
import backtext from "../img/Stickers_img/backtext.png";
import visitprofile from "../img/Stickers_img/visitprofile.png";
import Idtoken from "./Idtoken";
import Card from "./Card";
import deletebutton from "../img/Stickers_img/deletebutton.png";
import Modal from "react-modal";
import modalimg from "../img/Stickers_img/modalimg.png";
import yes from "../img/Stickers_img/yes.png";
import no from "../img/Stickers_img/no.png";

/* import { StickerPageSlice } from "./StickerPageSlice";
dispatch(NicknamePageSlice.actions.letter()); //letter로 페이지 전환 */

//방문자 기록 컴포넌트
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

const Footer = styled.div`
  height: 15%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Icons = styled.div`
  height: 80%;
  flex-direction: row;
  justify-content: space-around;
  /*   align-items: center; */
  align-items: flex-start;
  display: flex;
  width: 90%;
`;

const Icon = styled.img`
  display: flex;
  max-width: 45%;
  max-height: 100%;
`;

const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000, // z-index 값
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    zIndex: 1001,
    border: "2px solid rgba(245, 245, 245, 1)",
    borderRadius: "20px",
    width: "300px",
    height: "260px",
    padding: "0px",
    margin: "0px",
    boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.5)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

export function ClickSticker() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [letterValue, setLetterValue] = useState("");
  const [stickerImg, setStickerImg] = useState();
  const [name, setName] = useState();
  const [length, setLength] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [imageData, setImageData] = useState([]);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(`/sticker/host/${userId}`);
  };

  const handledelete = () => {
    openModal();
  };

  /*     const handleProfileClick = (item) => {
  //visior id 받아와서 해당 main으로 이동

    navigate("/"); //클릭한 해당 스티커 프로필로 
  };  */
  /*   const idArray = imageData.map((item) => item.id); */
  const selectedImageId = useSelector((state) => state.image.selectedImageId);

  //console.log("100", selectedImageId);

  const userId = Idtoken()[0]; //호스트 아이디
  const ID = userId;
  const jwt = Idtoken()[1]; //호스트 토큰

  const headers = {
    "x-access-token": jwt,
    "Content-Type": "application/json",
  };

  //스티커 읽음 처리
  //console.log("9", ID, selectedImageId, jwt);
  useEffect(() => {
    fetch(
      `http://app.faceticker.site/${ID}/visitor/sticker/seen?id=${selectedImageId}`,
      {
        headers: headers,
        method: "POST",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log("읽음 처리", data);
      })
      .catch((error) => {
        console.error("읽음 처리 오류", error);
      });
  }, []);

  //스티커 삭제
  const handleTrashClick = async () => {
    try {
      const response = await fetch(
        `http://app.faceticker.site/${ID}/sticker/visitor/${selectedImageId}`,
        {
          method: "DELETE",
          headers: headers,
        }
      );

      const responseData = await response.json();
      //console.log("특정 스티커 삭제 성공", responseData);

      if (response.ok) {
        navigate(`/sticker/host/${userId}`);
      } else {
        //console.log("특정 스티커 삭제 실패");
      }
    } catch (error) {
      console.error("특정 스티커 삭제 실패", error);
    }
  };
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleNo = () => {
    closeModal();
  };

  const handleYes = () => {
    handleTrashClick();
  };

  return (
    <BackgroundWrap>
      <Background>
        <MainHeader />
        <Card />
        {modalIsOpen && (
          <Modal
            onRequestClose={closeModal}
            isOpen={modalIsOpen}
            style={modalStyle}
          >
            <ModalWrap>
              <Wrap>
                <ModalImg src={modalimg} />
              </Wrap>
              <Contents>
                <Text1>방문자 카드를 삭제할까요?</Text1>
                <Text2>삭제된 카드와 스티커는 복구가 불가합니다.</Text2>
              </Contents>
              <Buttons>
                <Button onClick={handleNo} src={no} />
                <Button onClick={handleYes} src={yes} />
              </Buttons>
            </ModalWrap>
          </Modal>
        )}
        <Footer>
          <Icons>
            <Icon onClick={handleBackClick} src={backtext} />
            <Icon onClick={handledelete} src={deletebutton} />
          </Icons>
        </Footer>
      </Background>
    </BackgroundWrap>
  );
}

export default ClickSticker;
const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Wrap = styled.div`
  display: flex;
  height: 30%;
  padding-top: 10%;
  justify-content: center;
  align-items: center;
`;
const ModalImg = styled.img`
  display: flex;
  max-width: 50%;
`;

const Contents = styled.div`
  display: flex;
  height: 30%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4%;
  padding-bottom: 7%;
`;

const Text1 = styled.div`
  display: flex;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 2%;
`;

const Text2 = styled.div`
  display: flex;
  color: #767676;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
`;

const Buttons = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 20%;
`;
const Button = styled.img`
  display: flex;
  max-width: 45%;
`;
