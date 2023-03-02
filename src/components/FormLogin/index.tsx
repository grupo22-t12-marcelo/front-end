import { Button, FormGroup, Input, Label } from "reactstrap";
import { useProductContext } from "../../contexts/productContext";
import { Form } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaLogin } from "../../validators/schemas";
import { ILogin } from "../../interfaces";
import { useSessionContext } from "../../contexts/sessionContext";

const FormLogin = () => {
  const { navigate } = useProductContext();
  const { login } = useSessionContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(schemaLogin),
  });

  return (
    <>
      <Form onSubmit={handleSubmit(login)}>
        <h3>Login</h3>
        <FormGroup>
          <Label>Email</Label>
          <input placeholder="Digite seu email" {...register("email")} />
        </FormGroup>

        <FormGroup>
          <Label>Senha</Label>
          <input placeholder="Digite sua senha" {...register("password")} />
        </FormGroup>
        <span onClick={() => navigate("/forgot-password")}>
          Esqueci minha senha
        </span>
        <Button type="submit">Entrar</Button>
        <span>Ainda não possui conta?</span>
        <Button type="button" onClick={() => navigate("/register")}>
          Cadastrar
        </Button>
      </Form>
    </>
  );
};

export { FormLogin };
