import styled from "styled-components";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsImageFixed } from "./reducers";

import { TestBottom } from "./TestBottom";
import { useState } from "react";
import { useEffect } from "react";
import StaticSticker from "./StaticSticker";
import MainHeader from "./MainHeader";
import { MainText } from "./MainText";
import menu from "../img/Stickers_img/menu.png";
import change from "../img/Stickers_img/change.png";

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
  background: ${(props) => props.color};
`;

const BottomWrap = styled.div`
  height: 80%;
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

const Text1 = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 10%;
  color: #191919;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 36px;
`;
const Text2 = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 10%;
  color: #767676;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
`;
const Stickers = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 80%;
  background-color: pink;
`;

const YellowCircle = styled.div`
  width: 20vw;
  padding: 5% 5‰;
  height: 20vw;
  border-radius: 50%;
  background-color: rgba(255, 210, 93, 0.8);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  flex-direction: column;
  margin: 0 auto;
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: yellow;
  border-radius: 50%;
  margin: 5px;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export function StickerMenu() {
  const [images, setImageData] = useState([]);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(true);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3011/user")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((item) => item.id !== 1);
        setImageData(filteredData);
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);

  /*   const Circle = ({ imageUrl }) => (
    <YellowCircle>
      <StyledImage src={imageUrl} alt="Image" />
    </YellowCircle>
  ); */

  /*   const renderImageRows = () => {
    const rows = [];
    for (let i = 0; i < images.length; i += 3) {
      const rowImages = images.slice(i, i + 3);
      rows.push(
        <div key={i} style={{ display: "flex", justifyContent: "center" }}>
          {rowImages.map((imageData) => (
            <Circle key={imageData.id} imageUrl={imageData.url} />
          ))}
        </div>
      );
    }
    return rows; */

  return (
    <BackgroundWrap>
      <Background>
        <MainHeader />
        <BottomWrap>
          <Bottom>
            <Text1>My Faceticker List</Text1>
            <Text2>내 페이지에 부착된 스티커 목록입니다.</Text2>
            <Stickers></Stickers>
          </Bottom>
        </BottomWrap>
      </Background>
    </BackgroundWrap>
  );
}

export default StickerMenu;
