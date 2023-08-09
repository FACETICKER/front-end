import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";

import MakeSticker from "./page/MakeSticker";

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
          <Route path="/makesticker" element={<MakeSticker />} />
          {/*스티커 제작 페이지 */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
