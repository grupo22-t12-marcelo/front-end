import { InfoUser } from "./style";
import { Button } from "reactstrap";
import { CircleUser } from "../CircleUser";
import { useProductContext } from "../../contexts/productContext";
import { useNavigate, useParams } from "react-router-dom";
import { useSessionContext } from "../../contexts/sessionContext";

const InfoUserSeeAllProducts = () => {
  const { userLogged, photos, oneVehicle } = useProductContext();
  const { userData } = useSessionContext();

  let { userId } = useParams();

  userId = oneVehicle.user?.id;

  const navigate = useNavigate();

  return (
    <InfoUser id="info-user">
      <CircleUser />
      <h3>{oneVehicle.user?.name}</h3>
      <p id="text-user">{oneVehicle.user?.description}</p>
      <Button onClick={() => navigate(`/users/${userId}`)}>
        Ver todos os anúncios
      </Button>
    </InfoUser>
  );
};

export { InfoUserSeeAllProducts };
