import { Badge, Button } from "reactstrap";
import { useProductContext } from "../../contexts/productContext";
import { formatPrice } from "../../utils/formatPrice";
import { Info } from "./style";

const InfoProduct = () => {
  const { oneVehicle } = useProductContext();

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
      <Button>Comprar</Button>
    </Info>
  );
};

export { InfoProduct };
