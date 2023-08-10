import styled from "styled-components";

import { useEffect, useState } from "react";

const ButtonWrap = styled.div`
  height: 30%;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const Footer = styled.div`
  border-radius: 40px 40px 0px 0px;
  border: 2px solid var(--unnamed, #12151c);
  background: #fff;
  width: 90%;
  height: 90%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;
const Icon = styled.img`
  max-height: 50px;
  display: flex;
`;

export function VisitFooter() {
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
    <ButtonWrap>
      <Footer>
        <Icon src="https://i.ibb.co/R20fGKK/Group-184.png" />
        <Icon
          onClick={handleCheckButtonClick}
          src="https://i.ibb.co/jzV1rX7/Group-183.png"
        />
      </Footer>
    </ButtonWrap>
  );
}

export default VisitFooter;
