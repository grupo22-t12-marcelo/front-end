import { Badge, Button } from "reactstrap";
import { useProductContext } from "../../contexts/productContext";
import { useUserProductsContext } from "../../contexts/productsUser.context";
import { useSessionContext } from "../../contexts/sessionContext";
import { IUserProducts } from "../../interfaces/productsUser";
import { IUserLogged } from "../../interfaces/sessions";
import { formatPrice } from "../../utils/formatPrice";
import { Info } from "./style";

const InfoProduct = () => {
  const { oneVehicle, phoneOwnerProduct } = useProductContext();
  const { userVehicles } = useUserProductsContext();

  console.log(oneVehicle);

  return (
    <Info>
      <h3>{oneVehicle.title}</h3>
      <div>
        <div className="infoDiv">
          <p> {oneVehicle.kilometers} km </p>
          <p> {oneVehicle.year} </p>
        </div>
      </div>
      <span>
        {oneVehicle.price?.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      <Button
        target="_blank"
        href={`//wa.me/55${phoneOwnerProduct}?text=Olá,%20tenho%20interesse%20no%20veiculo.%20Por%20favor%20entre%20em%20contato.`}
      >
        Comprar
      </Button>
    </Info>
  );
};

export { InfoProduct };
