import { configureStore } from "@reduxjs/toolkit";
import qtyReducer from "./features/qtySlice"
import lightboxDisplayReducer from "./features/lightboxSlice";
import activeImgReducer from "./features/activeImgSlice";

export default configureStore({
  reducer: {
    qty: qtyReducer,
    lightboxDisplay: lightboxDisplayReducer,
    activeImg: activeImgReducer 
  }
})
