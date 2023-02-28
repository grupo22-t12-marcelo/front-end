import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Product } from "../pages/Product";
import { Register } from "../pages/Register";
import { UserAnnouncement } from "../pages/UserAnnouncement";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/users/:userId" element={<UserAnnouncement />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default RoutesMain;
