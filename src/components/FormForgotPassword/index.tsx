import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button, FormGroup, Label } from "reactstrap";
import { useProductContext } from "../../contexts/productContext";
import { IForgotLogin } from "../../interfaces";
import { schemaForgotPassword } from "../../validators/schemas";
import { Form } from "./style";

const FormForgotPassword = () => {
  const { navigate } = useProductContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotLogin>({
    resolver: yupResolver(schemaForgotPassword),
  });

  const login = (data: IForgotLogin) => {
    console.log(data);
    // const newObj = {
    //   ...data,
    // };
    // console.log(newObj);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(login)}>
        <h3>Recuperar Senha</h3>
        <FormGroup>
          <Label>Email</Label>
          <input placeholder="Digitar email" {...register("email")} />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </FormGroup>

        <span onClick={() => navigate("/login")}>Voltar para o Login</span>
        <Button type="submit">Enviar</Button>
        <span>Ainda não possui conta?</span>
        <Button type="button" onClick={() => navigate("/register")}>
          Cadastrar
        </Button>
      </Form>
    </>
  );
};

export { FormForgotPassword };
