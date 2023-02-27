import { Badge, Button } from "reactstrap";
import { useProductContext } from "../../contexts/productContext";
import { Info } from "./style";

const InfoProduct = () => {
  const { tagsCar } = useProductContext();

  return (
    <Info>
      <h3>{"Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 "}</h3>
      <div>
        {tagsCar.map((tag: string) => {
          return <Badge color="primary">{tag}</Badge>;
        })}
      </div>
      <span>{"R$ 00.000,00"}</span>
      <Button>Comprar</Button>
    </Info>
  );
};

export { InfoProduct };
