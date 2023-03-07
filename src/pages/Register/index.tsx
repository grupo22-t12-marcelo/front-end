import Footer from "../../components/Footer";
import { FormRegister } from "../../components/FormRegister";
import Header from "../../components/Header";

import { Container } from "./styles";

const Register = () => {
  return (
    <>
      <Header />
      <Container>
        <section>
          <h3>Cadastro</h3>
          <FormRegister />
        </section>
      </Container>
      <Footer />
    </>
  );
};

export { Register };
