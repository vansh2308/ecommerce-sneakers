import { configureStore } from "@reduxjs/toolkit";
import qtyReducer from "./features/qtySlice"

export default configureStore({
  reducer: {
    qty: qtyReducer
  }
})