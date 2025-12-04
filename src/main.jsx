import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./app/store.js";
// =========axios interceptors ==============
axios.interceptors.request.use(
  (req) => {
    req.headers.Authorization = "token";
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </StrictMode>
);
