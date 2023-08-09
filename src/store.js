import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./Stickers/reducers";

const store = configureStore({
  reducer: {
    app: appReducer, //Stickers

    /* 아이디, 토큰 추가 */
  },
});
export default store;
