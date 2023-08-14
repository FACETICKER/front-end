import {createSlice} from '@reduxjs/toolkit';

const NextLoginList = createSlice({
  name: 'nextLoginList',
  initialState: {
      stickeris: 0,
      questionis: 0,
  },
  reducers: {
      update: (state, action) => {
        const first = action.payload[0];
        const second = action.payload[1];
        state[first] = second; 
      },
  },
});

export const { update } = NextLoginList.actions;

export default NextLoginList;