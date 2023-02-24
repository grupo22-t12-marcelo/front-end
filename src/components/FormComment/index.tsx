import { CircleUser } from "../CircleUser";
import { Badges, Form } from "./style";
import { Input, FormGroup, Button, Badge } from "reactstrap";
import { useProductContext } from "../../contexts/productContext";

const FormComment = () => {
  const { isLogged, userLogged, navigate } = useProductContext();

  return (
    <Form>
      <div>
        <CircleUser />
        <h5>{userLogged}</h5>
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
