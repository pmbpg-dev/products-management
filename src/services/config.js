import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({ baseURL: "http://localhost:3000/" });
export default api;
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

export const fetchLogin = async (object) =>
  await api.post("auth/login", object);
export const fetchRegister = async (object) =>
  await api.post("auth/register", object);

export const fetchProducts = (page) =>
  api.get(`products?page=${page}&limit=10`);

export const deleteProducts = (id) => api.delete(`products/${id}`);
