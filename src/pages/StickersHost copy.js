import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Host } from "../Stickers/Host";
import ClickSticker from "../Stickers/ClickSticker";

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

/*  height: calc(var(--vh, 1vh) * 100);*/

//BackgroundWrap : 가로 길어졌을 때 Background는 고정. 나머지 영역에 보이게 할 색/이미지 설정
const BackgroundWrap = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  background: linear-gradient(180deg, #ffd25d 0%, #ff984b 100%);
`;
//Background : 모바일로 보이는 영역
const Background = styled.div`
  max-width: 680px;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #ffd25d 0%, #ff984b 100%);
`;

export function MainpageHost() {
  const page = useSelector((state) => {
    return state.stickerpage;
  });
  return (
    <BackgroundWrap>
      <Background>
        {page === "stickers" && <Host />}
        {page === "clicksticker" && <ClickSticker />}
        <Host />
      </Background>
    </BackgroundWrap>
  );
}

export default MainpageHost;
