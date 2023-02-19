import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Container, UserContainer } from "./styles";

const CardVehicle = () => {
  return (
    <Container>
      <Card>
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Product title stays here - max 1 line</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Lorem ispum is simply dummy text of the printing and typesetting
            industry
          </CardSubtitle>

          <UserContainer>
            <div>
              <p>SL</p>
            </div>
            <h5>Samuel Leão</h5>
          </UserContainer>

          <div className="infosDiv">
            <div>
              <p>0 km</p>
              <p>2019</p>
            </div>
            <span>R$ 00.000,00</span>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
};

export { CardVehicle };
