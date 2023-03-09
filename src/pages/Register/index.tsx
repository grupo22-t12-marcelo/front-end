import { Helmet, HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import Footer from "../../components/Footer";
import { FormRegister } from "../../components/FormRegister";
import Header from "../../components/Header";

import { Container } from "./styles";

const Register = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet title="Register" />
      </HelmetProvider>

      <Header />
      <Container>
        <section>
          <h3>Cadastro</h3>
          <FormRegister />
        </section>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Container>
      <Footer />
    </>
  );
};

export { Register };
