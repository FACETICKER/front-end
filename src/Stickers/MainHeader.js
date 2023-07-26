import styled from "styled-components";
import "../src/font/font.css";
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
  background: linear-gradient(180deg, #ffd25d 0%, #ff984b 100%);
`;

const HeaderWrap = styled.div`
  height: 10%;
  justify-content: center;
  align-item: center;
  display: flex;
`;
const Header = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  margin: auto;
  flex-direction: row;
  justify-content: space-around;
`;
const HeaderIcon = styled.div`
  width: 15%;
  justify-content: center;
  align-item: center;
  display: flex;
`;
const LogoWrap = styled.div`
  justify-content: center;
  align-item: center;
  display: flex;
  width: 70%;
`;
const Logo = styled.div`
  margin: auto;
  font-family: "LotteriaChab";
  color: #ff6d00;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 83.333% */
`;

const style = {
  margin: "auto",
};

export function MainHeader() {
  return (
    <HeaderWrap>
      <Header>
        <HeaderIcon>
          <img
            style={style}
            src="https://i.ibb.co/Nmkyggf/gear-settings.png"
            alt="setting-icon"
          />
        </HeaderIcon>
        <LogoWrap>
          <Logo>FACETICKER</Logo>
        </LogoWrap>

        <HeaderIcon>
          <img
            style={style}
            src="https://i.ibb.co/cckXYTB/ChatIcon.png"
            alt="ChatIcon"
          />
        </HeaderIcon>
      </Header>
    </HeaderWrap>
  );
}

export default MainHeader;
