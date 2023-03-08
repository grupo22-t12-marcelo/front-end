import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Div } from "./styles";
import { useSessionContext } from "../../contexts/sessionContext";

const ProtectedRoutes = () => {
  const { userData, loading } = useSessionContext();
  const location = useLocation();

  if (loading) {
    return (
      <Div>
        <AiOutlineLoading3Quarters />
      </Div>
    );
  }

  return userData.type_account === "Anunciante" ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export { ProtectedRoutes };
