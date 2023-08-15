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
`;

const Bottom = styled.div`
  border-radius: 20px;
  border: 3px solid var(--unnamed, #12151c);
  background: #fff;
  width: 90%;
  height: 90%;
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Text1 = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 8%;
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
  height: 8%;
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
  width: 90%;

  overflow: scroll;
  flex-direction: column;
`;
const Close = styled.img`
  display: flex;
  position: absolute;
  top: 2%;
  right: 5%;
  max-width: 8%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
const Circle = styled.div`
  display: flex;
  width: 90px;
  height: 90px;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 210, 93, 0.8);
  border-radius: 50%;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2));
  position: relative;
`;
const CircleImage = styled.img`
  display: flex;
  max-height: 80%;
  position: absolute;
  top: 15%;
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

  transform: translateY(50%); //이거 나중에 데이터 더 들어오는 거 보고 수정
`;
export function StickerMenu() {
  const navigate = useNavigate();
  const [images, setImageData] = useState([]);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(true);
  };
  const dispatch = useDispatch();

  const userId = 1;
  const ID = userId;

  //이미지들 불러오기
  useEffect(() => {
    fetch(`http://app.faceticker.site/${ID}/sticker/all`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const filteredData = data.result.visitorStickerResult.filter(
          (item) => item.location_x !== null
        );

        console.log("00", filteredData);
        setImageData(filteredData);
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);

  const extractedDataObjects = [];
  const totalIndexes = Object.keys(images).length;

  for (let start = 0; start < totalIndexes; start += 3) {
    const end = Math.min(start + 2, totalIndexes - 1);
    const extractedData = [];

    for (let i = start; i <= end; i++) {
      extractedData[i] = images[i];
    }

    extractedDataObjects.push(extractedData);
    console.log("개수", extractedData.length);
  }

  console.log(extractedDataObjects);

  console.log("7", extractedDataObjects[1]);

  const filteredData2 = extractedDataObjects[0];
  const filteredData3 = extractedDataObjects[1];
  const filteredData4 = extractedDataObjects[2];
  const filteredData5 = extractedDataObjects[3];
  const filteredData6 = extractedDataObjects[4];
  const filteredData7 = extractedDataObjects[5];

  console.log("8", filteredData2);
  console.log("9", images);

  const handleClickSticker = (imageId) => {
    dispatch(setSelectedImage(imageId));
    navigate("/clicksticker");
  };
  const selectedImageId = useSelector((state) => state.image.selectedImageId);

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
                {filteredData2 &&
                  filteredData2.map((item) => (
                    <Row
                      onClick={() =>
                        handleClickSticker(item.visitor_sticker_id)
                      }
                      key={item.visitor_sticker_id}
                    >
                      <Circle>
                        <CircleImage
                          src={item.final_image_url}
                          alt={item.visitor_sticker_id}
                        />
                      </Circle>

                      <Nickname>{item.name}</Nickname>
                    </Row>
                  ))}
              </First>
              <First>
                {filteredData3 &&
                  filteredData3.map((item) => (
                    <Row
                      onClick={() =>
                        handleClickSticker(item.visitor_sticker_id)
                      }
                      key={item.visitor_sticker_id}
                    >
                      <Circle>
                        <CircleImage
                          src={item.final_image_url}
                          alt={item.visitor_sticker_id}
                        />
                      </Circle>
                      <Nickname>{item.name}</Nickname>
                    </Row>
                  ))}
              </First>
              <First>
                {filteredData4 &&
                  filteredData4.map((item) => (
                    <Row
                      onClick={() =>
                        handleClickSticker(item.visitor_sticker_id)
                      }
                      key={item.visitor_sticker_id}
                    >
                      <Circle>
                        <CircleImage
                          src={item.final_image_url}
                          alt={item.visitor_sticker_id}
                        />
                      </Circle>
                      <Nickname>{item.name}</Nickname>
                    </Row>
                  ))}
              </First>
              <First>
                {filteredData5 &&
                  filteredData5.map((item) => (
                    <Row
                      onClick={() =>
                        handleClickSticker(item.visitor_sticker_id)
                      }
                      key={item.visitor_sticker_id}
                    >
                      <Circle>
                        <CircleImage
                          src={item.final_image_url}
                          alt={item.visitor_sticker_id}
                        />
                      </Circle>
                      <Nickname>{item.name}</Nickname>
                    </Row>
                  ))}
              </First>
              <First>
                {filteredData6 &&
                  filteredData6.map((item) => (
                    <Row
                      onClick={() =>
                        handleClickSticker(item.visitor_sticker_id)
                      }
                      key={item.visitor_sticker_id}
                    >
                      <Circle>
                        <CircleImage
                          src={item.final_image_url}
                          alt={item.visitor_sticker_id}
                        />
                      </Circle>
                      <Nickname>{item.name}</Nickname>
                    </Row>
                  ))}
              </First>
              <First>
                {filteredData7 &&
                  filteredData7.map((item) => (
                    <Row
                      onClick={() =>
                        handleClickSticker(item.visitor_sticker_id)
                      }
                      key={item.visitor_sticker_id}
                    >
                      <Circle>
                        <CircleImage
                          src={item.final_image_url}
                          alt={item.visitor_sticker_id}
                        />
                      </Circle>
                      <Nickname>{item.name}</Nickname>
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

export default StickerMenu;
