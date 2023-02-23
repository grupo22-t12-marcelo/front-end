import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Product } from "../pages/Product";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/product/:productId" element={<Product />} />
    </Routes>
  );
};

export default RoutesMain;
