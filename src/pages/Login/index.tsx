import Footer from "../../components/Footer";
import { FormLogin } from "../../components/FormLogin";
import Header from "../../components/Header";
import { Main } from "./style";

const Login = () => {
  return (
    <>
      <Header />
      <Main>
        <FormLogin />
      </Main>
      <Footer />
    </>
  );
};

export { Login };
