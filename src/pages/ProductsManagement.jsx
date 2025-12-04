import { useEffect, useState } from "react";
import Header from "../components/layouts/Header";
import ProductsToolbar from "../components/layouts/ProductsToolbar";
import Products from "../components/layouts/Products";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, setProducts } from "../feature/productsSlice";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/config";

function ProductsManagement() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const store = useSelector(selectProducts);
  const dispatch = useDispatch();

  const data = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProducts(page).then((res) => res),
    onSuccess: (dtat) => {
      dispatch();
    },
  });

  useEffect(() => {}, []);
  return (
    <div className=" flex flex-col items-center w-full p-8">
      <Header />
      <ProductsToolbar />
      <Products />
    </div>
  );
}

export default ProductsManagement;
