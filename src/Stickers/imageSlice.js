import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedImageId: null,
  images: [],
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setSelectedImage: (state, action) => {
      state.selectedImageId = action.payload;
    },

    setSelectedImage2: (state, action) => {
      state.selectedImageId2 = action.payload;
    },
    setImages: (state, action) => {
      state.images = action.payload;
    },
  },
});

export const { setSelectedImage, setImages, setSelectedImage2 } =
  imageSlice.actions;
export default imageSlice.reducer;
