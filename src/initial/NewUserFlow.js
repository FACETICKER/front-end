import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import "./NewUserFlow.css";
import ReactDOM from "react-dom";
import Picker from "react-mobile-picker-scroll";
import mini1 from "../img/NewUserFlow_img/mini1.png";
import mini2 from "../img/NewUserFlow_img/mini2.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>;

function NewUserFlow() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const handleButtonClick = () => {
    navigate("/initial");
  };

  return (
    <div className="BackgroundWrap">
      <div className="Background">
        <div className="Container">
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
          </div>
          <div>
            <div className="l6-4"></div>
            <button className="l5-4" onClick={handleButtonClick}>
              <p>시작하기</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUserFlow;
