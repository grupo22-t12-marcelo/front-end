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
  is_published: boolean;
}

const CardPublished = ({
  image,
  title,
  subtitle,
  abrevName,
  name,
  kmCar,
  yearCar,
  priceCar,
  idProduct,
  is_published,
}: ICardVehicle) => {
  let { productId } = useParams();

  productId = idProduct;

  console.log(is_published);

  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`product/${productId}`)}>
      <div>
        {is_published ? (
          <p className="active">Ativo</p>
        ) : (
          <p className="deactive">Inativo</p>
        )}
        <ImageVehicle className="image">
          <img src={image} />
        </ImageVehicle>
      </div>

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

export { CardPublished };