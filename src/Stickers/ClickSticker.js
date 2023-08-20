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
import back from "../img/Stickers_img/whiteback.png";
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
const Circle = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: black;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
`;
const CircleBack = styled.img`
  display: flex;
  width: 60%;
`;
export function ClickSticker() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [letterValue, setLetterValue] = useState("");
  const [stickerImg, setStickerImg] = useState();
  const [name, setName] = useState();
  const [length, setLength] = useState(null);

  const [imageData, setImageData] = useState([]);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(`/sticker/host/${userId}`);
  };

  /*     const handleProfileClick = (item) => {
  //visior id 받아와서 해당 main으로 이동

    navigate("/"); //클릭한 해당 스티커 프로필로 
  };  */
  /*   const idArray = imageData.map((item) => item.id); */
  const selectedImageId = useSelector((state) => state.image.selectedImageId);

  console.log("100", selectedImageId);

  const userId = Idtoken()[0]; //호스트 아이디
  const ID = userId;
  const jwt = Idtoken()[1]; //호스트 토큰

  const headers = {
    "x-access-token": jwt,
    "Content-Type": "application/json",
  };

  //스티커 읽음 처리
  console.log("9", ID, selectedImageId, jwt);
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
        console.log("읽음 처리", data);
      })
      .catch((error) => {
        console.error("읽음 처리 오류", error);
      });
  }, []);

  return (
    <BackgroundWrap>
      <Background>
        <MainHeader />
        <Card />
        <Footer>
          <Icons>
            <Icon onClick={handleBackClick} src={backtext} />
          </Icons>
        </Footer>
      </Background>
    </BackgroundWrap>
  );
}

export default ClickSticker;
