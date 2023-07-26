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

export function StaticSticker() {
  const [hostImageUrl, setHostImageUrl] = useState(null);
  const isImageFixed = useSelector((state) => state.app.isImageFixed);
  const [imageData, setImageData] = useState([]);
  //host image 받아오기
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

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:3001/imgUrl")
      .then((response) => response.json())
      .then((data) => {
        // Filter out the data with id=1
        const filteredData = data.filter((item) => item.id !== 1);
        setImageData(filteredData);
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);

  return (
    <BottomWrap>
      <Bottom>
        <HostImg src={hostImageUrl} />
        {/* 이미지가 보이는 경우 */}
        {imageData.map((item) => (
          <img
            key={item.id}
            src={item.url}
            style={{
              position: "absolute",
              top: item.imgposition.y,
              left: item.imgposition.x,
              zIndex: 9999,
              maxWidth: "100px",
            }}
            alt={`Image ${item.id}`}
          />
        ))}
      </Bottom>
    </BottomWrap>
  );
}

export default StaticSticker;
