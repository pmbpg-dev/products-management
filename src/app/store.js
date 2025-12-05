import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../feature/productsSlice";
import uiReducer from "../feature/uiSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    ui: uiReducer,
  },
  devTools: true,
});

export default store;
