import React, { useEffect, useState } from "react";
import "./Loginpage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogintype } from "./LoginSlice";
/* import dotenv from "dotenv";
dotenv.config(); */

const G_CLIENT_ID = process.env.REACT_APP_G_CLIENT_ID;
const K_REST_API_KEY = process.env.REACT_APP_K_REST_API_KEY;

const K_REDIRECT_URI = `http://localhost:3000/oauth`;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;
const code = new URL(window.location.href).searchParams.get("code");

const googleRedirectUrl = `http://localhost:3000/oauth`;
const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${G_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${googleRedirectUrl}`;

const Loginpage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [k, setK] = useState(false);
  const [g, setG] = useState(false);
  const [what, setWhat] = useState();
  const logintype = useSelector((state) => state.login.logintype);

  const [Data, setData] = useState(null);

  const handleKakaoLogin = () => {
    setK(true);

    /*   console.log("1", logintype); */
  };

  const handleGoogleLogin = () => {
    setG(true);

    dispatch(setLogintype());

    console.log("2", logintype);
  };

  console.log("3", logintype);

  const handleURL = () => {
    if (logintype) {
      window.location.href = kakaoURL;
    } else {
      window.location.href = googleURL;
    }
  };

  useEffect(() => {
    if (k) {
      console.log("k", k);
      console.log("g", g);

      window.location.href = kakaoURL;
    } else if (g) {
      console.log("k", k);
      console.log("g", g);

      window.location.href = googleURL;
    }
  }, [k, g]);

  return (
    <div className="background">
      <div className="title">
        <h1 className="logo">FACETICKER</h1>
      </div>
      <div className="buttons">
        <button onClick={handleKakaoLogin} className="KakaoButton"></button>
        <button onClick={handleGoogleLogin} className="GoogleButton"></button>
        <p className="notice">
          로그인시{" "}
          <a className="noline" href="#">
            이용약관
          </a>{" "}
          및{" "}
          <a className="noline" href="#">
            개인정보처리방침
          </a>{" "}
          동의로 간주됩니다.
        </p>
      </div>
    </div>
  );
};

export default Loginpage;
