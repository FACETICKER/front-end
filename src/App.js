import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { NicknameSetting } from "./pages/NicknameSetting";
import { GuestBook } from "./pages/GuestBook";
import StatusMessage from "./pages/StatusMessage";
import InitialSurvey from "./pages/InitialSurvey";
import MainpageVisit from "./pages/MainpageVisit";
import MakeSticker from "./pages/MakeSticker";
import MainpageHost from "./pages/MainpageHost";
import QnApage from "./pages/QnApageMain";
import StickerMainHost from "./pages/StickersHost";
import PutPage from "./pages/PutPage";
import StickerName from "./pages/StickerName";

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
          <Route path="/nickname" element={<NicknameSetting />} />
          {/* 닉네임 설정 페이지 */}
          <Route path="/guest" element={<GuestBook />} />
          {/* 방명록 작성 페이지 */}
          <Route path="/status" element={<StatusMessage />} />
          {/* 호스트가 남기고 싶은 말 페이지 */}
          <Route path="/initial" element={<InitialSurvey />} />
          {/* 초기 설정 */}
          <Route path="/mainvisit" element={<MainpageVisit />} />
          {/*방문자 메인페이지 */}
          <Route path="/mainhost" element={<MainpageHost />} />
          {/*방문자 메인페이지 */}
          <Route path="/makesticker" element={<MakeSticker />} />
          {/*스티커 제작 페이지 */}
          <Route path="/qna" element={<QnApage />} />
          {/*질문답변 */}
          <Route path="put" element={<PutPage />} />
          {/*스티커 붙이기 방문자 */}
          <Route path="host" element={<StickerMainHost />} />
          {/*스티커 호스트 */}
          <Route path="stickername" element={<StickerName />} />
          {/*스티커 호스트 */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
