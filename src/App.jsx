import { Routes, BrowserRouter, Route, useLocation } from "react-router";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NotFounded from "./pages/404";
import ProductsManagement from "./pages/ProductsManagement";
import { AnimatePresence, motion } from "motion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Toaster } from "sonner";

function App() {
  const queryClient = new QueryClient();
  const location = useLocation();
  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence mode="wait">
        <Toaster position="top-right" />
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProductsManagement />
              </motion.div>
            }
          />
          <Route
            path="/login"
            element={
              <motion.div
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 300 }}
              >
                <SignIn />
              </motion.div>
            }
          />
          <Route
            path="/register"
            element={
              <motion.div
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 300 }}
              >
                <SignUp />
              </motion.div>
            }
          />
          <Route path="/*" element={<NotFounded />} />
        </Routes>
      </AnimatePresence>
    </QueryClientProvider>
  );
}

export default App;
