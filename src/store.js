import { configureStore } from "@reduxjs/toolkit";

import StickerSlice from "./MakeSticker/StickerSlice";
import MS_PopupSlice from "./MakeSticker/PopupSlice";

const store = configureStore({
  reducer: {
    /* 아이디, 토큰 추가 */

    sticker: StickerSlice.reducer, //  총 저장소
    popup: MS_PopupSlice.reducer, // 팝업창 onoff 저장소
  },
});
export default store;
