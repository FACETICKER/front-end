import { createSlice } from "@reduxjs/toolkit";

const positionSlice = createSlice({
  name: "positionSlice",
  initialState: {
    x: 0,
    y: 0,
  },
  reducers: {
    update: (state, action) => {
      const first = action.payload[0];
      const second = action.payload[1];
      state[first] = second;
    }, // 예를 들어 dispatch(positionSlice.actions.update([x, 1]))을 하면 x값이 1로 바뀜
  },
});
export default positionSlice;

// 변수 저장소
