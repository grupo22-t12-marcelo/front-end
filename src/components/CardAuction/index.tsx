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
  DivRedirectAuction,
  CardContainer,
} from "./styles";
import { FiClock } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { CardImg, CardImgOverlay } from "reactstrap";
import { formatPrice } from "../../utils/formatPrice";
import { useNavigate, useParams } from "react-router-dom";

interface ICardAuction {
  image: string;
  title: string;
  subtitle: string;
  abrevUser: string;
  nameUser: string;
  kmCar: number;
  yearCar: number;
  priceCar: number;
  idProduct: string;
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
  idProduct,
}: ICardAuction) => {
  let { productId } = useParams();

  productId = idProduct;

  const navigate = useNavigate();

  return (
    <Container>
      <CardContainer>
        <CardImg src={image} style={{ height: 330 }} />
        <CardImgOverlay className="cardInfos">
          <TimerAuction>
            <FiClock color="blue" size={20} />

            <time>{countAuction()}</time>
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
            <span> {formatPrice(priceCar)} </span>
          </InfosVehicle>
        </CardImgOverlay>
      </CardContainer>

      <DivRedirectAuction onClick={() => navigate(`product/${productId}`)}>
        <p>Acessar página do leilão</p>

        <BsArrowRight className="arrowRight" size={30} color="white" />
      </DivRedirectAuction>
    </Container>
  );
};

export { CardAuction };
