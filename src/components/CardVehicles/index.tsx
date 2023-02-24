import { useNavigate, useParams } from "react-router-dom";
import {} from "reactstrap";
import { useProductContext } from "../../contexts/productContext";
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "../Button";
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

  const { isLogged } = useProductContext();

  return (
    <Container onClick={() => navigate(`product/${productId}`)}>
      <ImageVehicle className="image">
        <img src={image} />
      </ImageVehicle>

      <CardTitle>{title}</CardTitle>

      <CardSubtitle>{subtitle}</CardSubtitle>

      {isLogged ? (
        <></>
      ) : (
        <UserContainer>
          <div>
            <p>{abrevName}</p>
          </div>
          <h5> {name} </h5>
        </UserContainer>
      )}

      <InfosVehicle>
        <div className="infoDiv">
          <p> {kmCar} km </p>
          <p> {yearCar} </p>
        </div>
        <span>{formatPrice(priceCar)} </span>
      </InfosVehicle>
      {isLogged ? (
        <div className="divButtonEdit">
          <Button
            nameButton="Editar"
            backgroundColor="var(--grey8)"
            borderColor="var(--grey1)"
            color="var(--grey1)"
            height={40}
            width={80}
          />

          <Button
            nameButton="Ver como"
            backgroundColor="var(--grey8)"
            borderColor="var(--grey1)"
            color="var(--grey1)"
            height={40}
            width={120}
          />
        </div>
      ) : (
        <></>
      )}
    </Container>
  );
};

export { CardVehicle };
