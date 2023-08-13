import { createSlice } from "@reduxjs/toolkit";

const StickerSlice = createSlice({
  name: "stickerslice",
  initialState: {
    step: 0,
    face: 0,
    eyes: 0,
    nose: 0,
    mouth: 0,
    hand: 0,
    foot: 0,
    accessory: 0,
  },
  reducers: {
    update: (state, action) => {
      const first = action.payload[0];
      const second = action.payload[1];
      state[first] = second;
    }, // 예를 들어 dispatch(StickerSlice.actions.update([face, 1]))을 하면 face값이 1로 바뀜
    stepcontrol: (state, action) => {
      {
        action.payload ? state.step++ : state.step--;
      }
    }, // true 값 주면 step 값 1 올리고 false 값 주면 1 내림
  },
});
export default StickerSlice;

// 변수 저장소
