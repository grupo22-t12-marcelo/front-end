import { InfoUser } from "./style";
import { Button } from "reactstrap";

const InfoUserSeeAllProducts = (props: any) => {
  return (
    <InfoUser>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <Button>Ver todos os anúncios</Button>
    </InfoUser>
  );
};

export { InfoUserSeeAllProducts };
