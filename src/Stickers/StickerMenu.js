import styled from "styled-components";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsImageFixed } from "./reducers";

import { TestBottom } from "./TestBottom";
import { useState } from "react";
import { useEffect } from "react";
import StaticSticker from "./StaticSticker";
import MainHeader from "../components/HostHeader";
import { MainText } from "./MainText";
import menu from "../img/Stickers_img/menu.png";
import change from "../img/Stickers_img/change.png";
import { useNavigate } from "react-router-dom";
import HostHeader from "../components/HostHeader";
import { setSelectedImage } from "./imageSlice";
import close from "../img/Header_img/close.png";

//방문자 기록 컴포넌트
const BackgroundWrap = styled.div`
  background: #fefaef;
`;
//Background : 모바일로 보이는 영역
const Background = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  max-width: 37.5rem;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  background: #fefaef;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const BottomWrap = styled.div`
  height: 80%;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 90%;
  flex-direction: column;
  overflow: hidden;
`;

const Bottom = styled.div`
  border-radius: 20px;
  border: 3px solid var(--unnamed, #12151c);
  background: #fff;
  width: 90%;
  height: 90%;
  position: relative;
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

  height: 90%;
  flex-direction: column;
  overflow: hidden;
`;
const Close = styled.img`
  display: flex;
  position: absolute;
  top: 2%;
  right: 5%;
  max-width: 8%;
`;
export function StickerMenu() {
  const navigate = useNavigate();
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
        console.log(images);
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);

  const filteredData2 = images.filter((item) => item.id >= 2 && item.id <= 4);
  const filteredData3 = images.filter((item) => item.id >= 5 && item.id <= 7);
  const filteredData4 = images.filter((item) => item.id >= 8 && item.id <= 10);
  const filteredData5 = images.filter((item) => item.id >= 11 && item.id <= 13);
  const filteredData6 = images.filter((item) => item.id >= 14 && item.id <= 16);
  const filteredData7 = images.filter((item) => item.id >= 17 && item.id <= 19);
  console.log(filteredData2);

  const handleClickSticker = (imageId) => {
    dispatch(setSelectedImage(imageId));
    navigate("/clicksticker");
  };
  const handleClose = () => {
    navigate("/hoststicker");
  };
  return (
    <BackgroundWrap>
      <Background>
        <HostHeader />
        <BottomWrap>
          <Bottom>
            <Text1>My Faceticker List</Text1>
            <Text2>내 페이지에 부착된 스티커 목록입니다.</Text2>
            <Close onClick={handleClose} src={close} />

            <Stickers>
              <First>
                {filteredData2.map((item) => (
                  <Row
                    onClick={() => handleClickSticker(item.id)}
                    key={item.id}
                  >
                    <Circle>
                      <CircleImage src={item.url} alt={item.nickname} />
                    </Circle>
                    <Nickname>닉네임</Nickname>
                    {/*   <Nickname>{item.nickname}</Nickname> */}
                  </Row>
                ))}
              </First>
              <First>
                {filteredData3.map((item) => (
                  <Row key={item.id}>
                    <Circle>
                      <CircleImage src={item.url} alt={item.nickname} />
                    </Circle>
                    <Nickname>닉네임</Nickname>
                    {/*   <Nickname>{item.nickname}</Nickname> */}
                  </Row>
                ))}
              </First>
              <First>
                {filteredData4.map((item) => (
                  <Row key={item.id}>
                    <Circle>
                      <CircleImage src={item.url} alt={item.nickname} />
                    </Circle>
                    <Nickname>닉네임</Nickname>
                    {/*   <Nickname>{item.nickname}</Nickname> */}
                  </Row>
                ))}
              </First>
              <First>
                {filteredData5.map((item) => (
                  <Row key={item.id}>
                    <Circle>
                      <CircleImage src={item.url} alt={item.nickname} />
                    </Circle>
                    <Nickname>닉네임</Nickname>
                    {/*   <Nickname>{item.nickname}</Nickname> */}
                  </Row>
                ))}
              </First>
              <First>
                {filteredData6.map((item) => (
                  <Row key={item.id}>
                    <Circle>
                      <CircleImage src={item.url} alt={item.nickname} />
                    </Circle>
                    <Nickname>닉네임</Nickname>
                    {/*   <Nickname>{item.nickname}</Nickname> */}
                  </Row>
                ))}
              </First>
              <First>
                {filteredData7.map((item) => (
                  <Row key={item.id}>
                    <Circle>
                      <CircleImage src={item.url} alt={item.nickname} />
                    </Circle>
                    <Nickname>닉네임</Nickname>
                    {/*   <Nickname>{item.nickname}</Nickname> */}
                  </Row>
                ))}
              </First>
            </Stickers>
          </Bottom>
        </BottomWrap>
      </Background>
    </BackgroundWrap>
  );
}

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
const Circle = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 210, 93, 0.8);
  border-radius: 50%;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2));
`;
const CircleImage = styled.img`
  display: flex;
  max-height: 80%;
`;
const Nickname = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
`;

const First = styled.div`
  display: flex;
  margin-bottom: 5%;
  width: 100%;
  height: 30%;
`;

export default StickerMenu;
