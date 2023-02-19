import {} from "reactstrap";
import {
  CardSubtitle,
  CardTitle,
  Container,
  ImageVehicle,
  InfosVehicle,
  UserContainer,
} from "./styles";

const CardVehicle = () => {
  return (
    <Container>
      <ImageVehicle>
        <img alt="Sample" src="https://picsum.photos/300/200" />
      </ImageVehicle>

      <CardTitle>
        Product title stays here - max 1 line and more things
      </CardTitle>

      <CardSubtitle>
        Lorem ispum is simply dummy text of the printing and typesetting
        industry. Lorem ispum is simply dummy
      </CardSubtitle>

      <UserContainer>
        <div>
          <p>SL</p>
        </div>
        <h5>Samuel Leão</h5>
      </UserContainer>

      <InfosVehicle>
        <div className="infoDiv">
          <p>0 km</p>
          <p>2019</p>
        </div>
        <span>R$ 00.000,00</span>
      </InfosVehicle>
    </Container>
  );
};

export { CardVehicle };
