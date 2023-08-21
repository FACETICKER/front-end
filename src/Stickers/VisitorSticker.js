import styled from "styled-components";
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsImageFixed, setSelectedImageKey } from "./reducers";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setSelectedImage } from "./imageSlice";
import Idtoken from "./Idtoken";
import { setHostId } from "../login/LoginSlice";

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
  top: 48%;
  left: 48%;
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

export function VisitorSticker() {
  const [hostImageUrl, setHostImageUrl] = useState(null);
  const isImageFixed = useSelector((state) => state.app.isImageFixed);
  const [imageData, setImageData] = useState([]);
  const [componentWidth, setComponentWidth] = useState(0);
  const [componentHeight, setComponentHeight] = useState(0);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const currentURL = window.location.href;
  const parts = currentURL.split("/");
  const hostid = parts[parts.length - 1]; //방문자가 가지고 온 호스트 ID
  console.log(hostid);
  //호스트 아이디 저장
  dispatch(setHostId(hostid)); // userId, 토큰, 방문자가 가지고 온  호스트Id 가져오기

  const jwt = Idtoken()[1]; //호스트 토큰
  const userId = Idtoken()[0]; //호스트 아이디

  const whatType = hostid == null ? "host" : "visitor";

  //헤더
  const headers = {
    "x-access-token": jwt,
    "Content-Type": "application/json",
  };

  const VisitorHeader = {
    "Content-Type": "application/json",
  };
  const Header = whatType == "host" ? headers : VisitorHeader;
  console.log("header", whatType);
  const ID = whatType == "host" ? userId : hostid;
  console.log("id", ID);

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

  //이미지들 불러오기
  useEffect(() => {
    fetch(`http://app.faceticker.site/${ID}/sticker/all`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHostImageUrl(data.result.userStickerResult[0].final_image_url);
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
      <Bottoms>
        <Bottom ref={componentRef} style={{ transform: `scale(${zoomLevel})` }}>
          <HostImg src={hostImageUrl} />

          {imageData &&
            imageData.map((item) => (
              <img
                key={item.visitor_sticker_id}
                src={item.final_image_url}
                style={{
                  position: "absolute",
                  top: `${(item.location_y * componentHeight) / 100}px`,
                  left: `${(item.location_x * componentWidth) / 100}px`,
                  zIndex: 9999,
                  maxWidth: "100px",
                }}
                alt={item.visitor_sticker_id}
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

export default VisitorSticker;
