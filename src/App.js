import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";

import Loginpage from "./login/Loginpage";

import Redirect from "./login/KakaoRedirect";

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

          <Route path="/oauth" element={<Redirect />} />
          {/*kakao Redirect 화면 */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
