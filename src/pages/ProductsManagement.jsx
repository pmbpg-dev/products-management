import { useEffect, useState } from "react";
import Header from "../components/layouts/Header";
import ProductsToolbar from "../components/layouts/ProductsToolbar";
import Products from "../components/layouts/Products";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, setProducts } from "../feature/productsSlice";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { fetchProducts } from "../services/config";
import { useNavigate, useSearchParams } from "react-router";
import Pagination from "../components/layouts/Pagination";

function ProductsManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase() || "";

  const { data } = useQuery({
    queryKey: ["products", currentPage],
    queryFn: async () => await fetchProducts(currentPage).then((res) => res),
  });
  useEffect(() => {
    const isToken = Cookies.get("token");
    if (!isToken) navigate("/login");
    if (data?.data?.data) {
      dispatch(setProducts(data.data.data));
      setTotalPage(data.data.totalPages);
    }
  }, [data, dispatch]);

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search)
  );

  return (
    <div className=" flex flex-col items-center w-full p-8">
      <Header />
      <ProductsToolbar />
      <Products filtered={filtered} />
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default ProductsManagement;
