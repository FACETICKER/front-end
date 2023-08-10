import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";

import StickerMainHost from "./page/StickersHost";
import PutPage from "./page/PutPage";

import ClickSticker from "./Stickers/ClickSticker";

import StickerMenu from "./Stickers/StickerMenu";
import Reposition from "./Stickers/Reposition";

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
          <Route path="put" element={<PutPage />} />
          {/*스티커 붙이기 방문자 */}
          <Route path="hoststicker" element={<StickerMainHost />} />
          {/*스티커 호스트 */}
          <Route path="clicksticker" element={<ClickSticker />} />
          {/*호스트가 스티커 클릭할 때 */}

          <Route path="/stickermenu" element={<StickerMenu />} />
          {/*스티커 메뉴 */}
          <Route path="/repositionsticker" element={<Reposition />} />
          {/*스티커 재배치 */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
