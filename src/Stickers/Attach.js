import styled from "styled-components";

import { useEffect, useState } from "react";
import Back from "../img/Stickers_img/Back.png";
import Button from "../img/Stickers_img/Button.png";

const BackContainer = styled.img`
  position: absolute;
  max-width: 800px;
  top: 95px;
  left: 115px;
  z-index: ;
`;
const ButtonImg = styled.img`
  position: absolute;
  max-width: 150px;
  top: 400px;
  left: 160px;
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
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  background-color: pink;
`;

const Bottom = styled.div`
  border-radius: 40px;
  border: 2px solid var(--unnamed, #12151c);
  background: #fff;
  width: 90%;
  height: 90%;
  margin-top: 20px;
`;

export function Attach() {
  const [imageUrl, setImageUrl] = useState(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isImageFixed, setIsImageFixed] = useState(false);
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

  const handleFetchImageAndImageClick = async (event) => {
    try {
      const response = await fetch("http://localhost:3001/imgUrl/2");
      const data = await response.json();
      setImageUrl(data.url);
      setImagePosition({ x: event.clientX, y: event.clientY });
      setIsImageVisible(true);
      setIsImageFixed(false); // 이미지 클릭 시, 스티커 고정 상태를 해제
    } catch (error) {
      console.error("이미지 URL 가져오기 오류:", error);
    }
  };

  const handleCheckButtonClick = () => {
    setIsImageFixed(true); // "Check" 버튼 클릭 시, 스티커 고정
  };

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
      {/*  <BackContainer src={Back} />
      <ButtonImg src={Button} /> */}
    </BottomWrap>
  );
}

export default Attach;
