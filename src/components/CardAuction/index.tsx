import { useProductContext } from "../../contexts/productContext";
import { countAuction } from "../../utils/countAuction";
import {
  CardSubtitle,
  Container,
  Description,
  InfosVehicle,
  TimerAuction,
  UserContainer,
  CardTitle,
} from "./styles";
import car from "../../assets/car1.png";
import { FiClock } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { Card, CardImg, CardImgOverlay } from "reactstrap";

const CardAuction = () => {
  const { count } = useProductContext();

  return (
    <Container>
      <Card inverte="true" className="card">
        <CardImg src={car} style={{ height: 330 }} />
        <CardImgOverlay className="cardInfos">
          <TimerAuction>
            <FiClock color="blue" size={20} />
            {count === "00:00:00" ? (
              <p>Timeout</p>
            ) : (
              <time>{countAuction()}</time>
            )}
          </TimerAuction>

          <Description>
            <CardTitle>
              Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
            </CardTitle>

            <CardSubtitle>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum is the dummy
            </CardSubtitle>
          </Description>

          <UserContainer>
            <div>
              <p>SL</p>
            </div>
            <h5>Samuel Leão </h5>
          </UserContainer>

          <InfosVehicle>
            <div className="infoDiv">
              <p> 0 km </p>
              <p> 2013 </p>
            </div>
            <span>R$ 100.000,00 </span>
          </InfosVehicle>
        </CardImgOverlay>
      </Card>
      <div className="divRedirectsToAuction">
        <p>Acessar página do leilão</p>

        <BsArrowRight size={30} color="white" />
      </div>
    </Container>
  );
};

export { CardAuction };
