import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dots from "./Dots";
import StaticSticker from "./StaticSticker";
import MainHeader from "./MainHeader";
import "./ClickSticker.css";
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
  height: 70%;
  justify-content: center;
  display: flex;
  position: relative;
`;

const CardWrap = styled.div`
  width: 85%;
  height: 87%;
`;

const One = styled.div`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  justify-content: center;
  position: relative;
  display: flex;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.25);
  z-index: 1000;
`;

const OneFlip = styled.div`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  justify-content: center;
  position: relative;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.25);
  z-index: 1000;
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
const TrashIcon = styled.img`
  display: flex;
  position: absolute;
  width: 26%;
  right: -2%;
  top: -8%;
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
  bottom: 7%;
  left: 10%;
`;

const Name = styled.div`
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: 30%;
  color: #191919;
  text-align: right;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
const SecondShadow = styled.div`
  position: absolute;
  display: flex;
  width: 90%;
  bottom: -5%;
  height: 100%;
  border-radius: 20px;
  background: rgba(244, 243, 249, 0.8);
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
  z-index: -1;
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
  z-index: -2;
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
  align-items: center;
  display: flex;
  width: 90%;
`;

const Icon = styled.img`
  display: flex;
  width: 50%;
`;

const Back = styled.div`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  justify-content: center;

  position: relative;
  display: flex;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.25);
  z-index: 1000;
`;

const BackImg = styled.img`
  display: flex;
  width: 85%;
  height: 70%;
  position: absolute;
  top: 10px;
  z-index: -1;
  object-fit: cover;
`;

const LetterContent = styled.div`
  display: flex;
  position: absolute;
  bottom: 50%;
  color: #191919;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px; /* 190% */
`;
const StickerImg = styled.img`
  display: flex;
  width: 50%;
  position: absolute;
  bottom: 22%;
  object-fit: cover;
`;

const StickerImg2 = styled.img`
  display: flex;
  width: 17%;
  position: absolute;
  bottom: 8%;
  object-fit: cover;
`;

export function ClickSticker() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [letterValue, setLetterValue] = useState("");
  const [stickerImg, setStickerImg] = useState();

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const [imageData, setImageData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3021/user")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((item) => item.id !== 1);
        setImageData(filteredData);
        console.log(imageData);
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);

  const handleBackClick = () => {
    navigate("/host"); //페이지 전환
  };
  const handleTrashClick = () => {
    navigate("/host");
  };
  /*   const handleProfileClick = (item) => {
    navigate("/"); //해당 스티커 프로필로 
  }; */

  //서버에서 방문록 받아오기
  useEffect(() => {
    fetch("http://localhost:3021/user/1")
      .then((response) => response.json())
      .then((data) => {
        if (data.letter) {
          setLetterValue(data.letter);
        }
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);

  //host 이미지 url 받아오기
  useEffect(() => {
    fetch("http://localhost:3021/user/1")
      .then((response) => response.json())
      .then((data) => {
        if (data.url) {
          setStickerImg(data.url);
        }
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);

  const idArray = imageData.map((item) => item.id);

  return (
    <BackgroundWrap>
      <Background>
        <MainHeader />
        <Bottom>
          {idArray.length === 1 && (
            <One>
              <Second>
                <TrashIcon
                  onClick={handleTrashClick}
                  src="https://i.ibb.co/vLys4MC/Group-92-1.png"
                />
                <Shadow />
              </Second>
              <Dot3>
                <Dots />
              </Dot3>
              <Name>이름</Name>
            </One>
          )}
          {idArray.length === 2 && (
            <One>
              <Second>
                <TrashIcon
                  onClick={handleTrashClick}
                  src="https://i.ibb.co/vLys4MC/Group-92-1.png"
                />
                <Shadow />
              </Second>
              <SecondShadow />
              <Dot3>
                <Dots />
              </Dot3>
              <Name>이름</Name>
            </One>
          )}

          {idArray.length >= 3 && (
            <div
              className={`card ${isFlipped ? "flipped" : ""}`}
              onClick={handleCardClick}
            >
              <div className="front">
                <Second>
                  <TrashIcon
                    onClick={handleTrashClick}
                    src="https://i.ibb.co/vLys4MC/Group-92-1.png"
                  />
                  <Shadow />
                  <StickerImg src={stickerImg} />
                </Second>
                <SecondShadow />
                <Third />
                <Dot3>
                  <Dots />
                </Dot3>
                <Name>이름</Name>
              </div>
              <div className="back">
                <Back>
                  <TrashIcon
                    onClick={handleTrashClick}
                    src="https://i.ibb.co/vLys4MC/Group-92-1.png"
                  />
                  <BackImg src="https://i.ibb.co/3vfvNYb/Post-it-4-3.png" />
                  <LetterContent>{letterValue}</LetterContent>
                  <StickerImg2 src={stickerImg} />
                </Back>
                <SecondShadow />
                <Third />
              </div>
            </div>
          )}
        </Bottom>

        <Footer>
          <Icons>
            <Icon
              onClick={handleBackClick}
              src="https://i.ibb.co/3NCPkMf/Group-95.png"
            />
            <Icon
              /* onClick = {handleProfileClick} */ src="https://i.ibb.co/Gdwfz15/Group-94-1.png"
            />
          </Icons>
        </Footer>
      </Background>
    </BackgroundWrap>
  );
}

export default ClickSticker;
