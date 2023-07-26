import styled from "styled-components";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsImageFixed } from "./reducers";

import { TestBottom } from "./TestBottom";
import { useState } from "react";
import { useEffect } from "react";

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
  max-height: 50%;
  display: flex;
`;

export function VisitPut() {
  const dispatch = useDispatch();
  const isImageFixed = useSelector((state) => state.app.isImageFixed);
  const [imageUrl, setImageUrl] = useState(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isImageVisible, setIsImageVisible] = useState(false);

  const [hostImageUrl, setHostImageUrl] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/imgUrl/1")
      .then((response) => response.json())
      .then((data) => {
        if (data.url) {
          setHostImageUrl(data.url);
        }
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);

  const handleButtonClick = () => {
    dispatch(setIsImageFixed(true)); // "Check" 버튼 클릭 시, 스티커 고정
  };

  return (
    <BackgroundWrap>
      <Background>
        <HeaderWrap>
          <FirstHeader>
            <BackIcon src="https://i.ibb.co/bKVJZtD/arrow-left-1.png" />
          </FirstHeader>
          <TextHeader>
            <Text1>스티커를 붙여보세요!</Text1>
            <Text2>부착된 스티커는 호스트 외 삭제할 수 없습니다.</Text2>
          </TextHeader>
        </HeaderWrap>
        <TestBottom />

        <ButtonWrap>
          <Footer>
            <Icon src="https://i.ibb.co/R20fGKK/Group-184.png" />
            <Icon
              onClick={handleButtonClick}
              src="https://i.ibb.co/jzV1rX7/Group-183.png"
            />
          </Footer>
        </ButtonWrap>
        {/* Check 버튼 */}
      </Background>
    </BackgroundWrap>
  );
}

export default VisitPut;
