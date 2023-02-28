import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ForgotPasswordDiv, Main } from "./style";

const ForgotPassword = () => {
  return (
    <ForgotPasswordDiv>
      <Header />
      <Main>{/* <FormLogin /> */}</Main>
      <Footer />
    </ForgotPasswordDiv>
  );
};

export { ForgotPassword };
