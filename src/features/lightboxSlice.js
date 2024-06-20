import { createSlice } from "@reduxjs/toolkit";


export const lightboxSlice = createSlice({
  name: "lightboxDisplay",
  initialState: {
    value: false
  },
  reducers: {
    setDisplay: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setDisplay } = lightboxSlice.actions
export default lightboxSlice.reducer