import { InfoUser } from "./style";
import { Button } from "reactstrap";
import { CircleUser } from "../CircleUser";

const InfoUserSeeAllProducts = (props: any) => {
  return (
    <InfoUser id="info-user">
      <CircleUser nameUser={props.nameUser} />
      <h3>{props.title}</h3>
      <p id="text-user">{props.text}</p>
      <Button>Ver todos os anúncios</Button>
    </InfoUser>
  );
};

export { InfoUserSeeAllProducts };
