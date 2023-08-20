import { useEffect } from "react";
import "../font/font.css";
import styled from "styled-components";
import { useState } from "react";
import Idtoken from "./Idtoken";
import { useSelector } from "react-redux";

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

  // userId, 토큰, 방문자가 가지고 온  호스트Id 가져오기
  const hostid = useSelector((state) => state.login.hostid);
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
  const Id = whatType == "host" ? userId : hostid;
  console.log("id", Id);

  //host 닉네임 값 받아오기
  useEffect(() => {
    fetch(`http://app.faceticker.site/${Id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("닉네임", data);
        setNicknameValue(data.result.hostPoster[0].nickname);
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);

  return (
    <TextWrap>
      <Text>'{nicknameValue}'님의 你可昭綏</Text>
      <Text>방문자를 확인해보세요.</Text>
    </TextWrap>
  );
}
