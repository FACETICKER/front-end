import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./Stickers/reducers";
import imageReducer from "./Stickers/imageSlice";

const store = configureStore({
  reducer: {
    app: appReducer, //Stickers
    image: imageReducer,

    /* 아이디, 토큰 추가 */
  },
});
export default store;
