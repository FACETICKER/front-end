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
const TextHeader = styled.div`
  height: 8%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Text3 = styled.div`
  color: #191919;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 150% */
`;

const Text4 = styled.div`
  color: rgba(25, 25, 25, 0.8);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px; /* 257.143% */
`;
export function Visitor() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [HostName, setHostName] = useState("호스트명");

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

  //방문자가 가지고 온  호스트Id 가져오기
  const hostid = useSelector((state) => state.login.hostid);
  const ID = hostid;

  //호스트 닉네임 불러오기
  useEffect(() => {
    fetch(`http://app.faceticker.site/${ID}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("호스트 성공", data);
        console.log("호스트명", data.result.userNickname);
        setHostName(data.result.userNickname);
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);

  return (
    <BackgroundWrap>
      <Background>
        <MainHeader />

        {!isImageFixed && <MainText />}

        {isImageFixed && (
          <TextHeader>
            <Text3>'{HostName}'님의 페이지에</Text3>
            <Text3>내 스티커가 부착되었습니다.</Text3>
          </TextHeader>
        )}

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
