import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3000/" });
export default api;

export const fetchLogin = async (object) =>
  await api.post("auth/login", object);
export const fetchRegister = async (object) =>
  await api.post("auth/register", object);
