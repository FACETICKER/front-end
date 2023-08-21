import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";

import NewUserFlow from "./initial/NewUserFlow.js";
import StatusMessage from "./hostStatus/StatusMessage";
import InitialSurvey from "./initial/InitialSurvey";
import MainpageVisit from "./initial/MainpageVisit";
import MakeSticker from "./page/MakeSticker";
import MainpageHost from "./initial/MainpageHost";
import QnApage from "./page/QnApageMain";
import StickerMainHost from "./page/StickersHost";
import PutPage from "./page/PutPage";
import VisitorSticker from "./Stickers/Visitor";
import Loginpage from "./page/LoginpageMain";
import ClickSticker from "./Stickers/ClickSticker";
import Redirect from "./login/KakaoRedirect";
import StickerMenu from "./Stickers/StickerMenu";
import StickerLetter from "./Nickname/StickerLetter";
import StickerName from "./Nickname/StickerName";
import Reposition from "./Stickers/Reposition";
import GoogleRedirect from "./login/GoogleRedirect";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          {/*로그인 페이지 */}
          {<Route path="/oauth" element={<Redirect />} />}
          {/*kakao Redirect 화면 */}
          {<Route path="/auth" element={<GoogleRedirect />} />}
          {/*kakao Redirect 화면 */}
          {<Route path="/welcome" element={<NewUserFlow />} />}
          {/*신규 가입자 플로우 */}
          <Route path="/initial" element={<InitialSurvey />} />
          {/* 초기 설정 */}
          <Route path="/main/:userId" element={<MainpageVisit />} />
          {/*방문자 메인페이지 */}
          <Route path="/main/host/:userId" element={<MainpageHost />} />
          {/*호스트 메인페이지 */}
          <Route path="/stickername/:visitorId" element={<StickerName />} />
          {/* 방문자 스티커 네임 설정 */}
          <Route path="/stickerletter/:visitorId" element={<StickerLetter />} />
          {/*방문자 방명록 설정 */}
          <Route path="/status" element={<StatusMessage />} />
          {/* 호스트가 남기고 싶은 말 페이지 */}
          <Route path="/makesticker" element={<MakeSticker />} />
          {/*스티커 제작 페이지 */}
          <Route path="/qna" element={<QnApage />} />
          {/*질문답변 */}
          <Route path="/put/:visitorId" element={<PutPage />} />
          {/*스티커 붙이기 방문자 */}
          <Route path="/sticker/:userId" element={<VisitorSticker />} />
          {/*스티커 방문자 */}
          <Route path="/sticker/host/:userId" element={<StickerMainHost />} />
          {/*스티커 호스트 */}
          <Route
            path="/sticker/host/:userId/click"
            element={<ClickSticker />}
          />
          {/*호스트가 스티커 클릭할 때 */}
          <Route path="/sticker/host/:userId/menu" element={<StickerMenu />} />
          {/*스티커 메뉴 */}
          <Route
            path="/sticker/host/:userId/reposition"
            element={<Reposition />}
          />
          {/*스티커 재배치 */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
