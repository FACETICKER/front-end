import styled from "styled-components";
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsImageFixed } from "./reducers";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import zoom from "../img/stickers_img/zoom.png";

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

export function RepositionSticker() {
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

  const [selectedImageId, setSelectedImageId] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [ImagePosition, setImagePosition] = useState(null);

  const handleImageMouseDown = (event, itemId) => {
    setSelectedImageId(itemId);
    setIsDragging(true);
    const offsetX = event.nativeEvent.offsetX;
    const offsetY = event.nativeEvent.offsetY;
    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (event) => {
    if (isDragging && selectedImageId !== null) {
      const sidePosition = {
        // 클릭한 엘리먼트의 절대좌표
        // .getBoundingClientRect().left 뷰포트 기준 X값 top은 Y 값
        X: Math.floor(event.target.getBoundingClientRect().left),
        Y: Math.floor(event.target.getBoundingClientRect().top),
      };

      const clickPosition = {
        X: Math.floor(event.clientX),
        Y: Math.floor(event.clientY),
      };

      const ratio = {
        X: clickPosition.X - sidePosition.X,
        Y: clickPosition.Y - sidePosition.Y,
      };

      // 상대 좌표
      /* const XPer = (ratio.X / componentWidth) * 100;
      const YPer = (ratio.Y / componentHeight) * 100; */
      // 소수점 둘째 자리까지 반올림
      /*   const xyPer = { XPer: XPer.toFixed(2), YPer: YPer.toFixed(2) };
      setImagePosition(xyPer); */

      const offsetX = event.nativeEvent.offsetX;
      const offsetY = event.nativeEvent.offsetY;

      setImageData((prevImageData) =>
        prevImageData.map((item) =>
          item.id === selectedImageId
            ? {
                ...item,
                imgposition: {
                  XPer: (ratio.X / componentWidth) * 100,
                  YPer: (ratio.Y / componentHeight) * 100,
                },
              }
            : item
        )
      );
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setSelectedImageId(null);
  };
  return (
    <BottomWrap>
      <Bottoms>
        <Bottom ref={componentRef} style={{ transform: `scale(${zoomLevel})` }}>
          <HostImg src={hostImageUrl} />

          {imageData.map((item) => (
            <img
              key={item.id}
              src={item.url}
              style={{
                position: "absolute",
                top: (item.imgposition.YPer * componentHeight) / 100,
                left: `${(item.imgposition.XPer * componentWidth) / 100}px`,
                zIndex: 9999,
                maxWidth: "100px",
                cursor: selectedImageId === item.id ? "grabbing" : "grab",
              }}
              alt={`Image ${item.id}`}
              onMouseDown={(event) => handleImageMouseDown(event, item.id)}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            />
          ))}
          {imageData.map((item) => (
            <img
              key={item.id}
              src={zoom}
              style={{
                position: "absolute",
                width: "20px",
                top: `${
                  -10 + (item.imgposition.YPer * componentHeight) / 100
                }px`,
                left: `${
                  90 + (item.imgposition.XPer * componentWidth) / 100
                }px`,
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

export default RepositionSticker;
