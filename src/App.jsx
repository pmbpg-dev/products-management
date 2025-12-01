import { Routes, BrowserRouter, Route } from "react-router";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NotFounded from "./pages/404";
import ProductsManagement from "./pages/ProductsManagement";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsManagement />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<NotFounded />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
