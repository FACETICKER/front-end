import styled from "styled-components";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsImageFixed } from "./reducers";
import { setIsImageVisible } from "./reducers";
import { TestBottom } from "./TestBottom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backIcon from "../img/Stickers_img/backIcon.png";
import middle from "../img/Stickers_img/Middle.png";
import changeIcon from "../img/Stickers_img/changeIcon.png";
import putcomplete from "../img/Stickers_img/putcomplete.png";
import mysticker from "../img/Stickers_img/mysticker.png";
import goqna from "../img/Stickers_img/goqna.png";

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
  position: relative;
  background: linear-gradient(180deg, #ffd25d 0%, #ff984b 100%);
`;

const HeaderWrap = styled.div`
  height: 15%;
  justify-content: center;
  align-item: center;
  display: flex;
  flex-direction: column;
`;
const FirstHeader = styled.div`
  height: 30%;
  display: flex;
  align-item: center;
  justify-content: flex-start;
  padding-left: 10px;
`;
const BackIcon = styled.img`
  max-width: 10%;
  height: 100%;
  padding-top: 3%;
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

const Text3 = styled.div`
  color: #191919;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 150% */
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
const MiddleImg = styled.div`
  position: absolute;

  height: 60%;
  top: -60px;
  display: flex;
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
const Icon = styled.img`
  max-height: 48%;
  display: flex;
`;

const Icon2 = styled.div`
  justify-content: center;
  align-items: center;
  max-height: 50%;
  display: flex;
  width: 80%;
`;

const Icon3 = styled.img`
  display: flex;
  width: 60%;
`;

export function VisitPut(props) {
  const VID2 = props.VID;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [HostName, setHostName] = useState("호스트명");
  const [change, setChange] = useState(false);

  const handleButtonClick = () => {
    dispatch(setIsImageFixed(true)); // "Check" 버튼 클릭 시, 스티커 고정
    setChange(true);
  };

  const handleQnA = () => {
    navigate("/qna");
  };

  //처음 이전 아이콘
  const handlefirstBack = () => {
    navigate(-1);
  };

  //두 번째 이전 아이콘
  const handleSecondBack = () => {
    setChange(false);
  };

  //내 프로필 제작 누르면
  const handleMakeprofile = () => {
    //만든 스티커 post
    //로그인 페이지로
    navigate("/");
  };

  useEffect(() => {
    if (change) {
      const timer = setTimeout(() => {
        // 5초 후에 페이지 이동
        navigate("/mainvisit"); // 메인페이지로
      }, 5000);

      return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 제거
    }
  }, [change]);

  const userId = "1";
  const ID = userId;
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

  const reset = () => {
    dispatch(setIsImageVisible(false));
  };
  return (
    <BackgroundWrap>
      {!change && (
        <Background>
          <HeaderWrap>
            <FirstHeader>
              <BackIcon onClick={handlefirstBack} src={backIcon} />
            </FirstHeader>
            <TextHeader>
              <Text1>스티커를 붙여보세요!</Text1>
              <Text2>부착된 스티커는 호스트 외 삭제할 수 없습니다.</Text2>
            </TextHeader>
          </HeaderWrap>
          <TestBottom id={VID2} />

          <ButtonWrap>
            <MiddleImg>
              <img src={middle} />
            </MiddleImg>
            <Footer>
              <Icon onClick={reset} src={changeIcon} />
              <Icon onClick={handleButtonClick} src={putcomplete} />
            </Footer>
          </ButtonWrap>
        </Background>
      )}
      {change && (
        <Background>
          <HeaderWrap>
            <FirstHeader>
              <BackIcon onClick={handleSecondBack} src={backIcon} />
            </FirstHeader>
            <TextHeader>
              <Text4>메인화면 이동까지 5초...</Text4>
              <Text3>'{HostName}'님의 페이지에</Text3>
              <Text3>내 스티커가 부착되었습니다.</Text3>
            </TextHeader>
          </HeaderWrap>
          <TestBottom />
          <ButtonWrap>
            <MiddleImg>
              <img src={middle} />
            </MiddleImg>
            <Footer>
              <Icon2>
                <Icon3 onClick={handleMakeprofile} src={mysticker} />
                <Icon3 onClick={handleQnA} src={goqna} />
              </Icon2>
            </Footer>
          </ButtonWrap>
        </Background>
      )}
    </BackgroundWrap>
  );
}

export default VisitPut;
