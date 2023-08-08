import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";

import StickerLetter from "./Nickname/StickerLetter";
import StickerName from "./Nickname/StickerName";

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
          <Route path="/stickername" element={<StickerName />} />
          {/* 방문자 스티커 네임 설정 */}
          <Route path="/stickerletter" element={<StickerLetter />} />
          {/*방문자 방명록 설정 */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
