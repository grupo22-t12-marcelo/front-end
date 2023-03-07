import Footer from "../../components/Footer";
import { FormLogin } from "../../components/FormLogin";
import Header from "../../components/Header";
import { LoginDiv, Main } from "./style";

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
