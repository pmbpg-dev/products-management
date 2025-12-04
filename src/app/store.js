import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../feature/productsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  devTools: true,
});

export default store;
