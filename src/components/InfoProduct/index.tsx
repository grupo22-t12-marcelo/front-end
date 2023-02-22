import { Badge, Button } from "reactstrap";
import { Info } from "./style";

const InfoProduct = (props: any) => {
  return (
    <Info>
      <h3>{props.title}</h3>
      <div>
        {props.tags.map((tag: string) => {
          return <Badge color="primary">{tag}</Badge>;
        })}
      </div>
      <span>{props.price}</span>
      <Button>Comprar</Button>
    </Info>
  );
};

export { InfoProduct };
