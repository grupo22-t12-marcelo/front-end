import { Button, FormGroup, Input, Label } from "reactstrap";
import { useProductContext } from "../../contexts/productContext";
import { Form } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaLogin } from "../../validators/schemas";
import { ILogin } from "../../interfaces";

const FormLogin = () => {
  const { navigate } = useProductContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(schemaLogin),
  });

  const login = (data: ILogin) => {
    console.log(data);
    // const newObj = {
    //   ...data,
    // };
    // console.log(newObj);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(login)}>
        <h3>Login</h3>
        <FormGroup>
          <Label>Usuário</Label>
          <input placeholder="Digitar usuário" {...register("user")} />
        </FormGroup>

        <FormGroup>
          <Label>Senha</Label>
          <input placeholder="Digitar senha" {...register("password")} />
        </FormGroup>
        <span>Esqueci minha senha</span>
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
