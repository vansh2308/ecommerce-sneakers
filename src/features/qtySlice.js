import { createSlice } from "@reduxjs/toolkit";

export const qtySlice = createSlice({
  name: "qty",
  initialState: {
    value: 0
  },
  reducers: {
    setQty: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { increment, decrement, setQty } = qtySlice.actions
export default qtySlice.reducer