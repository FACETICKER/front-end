import React, { useEffect, useState } from "react";
import "./Loginpage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogintype } from "./LoginSlice";
import STICKER from "../MakeSticker/STICKER";

const G_CLIENT_ID = process.env.REACT_APP_G_CLIENT_ID;
const K_REST_API_KEY = process.env.REACT_APP_K_REST_API_KEY;

const K_REDIRECT_URI = `http://localhost:3000/oauth`;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;
const code = new URL(window.location.href).searchParams.get("code");

const googleRedirectUrl = `http://localhost:3000/auth`;
const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${G_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${googleRedirectUrl}`;

const Loginpage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  const handleGoogleLogin = () => {
    window.location.href = googleURL;
  };

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
