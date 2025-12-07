import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selected: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload.id);
      console.log(state.products);
    },
    toggleSelect: (state, action) => {
      const id = action.payload;
      if (state.selected.includes(id)) {
        state.selected = state.selected.filter((item) => item !== id);
      } else {
        state.selected.push(id);
      }
    },
    clearSelect: (state) => {
      state.selected = [];
    },
    deleteSelected: (state) => {
      state.products = state.products.filter(
        (item) => !state.selected.includes(item.id)
      );
      state.selected = [];
    },
  },
});

export const {
  setProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  toggleSelect,
  clearSelect,
  deleteSelected,
} = productsSlice.actions;
export const selectProducts = (store) => store.products.products;
export const selectProductsDelete = (store) => store.products.selected;

export default productsSlice.reducer;
