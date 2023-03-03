import { InfoUser } from "./style";
import { Button } from "reactstrap";
import { CircleUser } from "../CircleUser";
import { useProductContext } from "../../contexts/productContext";
import { useNavigate, useParams } from "react-router-dom";
import { useSessionContext } from "../../contexts/sessionContext";

const InfoUserSeeAllProducts = () => {
  const { userLogged, photos } = useProductContext();
  const { userData } = useSessionContext();

  let { userId } = useParams();

  userId = "a5c64a3b-a7b9-4454-a984-9d24aa23c35e";

  const navigate = useNavigate();

  return (
    <InfoUser id="info-user">
      <CircleUser />
      <h3>{userData.name}</h3>
      <p id="text-user">
        {
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        }
      </p>
      <Button onClick={() => navigate(`/users/${userId}`)}>
        Ver todos os anúncios
      </Button>
    </InfoUser>
  );
};

export { InfoUserSeeAllProducts };
