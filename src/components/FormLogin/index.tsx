import { Button, FormGroup, Input, Label } from "reactstrap";
import { useProductContext } from "../../contexts/productContext";
import { Form } from "./style";

const FormLogin = () => {
  const { navigate } = useProductContext();
  return (
    <Form>
      <h3>Login</h3>
      <FormGroup>
        <Label for="exampleEmail">Usuário</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Digitar usuário"
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Senha</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Digitar senha"
          type="password"
        />
      </FormGroup>
      <span>Esqueci minha senha</span>
      <Button>Entrar</Button>
      <span>Ainda não possui conta?</span>
      <Button onClick={() => navigate("/register")}>Cadastrar</Button>
    </Form>
  );
};

export { FormLogin };
