import styled from "styled-components";
import "../font/font.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

//var(--vh, 1vh) : 1vh 생략 가능. --vh 안 되면 1vh
//브라우저 상단, 하단 메뉴 때문에 개발자 도구에서 보는 뷰포트 높이와 다름
//현재 뷰포트 높이 가져와서 쓰기(App.js App함수 return 위에 꼭 함수 추가해주기)
/*
function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
 */

//BackgroundWrap : 가로 길어졌을 때 Background는 고정. 나머지 영역에 보이게 할 색/이미지 설정
const BackgroundWrap = styled.div`
  background: linear-gradient(180deg, #ffd25d 0%, #ff984b 100%);
`;
//Background : 모바일로 보이는 영역
const Background = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  max-width: 37.5rem;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  background: white;
`;

const HeaderWrap = styled.div`
  height: 10%;
  justify-content: center;
  align-item: center;
  display: flex;
  background-color: white;
  border: none;
`;
const Header = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  margin: auto;
  flex-direction: row;
  justify-content: left;
`;
const HeaderIcon = styled.div`
  width: 20%;
  justify-content: center;
  align-item: center;
  display: flex;
`;

const style = {
  margin: "auto",
};

const Middle = styled.div`
  height: 20%;
  display: flex;
  background-color: #ffd25e;
  border: 0px;
`;
const TextWrap = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-item: center;
  border-bottom-right-radius: 50px;
  background-color: white;
  height: 100%;
  width: 100%;
  padding-left: 8%;
`;

const Text1 = styled.div`
  text-align: left;
  color: #191919;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
`;

const BottomWrap = styled.div`
  background-color: white;
  height: 70%;
  justify-content: center;
  align-item: center;
  display: flex;
  border: 0px;
`;

const Bottom = styled.div`
  background-color: #ffd25e;
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  border-top-left-radius: 50px;
  flex-direction: column;
`;

const CheckIcon = styled.img`
  max-height: 60px;
  position: absolute;
  top: -30px;
  right: 20px;
  z-index: 1;
`;
const ImgWrap = styled.div`
  height: 60%;
  justify-content: center;
  align-item: center;
  display: flex;
`;

const InputWrap = styled.div`
  height: 20%;
  justify-content: center;
  margin-top: 20px;
  display: flex;
  position: relative;
`;
const InputImgWrap = styled.div`
  justify-content: center;
  align-item: center;
  display: flex;
`;

const Input = styled.textarea`
  display: flex;
  position: absolute;
  width: 50%;
  height: 50%;
  text-align: center;
  color: #191919;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 140% */
  background-color: transparent;
  left: 25%;
  top: 20%;
  border: none;
  outline: none;
`;

export function StatusMessage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hideImg, setHideImg] = useState(true);
  const [Margin, setMargin] = useState("0%");
  const [statusValue, setStatusValue] = useState("");

  //입력값 저장
  const saveStatus = (event) => {
    setStatusValue(event.target.value);
  };

  const headers = {
    "x-access-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VyX2VtYWlsIjoic3UxMGppbjExQGhhbm1haWwubmV0IiwiaWF0IjoxNjkxMjQ4ODY2LCJleHAiOjE2OTEyNTI0NjZ9.-3O7LBYGWPaQO-nvBa6jywLkjkXmFSJhJ-UaXUvysWA",
    "Content-Type": "application/json",
  };

  const handleStatusSubmit = () => {
    fetch("https://faceticker.site/app/3/sticker/message?type=host", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ message: statusValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("성공", data);
      })
      .catch((error) => {
        console.error("실패", error);
      });
    navigate("/mainhost"); //호스트 메인페이지로 이동 */
  };

  //서버에서 값 받아오기
  useEffect(() => {
    fetch("https://faceticker.site/app/3/sticker/message?type=host")
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          setStatusValue(data.status);
        }
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);

  const handleClickInput = () => {
    setHideImg(false);
    setMargin("10%");
  };
  const handleSecondBack = () => {
    setHideImg(true);
    setMargin("0%");
  };
  const handleFirstBack = () => {
    navigate(-1);
  };

  return (
    <BackgroundWrap>
      <Background>
        <HeaderWrap>
          <Header>
            <HeaderIcon>
              {hideImg && (
                <img
                  onClick={handleFirstBack}
                  style={style}
                  src="https://i.ibb.co/rdqkHHs/arrow-left.png"
                  alt="setting-icon"
                />
              )}
              {!hideImg && (
                <img
                  onClick={handleSecondBack}
                  style={style}
                  src="https://i.ibb.co/rdqkHHs/arrow-left.png"
                  alt="setting-icon"
                />
              )}
            </HeaderIcon>
          </Header>
        </HeaderWrap>
        <Middle>
          <TextWrap>
            <Text1>방문자들에게</Text1>
            <Text1>하고 싶은 말을 남겨보세요!</Text1>
          </TextWrap>
        </Middle>

        <BottomWrap>
          <Bottom>
            {!hideImg && (
              <CheckIcon
                onClick={handleStatusSubmit}
                src="https://i.ibb.co/PrmpgLr/Group-74.png"
              />
            )}
            {hideImg && (
              <ImgWrap>
                <img
                  style={style}
                  src="https://i.ibb.co/r4qpQzX/Love-Letter.png"
                />
              </ImgWrap>
            )}

            <InputWrap margin={Margin} onClick={handleClickInput}>
              <InputImgWrap>
                <img src="https://i.ibb.co/B4Y5jgG/Group-69.png" />
              </InputImgWrap>

              <Input
                onChange={saveStatus}
                value={statusValue}
                placeholder="30자 이내로 작성"
                maxLength={"30"}
              ></Input>
            </InputWrap>
          </Bottom>
        </BottomWrap>
      </Background>
    </BackgroundWrap>
  );
}

export default StatusMessage;
