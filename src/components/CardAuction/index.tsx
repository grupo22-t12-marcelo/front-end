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
import { Button } from "../Button";
import EditarAnuncio from "../ModalEditarAnuncio";
import { useSessionContext } from "../../contexts/sessionContext";
import { returnAbrevName } from "../../utils/abrevName";

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
  createdAtCount: string;
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
  createdAtCount,
}: ICardAuction) => {
  const navigate = useNavigate();

  const { setIsModalEditAnuncio } = useProductContext();
  const { isLogged, userData } = useSessionContext();

  return (
    <Container>
      <CardContainer>
        <CardImg src={image} style={{ height: 330 }} />
        <CardImgOverlay className="cardInfos">
          <TimerAuction>
            <FiClock color="blue" size={20} />

            <time>{countAuction(createdAtCount)}</time>
          </TimerAuction>

          <Description>
            <CardTitle>{title}</CardTitle>

            <CardSubtitle>{subtitle}</CardSubtitle>
          </Description>

          {isLogged ? (
            <div style={{ margin: 62 }}></div>
          ) : (
            <UserContainer>
              <div className="abrevName">
                <p>{returnAbrevName(abrevUser)} </p>
              </div>
              <h5> {nameUser} </h5>
            </UserContainer>
          )}

          <InfosVehicle>
            <div className="infoDiv">
              <p>{kmCar} km </p>
              <p> {yearCar} </p>
            </div>
            <span> {formatPrice(priceCar)} </span>
          </InfosVehicle>
        </CardImgOverlay>
      </CardContainer>

      <DivRedirectAuction>
        {isLogged ? (
          <div className="divButtonEdit">
            <Button
              onClick={() => setIsModalEditAnuncio(true)}
              nameButton="Editar"
              backgroundColor="var(--brand1)"
              borderColor="var(--grey10)"
              color="var(--grey10)"
              height={40}
              width={80}
            />

            <Button
              nameButton="Ver como"
              backgroundColor="var(--brand1)"
              borderColor="var(--grey10)"
              color="var(--grey10)"
              height={40}
              width={120}
              onClick={() => navigate(`product/${idProduct}`)}
            />
          </div>
        ) : (
          <div
            className="divRedirect"
            onClick={() => navigate(`product/${idProduct}`)}
          >
            <p>Acessar página do leilão</p>

            <BsArrowRight className="arrowRight" size={30} color="white" />
          </div>
        )}
      </DivRedirectAuction>
    </Container>
  );
};

export { CardAuction };
