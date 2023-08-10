import { useEffect } from "react";
import "../font/font.css";
import styled from "styled-components";
import { useState } from "react";

const TextWrap = styled.div`
  justify-content: center;
  align-item: center;
  display: flex;
  height: 8%;
  flex-direction: column;
`;
const Text = styled.div`
  color: #191919;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 30px;
`;

export function MainText() {
  const [nicknameValue, setNicknameValue] = useState("사용자");
  //host 닉네임 값 받아오기
  useEffect(() => {
    fetch("http://localhost:3010/user/1/")
      .then((response) => response.json())
      .then((data) => {
        if (data.nickname) {
          setNicknameValue(data.nickname);
        }
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);
  return (
    <TextWrap>
      <Text>'{nicknameValue}'님의 프로필</Text>
      <Text>방문자를 확인해보세요.</Text>
    </TextWrap>
  );
}
