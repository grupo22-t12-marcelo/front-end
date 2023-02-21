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

interface ICardAuction {
  image: string;
  title: string;
  subtitle: string;
  abrevUser: string;
  nameUser: string;
  kmCar: number;
  yearCar: number;
  priceCar: number;
}

const CardAuction = ({
  image,
  title,
  subtitle,
  abrevUser,
  nameUser,
  kmCar,
  yearCar,
  priceCar,
}: ICardAuction) => {
  const { count } = useProductContext();

  return (
    <Container>
      <Card inverte="true" className="card">
        <CardImg src={image} style={{ height: 330 }} />
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
            <CardTitle>{title}</CardTitle>

            <CardSubtitle>{subtitle}</CardSubtitle>
          </Description>

          <UserContainer>
            <div className="abrevName">
              <p> {abrevUser} </p>
            </div>
            <h5> {nameUser} </h5>
          </UserContainer>

          <InfosVehicle>
            <div className="infoDiv">
              <p>{kmCar} km </p>
              <p> {yearCar} </p>
            </div>
            <span>R$ {priceCar} </span>
          </InfosVehicle>
        </CardImgOverlay>
      </Card>
      <div className="divRedirectsToAuction">
        <p>Acessar página do leilão</p>

        <BsArrowRight className="arrowRight" size={30} color="white" />
      </div>
    </Container>
  );
};

export { CardAuction };
