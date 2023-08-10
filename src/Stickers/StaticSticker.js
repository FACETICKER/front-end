import styled from "styled-components";
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsImageFixed } from "./reducers";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//방문자 기록 컴포넌트

// 배경 이미지 링크 랜덤 함수
const getRandomImageLink = () => {
  const images = [
    "https://i.ibb.co/hgQ81HN/1.png",
    "https://i.ibb.co/Z1GwRWj/Untitled-1-1.png",
  ];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};
//style
const HostImg = styled.img`
  max-width: 100px;
  max-height: 150px;
  display: flex;
  position: absolute;
  transform: translate(-40%, -50%);
  top: 45%;
  left: 50%;
`;

const BottomWrap = styled.div`
  height: 60%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Bottoms = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 40px;
  border: 2px solid var(--unnamed, #12151c);
  width: 90%;
  height: 90%;
  background-image: url("${getRandomImageLink()}");
`;

const Bottom = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ZoomButtons = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 8px;
`;

const ZoomButton = styled.button`
  padding: 6px 10px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
`;

export function StaticSticker() {
  const [hostImageUrl, setHostImageUrl] = useState(null);
  const isImageFixed = useSelector((state) => state.app.isImageFixed);
  const [imageData, setImageData] = useState([]);
  const [componentWidth, setComponentWidth] = useState(0);
  const [componentHeight, setComponentHeight] = useState(0);

  //컴포넌트 높이, 너비
  const componentRef = useRef(null);
  useEffect(() => {
    if (componentRef.current) {
      const w = componentRef.current.offsetWidth;
      const h = componentRef.current.offsetHeight;
      console.log("Width:", w);
      console.log("Height:", h);
      setComponentWidth(w);
      setComponentHeight(h);
    }
  }, []);

  //host image 받아오기
  useEffect(() => {
    fetch("http://localhost:3011/user/1")
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

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleStickerClick = (item) => {
    navigate("/clicksticker"); //페이지 전환
  };
  const [zoomLevel, setZoomLevel] = useState(1);
  const minZoomLevel = 0.5;
  const maxZoomLevel = 2;

  // 줌 인 함수
  const zoomIn = () => {
    if (zoomLevel < maxZoomLevel) {
      setZoomLevel((prevZoom) => prevZoom + 0.1);
    }
  };

  // 줌 아웃 함수
  const zoomOut = () => {
    if (zoomLevel > minZoomLevel) {
      setZoomLevel((prevZoom) => prevZoom - 0.1);
    }
  };

  const [scale, setScale] = useState(1); // 초기 스케일 값은 1

  return (
    <BottomWrap>
      <Bottoms>
        <Bottom ref={componentRef} style={{ transform: `scale(${zoomLevel})` }}>
          <HostImg src={hostImageUrl} />

          {imageData.map((item) => (
            <img
              onClick={() => handleStickerClick(item)}
              key={item.id}
              src={item.url}
              style={{
                position: "absolute",
                top: `${(item.imgposition.YPer * componentHeight) / 100}px`,
                left: `${(item.imgposition.XPer * componentWidth) / 100}px`,
                zIndex: 9999,
                maxWidth: "100px",
              }}
              alt={`Image ${item.id}`}
            />
          ))}
        </Bottom>
      </Bottoms>

      {/*      <ZoomButtons>
        <ZoomButton onClick={zoomIn}>Zoom In</ZoomButton>
        <ZoomButton onClick={zoomOut}>Zoom Out</ZoomButton>
      </ZoomButtons> */}
    </BottomWrap>
  );
}

export default StaticSticker;
