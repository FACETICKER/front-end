import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import "../font/font.css";
import { BarLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";

import { setLoginData } from "./LoginSlice";

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
  const dispatch = useDispatch;

  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const [id1, setId1] = useState(null);
  const [Token1, setToken1] = useState(null);

  useEffect(() => {
    fetch(`http://app.faceticker.site/login/kakao?code=${code}`, {
      method: "POST",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.result.user_id);
        console.log(data.result.jwt);

        setId1(data.result.user_id);
        setToken1(data.result.jwt);
        console.log("dispatch 전");

        /* dispatch(
          setLoginData({ id: data.result.user_id, token: data.result.jwt })
        ); */
        console.log("dispatch 후");
        navigate("/makesticker");
      })

      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);

  console.log("id", id1);
  console.log("token", Token1);

  console.log("5");

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
