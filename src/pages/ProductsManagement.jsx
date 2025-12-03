import React from "react";
import Header from "../components/layouts/Header";
import ProductsToolbar from "../components/layouts/ProductsToolbar";
import Products from "../components/layouts/Products";

function ProductsManagement() {
  return (
    <div className=" flex flex-col items-center w-full p-8">
      <Header />
      <ProductsToolbar />
      <Products />
    </div>
  );
}

export default ProductsManagement;
