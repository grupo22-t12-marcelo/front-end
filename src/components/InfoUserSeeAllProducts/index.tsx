import { InfoUser } from "./style";
import { Button } from "reactstrap";
import { CircleUser } from "../CircleUser";
import { useProductContext } from "../../contexts/productContext";

const InfoUserSeeAllProducts = () => {
  const { userLogged, photos } = useProductContext();

  return (
    <InfoUser id="info-user">
      <CircleUser nameUser={userLogged} />
      <h3>{userLogged}</h3>
      <p id="text-user">
        {
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        }
      </p>
      <Button>Ver todos os anúncios</Button>
    </InfoUser>
  );
};

export { InfoUserSeeAllProducts };
