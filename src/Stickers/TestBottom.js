import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { setIsImageFixed } from "./reducers";
import { useDrag } from "react-use-gesture";
import { useEffect, useState } from "react";
import { useGesture } from "react-use-gesture";
import React, { useRef } from "react";

//방문자가 자신의 스티커를 호스트 페이지에 붙이는 컴포넌트

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
  transform: translate(-40%, 50%);
  top: 40%;
  left: 50%;
`;

const BottomWrap = styled.div`
  height: 60%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const Bottoms = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 40px;

  display: flex;
  border: 2px solid var(--unnamed, #12151c);
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;

  background-image: url("${getRandomImageLink()}");
  overflow: scroll;
`;

const Bottom = styled.div`
  width: 200%;
  height: 200%;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
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

export function TestBottom() {
  const [imageUrl, setImageUrl] = useState(null);
  const [imagePosition, setImagePosition] = useState(null);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [hostImageUrl, setHostImageUrl] = useState(null);
  const [componentWidth, setComponentWidth] = useState(0);
  const [componentHeight, setComponentHeight] = useState(0);
  const [bottomWidth, setBottomWidth] = useState("100%");
  const [bottomHeight, setBottomHeight] = useState("100%");

  const isImageFixed = useSelector((state) => state.app.isImageFixed);
  useEffect(() => {
    fetch("http://localhost:3010/user/1")
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

  //Bottom 높이, 너비 반환
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

  const handleFetchImageAndImageClick = async (event) => {
    try {
      const response = await fetch("http://localhost:3010/user/2");
      const data = await response.json();
      setImageUrl(data.url);

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
      const XPer = (ratio.X / componentWidth) * 100;
      const YPer = (ratio.Y / componentHeight) * 100;
      // 소수점 둘째 자리까지 반올림
      const xyPer = { XPer: XPer.toFixed(2), YPer: YPer.toFixed(2) };
      setImagePosition(xyPer);

      console.log(imagePosition);
      setIsImageVisible(true);
      dispatch(setIsImageFixed(false)); // 이미지 클릭 시, 스티커 고정 상태를 해제
    } catch (error) {
      console.error("이미지 URL 가져오기 오류:", error);
    }
  };

  useEffect(() => {
    if (isImageFixed) {
      fetch("http://localhost:3010/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imgposition: imagePosition }),
      })
        .then((response) => response.json())

        .catch((error) => {
          console.error("오류 발생", error);
        });
    }
  }, [isImageFixed]);

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

  return (
    <BottomWrap>
      <Bottoms ref={componentRef}>
        <Bottom style={{ transform: `scale(${zoomLevel})` }}>
          {/* 클릭 이벤트 리스너 */}
          {!isImageFixed && (
            <div
              style={{
                display: "flex",
                width: "85%",
                height: "85%",
              }}
              onClick={handleFetchImageAndImageClick}
            ></div>
          )}
          <HostImg src={hostImageUrl} />
          {/* 이미지가 보이는 경우 */}

          {isImageVisible && (
            <img
              src={imageUrl}
              style={{
                display: "flex",
                maxWidth: "100px",
                position: "absolute",
                top: `${(imagePosition.YPer * componentHeight) / 100}px`,
                left: `${(imagePosition.XPer * componentWidth) / 100}px`,
                zIndex: 9999,
              }}
            />
          )}
        </Bottom>
      </Bottoms>
      {/*   <ZoomButtons>
        <ZoomButton onClick={zoomIn}>Zoom In</ZoomButton>
        <ZoomButton onClick={zoomOut}>Zoom Out</ZoomButton>
      </ZoomButtons> */}
    </BottomWrap>
  );
}

export default TestBottom;
