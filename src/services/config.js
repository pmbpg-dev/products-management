import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({ baseURL: "http://localhost:3000/" });
export default api;
// ===============interceptors==================
api.interceptors.request.use(
  (req) => {
    const token = Cookies.get("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const fetchLogin = (data) => api.post("auth/login", data);

export const fetchRegister = (data) => api.post("auth/register", data);

export const fetchProducts = async (page) => {
  try {
    const res = await api.get(`products?page=${page}&limit=10`);
    return res;
  } catch (err) {
    if (err.response?.status === 400) {
      return {
        data: {
          totalProducts: 0,
          page: 0,
          limit: 0,
          totalPages: 0,
          data: [],
        },
      };
    }
    throw err;
  }
};

export const deleteProducts = (id) => api.delete(`products/${id}`);

export const postProduct = (data) => api.post("products", data);

export const editProduct = (data) => {
  api.put(`products/${data.id}`, data);
};
export const bulkDeleteProducts = (ids) => {
  api.delete("products", { data: { ids } });
};
