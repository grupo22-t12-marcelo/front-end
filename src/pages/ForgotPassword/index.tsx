import Footer from "../../components/Footer";
import { FormForgotPassword } from "../../components/FormForgotPassword";
import Header from "../../components/Header";
import { ForgotPasswordDiv, Main } from "./style";

const ForgotPassword = () => {
  return (
    <>
      <ForgotPasswordDiv>
        <Header />
        <Main>
          <FormForgotPassword />
        </Main>
        <Footer />
      </ForgotPasswordDiv>
    </>
  );
};

export { ForgotPassword };
