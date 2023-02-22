import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Product } from "../pages/Product";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
};

export default RoutesMain;
