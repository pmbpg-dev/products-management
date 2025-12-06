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

export const fetchProducts = (page) =>
  api.get(`products?page=${page}&limit=10`);

export const deleteProducts = (id) => api.delete(`products/${id}`);

export const postProduct = (data) => api.post("products", data);

export const editProduct = (data, id) => api.put(`products/${id}`, data);
