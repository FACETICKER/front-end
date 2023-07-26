import styled from "styled-components";
import QnApage from './QnApage';
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
  z-index: -1;
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
`;

const style = {
  margin: "auto",
};

export function Mainpage() {
  return (
    <BackgroundWrap>
      <Background>
        <QnApage/>
      </Background>
    </BackgroundWrap>
  );
}

export default Mainpage;
