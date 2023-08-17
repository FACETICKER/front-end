import styled from "styled-components";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsImageFixed, setIsImageFixed2, setChange } from "./reducers";

import { TestBottom } from "./TestBottom";
import { useState } from "react";
import { useEffect } from "react";
import StaticSticker from "./StaticSticker";
import MainHeader from "../components/HostHeader";
import { MainText } from "./MainText";
import change from "../img/Stickers_img/changeIcon.png";
import complete from "../img/Stickers_img/complete.png";
import { useNavigate } from "react-router-dom";
import RepositionSticker from "./RepositionSticker";
import middle from "../img/Stickers_img/Middle.png";
import Idtoken from "./Idtoken";

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

const HeaderWrap = styled.div`
  height: 10%;
  justify-content: center;
  align-item: center;
  display: flex;
  flex-direction: column;
`;
const FirstHeader = styled.div`
  height: 30%;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
`;
const BackIcon = styled.img`
  max-width: 30px;
`;
const TextHeader = styled.div`
  height: 70%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Text1 = styled.div`
  color: #191919;
  display: flex;
  text-align: center;
  font-family: Pretendard;
  font-size: 25px;
  margin-top: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
`;
const Text2 = styled.div`
  color: rgba(25, 25, 25, 0.8);
  text-align: center;
  display: flex;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
`;
const HostImg = styled.img`
  max-width: 100px;
  max-height: 150px;
  display: flex;
  position: absolute;
  transform: translate(-40%, -50%);
  top: 40%;
  left: 50%;
`;

const BottomWrap = styled.div`
  height: 60%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Bottom = styled.div`
  border-radius: 40px;
  border: 2px solid var(--unnamed, #12151c);
  background: #fff;
  width: 90%;
  height: 90%;
`;
const ButtonWrap = styled.div`
  height: 20%;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
`;
const Footer = styled.div`
  border-radius: 40px 40px 0px 0px;
  border: 2px solid var(--unnamed, #12151c);
  background: #fff;
  width: 90%;
  height: 90%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;
const Icons = styled.div`
  max-height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Icon1 = styled.img`
  display: flex;
  width: 22%;
`;
const Icon2 = styled.img`
  display: flex;
  width: 72%;
`;
const TextWrap = styled.div`
  justify-content: center;
  align-item: center;
  display: flex;
  height: 8%;
  flex-direction: column;
`;
const Text = styled.div`
  color: #191919;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 30px;
`;
const Middle = styled.img`
  display: flex;
  position: absolute;
  top: -26%;
`;
export function Reposition() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = Idtoken()[0]; //호스트 아이디
  const ID = userId;
  const jwt = Idtoken()[1]; //호스트 토큰

  const handleBack = () => {
    dispatch(setIsImageFixed2(true));
  };

  const isImageFixed2 = useSelector((state) => state.app.isImageFixed2);

  useEffect(() => {
    if (isImageFixed2) {
      navigate(`/sticker/host/${userId}`);
    }
  }, [isImageFixed2]);

  return (
    <BackgroundWrap>
      <Background>
        <MainHeader />
        <TextWrap>
          <Text>스티커를 자유롭게</Text>
          <Text>움직여서 배치해보세요!</Text>
        </TextWrap>
        <RepositionSticker />
        <ButtonWrap>
          <Middle src={middle} />
          <Footer>
            <Icons>
              <Icon1 src={change} />
              <Icon2 onClick={handleBack} src={complete} />
            </Icons>
          </Footer>
        </ButtonWrap>
        {/* Check 버튼 */}
      </Background>
    </BackgroundWrap>
  );
}

export default Reposition;
