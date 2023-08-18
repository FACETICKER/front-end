import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import "../font/font.css";
import { BarLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { setAlreadyuser, setId, setToken } from "./LoginSlice";
import axios from "axios";

const BackgroundWrap = styled.div`
  background: #fefaef;
`;
//Background : 모바일로 보이는 영역
const Background = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  max-width: 37.5rem;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  background: #fefaef;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Text1 = styled.div`
  height: 10%;
  color: rgba(25, 25, 25, 0.8);
  text-align: center;
  display: flex;
  font-family: "Pretendard";
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
`;

export function KakaoRedirect() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const code = new URL(window.location.href).searchParams.get("code"); //인가코드 추출

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(
          `http://app.faceticker.site/login/kakao?code=${code}`
        );
        const resdata = response.data;
        console.log(resdata.message);
        if (resdata.message == "이미 가입된 사용자입니다") {
          dispatch(setAlreadyuser(true));
        }

        // 토큰, 아이디 저장

        dispatch(setId(resdata.result.user_id));
        dispatch(setToken(resdata.result.jwt));

        navigate("/welcome");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [code, dispatch]);

  return (
    <BackgroundWrap>
      <Background>
        <Text1>Loading</Text1>
        <BarLoader color="rgba(25, 25, 25, 0.8)" />
      </Background>
    </BackgroundWrap>
  );
}
export default KakaoRedirect;
