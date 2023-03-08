import { Navigate, Route, Routes } from "react-router-dom";
import { ForgotPassword } from "../pages/ForgotPassword";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import { MyVehicles } from "../pages/MyVehicles";
import { Product } from "../pages/Product";
import { Register } from "../pages/Register";
import { UserAnnouncement } from "../pages/UserAnnouncement";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/users/:userId" element={<UserAnnouncement />} />
      <Route path="/my_vehicles" element={<MyVehicles />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default RoutesMain;
