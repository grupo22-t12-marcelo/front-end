import { CircleUser } from "../CircleUser";
import { Badges, Form } from "./style";
import { Input, FormGroup, Label, Button, Badge } from "reactstrap";
import { useProductContext } from "../../contexts/productContext";

const FormComment = ({ nameUser }: any) => {
  const { isLogged, navigate } = useProductContext();

  return (
    <Form>
      <div>
        <CircleUser nameUser={nameUser} />
        <h5>{nameUser}</h5>
      </div>
      <FormGroup>
        <Input
          id="exampleText"
          name="text"
          type="textarea"
          placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
          bsSize="lg"
          size={128}
        />
      </FormGroup>
      {!isLogged ? (
        <Button color={"secondary"} onClick={() => navigate("/login")}>
          Comentar
        </Button>
      ) : (
        <Button>Comentar</Button>
      )}
      <Badges>
        <Badge pill>Gostei Muito!</Badge>
        <Badge pill>Incrível</Badge>
        <Badge pill>Recomendarei para meus amigos!</Badge>
      </Badges>
    </Form>
  );
};

export { FormComment };
