import { createSlice } from "@reduxjs/toolkit";

export const acitveImgSlice = createSlice({
  name: "activeImg",
  initialState: {
    value: 0
  },
  reducers: {
    setActive: (state, action) => {
      state.value = action.payload
    },
    increment: (state) => {
      state.value = (state.value + 1)%4;
    },
    decrement: (state) => {
      state.value = (state.value - 1 + 4)%4;
    }
    
  }
})

export const { increment, decrement, setActive } = acitveImgSlice.actions
export default acitveImgSlice.reducer