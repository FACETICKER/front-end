import styled from "styled-components";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsImageFixed } from "./reducers";
import { useDrag } from "react-use-gesture";
import { useEffect, useState } from "react";
import { useGesture } from "react-use-gesture";
//방문자 기록 컴포넌트

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

export function TestBottom() {
  const [imageUrl, setImageUrl] = useState(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isImageVisible, setIsImageVisible] = useState(false);

  const [hostImageUrl, setHostImageUrl] = useState(null);

  const isImageFixed = useSelector((state) => state.app.isImageFixed);
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

  const dispatch = useDispatch();

  const handleFetchImageAndImageClick = async (event) => {
    try {
      const response = await fetch("http://localhost:3001/imgUrl/2");
      const data = await response.json();
      setImageUrl(data.url);
      setImagePosition({ x: event.clientX, y: event.clientY });
      console.log(imagePosition);
      setIsImageVisible(true);
      dispatch(setIsImageFixed(false)); // 이미지 클릭 시, 스티커 고정 상태를 해제
    } catch (error) {
      console.error("이미지 URL 가져오기 오류:", error);
    }
  };

  useEffect(() => {
    if (isImageFixed) {
      fetch("http://localhost:3001/imgUrl", {
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

  return (
    <BottomWrap>
      <Bottom>
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
              maxWidth: "100px",
              position: "absolute",
              top: imagePosition.y,
              left: imagePosition.x,
              zIndex: 9999,
            }}
            alt="Image"
          />
        )}
      </Bottom>
    </BottomWrap>
  );
}

export default TestBottom;
