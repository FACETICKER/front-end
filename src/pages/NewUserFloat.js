import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import "../style/NewUserFloat.css";
import ReactDOM from "react-dom";
import Picker from "react-mobile-picker-scroll";
import mini1 from "../img/NewUserFloat_img/mini1.png";
import mini2 from "../img/NewUserFloat_img/mini2.png";
import { useNavigate } from "react-router-dom";
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>;

function NewUserFloat() {
  const navigate = useNavigate();
  const BackgroundWrap = styled.div`
    background: #fefaef;
  `;
  const Background = styled.div`
    height: calc(var(--vh, 1vh) * 100);
    max-width: 37.5rem;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    background: #fefaef;
    position: relative;
    left: 40px;
  `;
  const P = styled.div`
    color: #191919;
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 111.111% */
  `;
  const handleButtonClick = () => {
    navigate("/initial");
  };

  return (
    <BackgroundWrap>
      <Background>
        <div className="l1-4">
          <p>FACETICKER</p>
        </div>
        <div className="l7-4">
          <div className="l2-4">
            <p>
              나만의 페이스티커를 통해 자신을 표현하고 친구들에게 궁금한 점을
              묻고 답하며 자유롭게 소통해보세요.
            </p>
          </div>
          <div>
            <div className="l3-4">
              <img className="l3-4" src={mini1}></img>
            </div>
            <div className="l4-4">
              <img className="l4-4" src={mini2}></img>
            </div>
          </div>
          <div className="l6-4"></div>
        </div>
        <div>
          <button className="l5-4" onClick={handleButtonClick}>
            <P>시작하기</P>
          </button>
        </div>
      </Background>
    </BackgroundWrap>
  );
}

export default NewUserFloat;
