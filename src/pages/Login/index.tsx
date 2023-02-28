import Footer from "../../components/Footer";
import { FormLogin } from "../../components/FormLogin";
import Header from "../../components/Header";
import { LoginDiv, Main } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaLogin } from "../../validators/schemas";
import { ILogin } from "../../interfaces";

const Login = () => {
  return (
    <LoginDiv>
      <Header />
      <Main>
        <FormLogin />
      </Main>
      <Footer />
    </LoginDiv>
  );
};

export { Login };
