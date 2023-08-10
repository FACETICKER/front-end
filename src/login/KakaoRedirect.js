import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "../font/font.css";
import spinner from "../img/loginImg/spinner.gif";
import { BarLoader } from "react-spinners";

export function KakaoRedirect() {
  console.log("12");
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  useEffect(() => {
    fetch(`http://faceticker.site/login/kakao?code=${code}`, {
      method: "POST",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.result.user_id);
        console.log(data.result.jwt);
        navigate("./newuserflow");
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);

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
