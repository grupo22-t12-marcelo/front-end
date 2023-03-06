import { useProductContext } from "../../contexts/productContext";
import { Description } from "./style";

const DescriptionProduct = () => {
  const { oneVehicle } = useProductContext();
  return (
    <Description>
      <h3>{"Descrição"}</h3>
      <p>{oneVehicle.description}</p>
    </Description>
  );
};

export { DescriptionProduct };
