import { Helmet, HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import Footer from "../../components/Footer";
import { FormLogin } from "../../components/FormLogin";
import Header from "../../components/Header";
import { LoginDiv, Main } from "./style";

const Login = () => {
  return (
    <LoginDiv>
      <HelmetProvider>
        <Helmet title="Login" />
      </HelmetProvider>

      <Header />
      <Main>
        <FormLogin />
      </Main>
      <Footer />
    </LoginDiv>
  );
};

export { Login };
