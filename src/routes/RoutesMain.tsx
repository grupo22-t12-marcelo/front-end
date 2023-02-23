import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Product } from "../pages/Product";
import { UserAnnouncement } from "../pages/UserAnnouncement";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="users" element={<UserAnnouncement />} />
    </Routes>
  );
};

export default RoutesMain;
