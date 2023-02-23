import { useNavigate, useParams } from "react-router-dom";
import {} from "reactstrap";
import { formatPrice } from "../../utils/formatPrice";
import {
  CardSubtitle,
  CardTitle,
  Container,
  ImageVehicle,
  InfosVehicle,
  UserContainer,
} from "./styles";

interface ICardVehicle {
  image: string;
  title: string;
  subtitle: string;
  abrevName: string;
  name: string;
  kmCar: number;
  yearCar: number;
  priceCar: number;
  idProduct: string;
}

const CardVehicle = ({
  image,
  title,
  subtitle,
  abrevName,
  name,
  kmCar,
  yearCar,
  priceCar,
  idProduct,
}: ICardVehicle) => {
  let { productId } = useParams();

  productId = idProduct;

  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`product/${productId}`)}>
      <ImageVehicle className="image">
        <img src={image} />
      </ImageVehicle>

      <CardTitle>{title}</CardTitle>

      <CardSubtitle>{subtitle}</CardSubtitle>

      <UserContainer>
        <div>
          <p>{abrevName}</p>
        </div>
        <h5> {name} </h5>
      </UserContainer>

      <InfosVehicle>
        <div className="infoDiv">
          <p> {kmCar} km </p>
          <p> {yearCar} </p>
        </div>
        <span>{formatPrice(priceCar)} </span>
      </InfosVehicle>
    </Container>
  );
};

export { CardVehicle };
