import styled from "styled-components";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsImageFixed, setIsImageFixed2 } from "./reducers";

import { TestBottom } from "./TestBottom";
import { useState } from "react";
import { useEffect } from "react";
import StaticSticker from "./StaticSticker";
import MainHeader from "../components/HostHeader";
import { MainText } from "./MainText";
import { useNavigate } from "react-router-dom";
import menu from "../img/Stickers_img/menu.png";
import reposition from "../img/Stickers_img/change.png";
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
  max-height: 80px;
`;
const Icon2 = styled.img`
  display: flex;
  width: 72%;
  max-height: 80px;
`;
const Middle = styled.img`
  display: flex;
  max-width: 40%;
  position: absolute;
  top: -28%;
`;
export function Host() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userId = Idtoken()[0]; //호스트 아이디

  const jwt = Idtoken()[1]; //호스트 토큰

  const handleReposition = () => {
    dispatch(setIsImageFixed2(false));
    navigate(`reposition`);
  };

  const handleMenu = () => {
    navigate(`/sticker/host/${userId}/menu`);
  };

  const UID = useSelector((state) => state.login.userId);
  //console.log("UID", UID);

  return (
    <BackgroundWrap>
      <Background>
        <MainHeader />
        <MainText />
        <StaticSticker />

        <ButtonWrap>
          <Middle src={middle} />
          <Footer>
            <Icons>
              <Icon1 onClick={handleMenu} src={menu} />
              <Icon2 onClick={handleReposition} src={reposition} />
            </Icons>
          </Footer>
        </ButtonWrap>
      </Background>
    </BackgroundWrap>
  );
}

export default Host;
