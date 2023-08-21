import styled from "styled-components";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsImageFixed } from "./reducers";

import { TestBottom } from "./TestBottom";
import { useState } from "react";
import { useEffect } from "react";
import StaticSticker from "./StaticSticker";
import MainHeader from "../components/VisitorHeader";
import { MainText } from "./MainText";
import { useNavigate } from "react-router-dom";
import visitorbutton from "../img/Stickers_img/visitorbutton.png";
import middle from "../img/Stickers_img/Middle.png";
import VisitorSticker from "./VisitorSticker";
import mysticker from "../img/Stickers_img/mysticker.png";
import goqna from "../img/Stickers_img/goqna.png";
import PageSlice from "../QnA/Slice/PageSlice";

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
  height: 80%;
  max-width: 90%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  display: flex;
  width: 100%;
  max-height: 70%;
`;
const Middle = styled.img`
  display: flex;
  max-width: 40%;
  position: absolute;
  top: -28%;
`;
export function Visitor() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isImageFixed = useSelector((state) => state.app.isImageFixed);
  console.log("이미지fixed", isImageFixed);

  const handlesticker = () => {
    navigate("/makesticker");
  };

  const handleQnA = () => {
    dispatch(PageSlice.actions.guest());
    navigate("/qna");
  };

  //내 프로필 제작 누르면
  const handleMakeprofile = () => {
    //만든 스티커 post
    //로그인 페이지로
    navigate("/");
  };
  return (
    <BackgroundWrap>
      <Background>
        <MainHeader />
        {!isImageFixed && <MainText />}

        <VisitorSticker />
        <ButtonWrap>
          <Middle src={middle} />

          <Footer>
            <Icons>
              {!isImageFixed && (
                <Icon onClick={handlesticker} src={visitorbutton} />
              )}

              {isImageFixed && (
                <>
                  {" "}
                  <Icon onClick={handleMakeprofile} src={mysticker} />
                  <Icon onClick={handleQnA} src={goqna} />
                </>
              )}
            </Icons>
          </Footer>
        </ButtonWrap>
      </Background>
    </BackgroundWrap>
  );
}

export default Visitor;
