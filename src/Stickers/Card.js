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

const Bottom = styled.div`
  height: 78%;
  justify-content: center;
  display: flex;
  position: relative;
`;

const Shadow = styled.div`
  width: 80%;
  border-radius: 100%;
  position: absolute;
  display: flex;
  bottom: 15%;
  height: 10%;
  display: flex;
  background: var(--unnamed, #e7e4da);
`;

const Dot3 = styled.div`
  position: absolute;
  bottom: 6%;
  left: 10%;
  display: flex;
`;

const Name = styled.div`
  position: absolute;
  bottom: 3%;
  right: 10%;
  width: 100%;
  color: black;
  text-align: right;
  font-family: Cafe24Shiningstar;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  z-index: 10000;
`;

const BackImg = styled.img`
  display: flex;
  width: 85%;
  height: 72%;
  position: absolute;
  top: 10px;
  z-index: -1;
  object-fit: cover;
`;

const LetterContent = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 70%;
  bottom: 50%;
  color: #191919;
  text-align: center;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
`;
const StickerImg = styled.img`
  display: flex;
  max-width: 65%;
  max-height: 60%;
  position: absolute;
  bottom: 12%;
  object-fit: cover;
`;

const StickerImg2 = styled.img`
  display: flex;
  max-width: 20%;
  max-height: 20%;
  position: absolute;
  bottom: 5%;
  object-fit: cover;
`;

export function Card() {
  const [isFlipped, setIsFlipped] = useState(true);
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

  //방문록 받아오기
  useEffect(() => {
    fetch(`http://app.faceticker.site/${ID}/sticker/visitor/${selectedImageId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("특정 스티커", data);
        console.log("방문록", data.result.message);
        setLetterValue(data.result.message);
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);

  //이미지, 닉네임불러오기
  useEffect(() => {
    fetch(`http://app.faceticker.site/${ID}/sticker/all`)
      .then((response) => response.json())
      .then((data) => {
        console.log("이미지, 닉네임 불러오기 성공", data);

        const filteredData = data.result.visitorStickerResult.filter(
          (item) => item.location_x !== null
        );
        const filteredData2 = data.result.visitorStickerResult.filter(
          (item) => item.visitor_sticker_id == selectedImageId
        ); //선택한 캐릭터

        console.log("00", filteredData);
        setStickerImg(filteredData2[0].final_image_url);
        setName(filteredData2[0].name);

        console.log(filteredData2[0].name);
        setImageData(filteredData);
        setLength(filteredData.length);
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);

  console.log("개수", length);

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
      console.log("특정 스티커 삭제 성공", responseData);

      if (response.ok) {
        navigate(`/sticker/host/${userId}`);
      } else {
        console.log("특정 스티커 삭제 실패");
      }
    } catch (error) {
      console.error("특정 스티커 삭제 실패", error);
    }
  };

  return (
    <Bottom>
      {length == 1 && (
        <CardWrap onClick={handleCardClick}>
          <TrashIcon onClick={handleTrashClick} src={trash} />
          {isFlipped && (
            <FrontCard>
              <Second>
                <Shadow />
                <StickerImg src={stickerImg} />
              </Second>

              <Dot3>
                <Dots />
              </Dot3>
              <Name>{name}</Name>
            </FrontCard>
          )}
          {!isFlipped && (
            <BackCard>
              <Back>
                <BackImg src={post} />
                <LetterContent>{letterValue}</LetterContent>
                <StickerImg2 src={stickerImg} />
              </Back>
            </BackCard>
          )}
        </CardWrap>
      )}
      {length == 2 && (
        <CardWrap onClick={handleCardClick}>
          <TrashIcon onClick={handleTrashClick} src={trash} />
          {isFlipped && (
            <FrontCard>
              <Second>
                <Shadow />
                <StickerImg src={stickerImg} />
              </Second>
              <SecondShadow />

              <Dot3>
                <Dots />
              </Dot3>
              <Name>{name}</Name>
            </FrontCard>
          )}
          {!isFlipped && (
            <BackCard>
              <Back>
                <BackImg src={post} />
                <LetterContent>{letterValue}</LetterContent>
                <StickerImg2 src={stickerImg} />
              </Back>
              <SecondShadow />
            </BackCard>
          )}
        </CardWrap>
      )}

      {length >= 3 && (
        <CardWrap onClick={handleCardClick}>
          <TrashIcon onClick={handleTrashClick} src={trash} />
          {isFlipped && (
            <FrontCard>
              <Second>
                <Shadow />
                <StickerImg src={stickerImg} />
              </Second>
              <SecondShadow />
              <Third />
              <Dot3>
                <Dots />
              </Dot3>
              <Name>{name}</Name>
            </FrontCard>
          )}
          {!isFlipped && (
            <BackCard>
              <Back>
                <BackImg src={post} />
                <LetterContent>{letterValue}</LetterContent>
                <StickerImg2 src={stickerImg} />
              </Back>
              <SecondShadow />
              <Third />
            </BackCard>
          )}
        </CardWrap>
      )}
    </Bottom>
  );
}

export default Card;

const CardWrap = styled.div`
  width: 90%;
  height: 100%;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  perspective: 1000px;
  position: relative;
`;

const FrontCard = styled.div`
  position: absolute;
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 20px;
  border: 1px solid #ccc;
  background-color: white;
  z-index: 1;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.25);
`;
const BackCard = styled.div`
  position: absolute;
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  z-index: 3;
`;

const SecondShadow = styled.div`
  position: absolute;
  display: flex;
  width: 90%;
  bottom: -5%;
  height: 95%;
  border-radius: 20px;

  background: rgba(244, 243, 249, 0.8);
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const Third = styled.div`
  position: absolute;
  display: flex;
  width: 80%;
  bottom: -10%;
  height: 100%;
  border-radius: 20px;
  background: rgba(244, 243, 249, 0.8);
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
  z-index: -1;
`;
const Second = styled.div`
  border-radius: 20px;
  position: absolute;
  justify-content: center;
  top: 10px;
  display: flex;
  border: 2px solid var(--unnamed, #12151c);
  background: #fefaef;
  width: 90%;
  height: 85%;
  flex-shrink: 0;
  z-index: 10;
`;

const Back = styled.div`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  justify-content: center;

  display: flex;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;
const TrashIcon = styled.img`
  display: flex;
  position: absolute;
  max-width: 20%;
  max-height: 20%;
  right: 5%;
  top: -5%;
  z-index: 12;
`;
