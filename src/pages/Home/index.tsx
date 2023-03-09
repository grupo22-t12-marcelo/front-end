import { AllVehicles } from "../../components/AllVehicles";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import EditarAddress from "../../components/ModalEditarAddress";
import EditarPerfil from "../../components/ModalEditarPerfil";
import ExcluirUser from "../../components/ModalExcluirUser";
import SubHeader from "../../components/SubHeader";
import { useSessionContext } from "../../contexts/sessionContext";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./index.css";
import { ModalLoading } from "../../components/ModalLoading";
import { Loading } from "../../components/Loading";

const Home = () => {
  const {
    isModalEditPerfil,
    isModalEditAddress,
    isModalExcluirPerfil,
    isLoading,
  } = useSessionContext();

  return (
    <div className="home-div">
      <HelmetProvider>
        <Helmet title="Motor Shop" />
      </HelmetProvider>

      {isLoading ? (
        <ModalLoading>
          <Loading />
        </ModalLoading>
      ) : null}

      {isModalEditPerfil && <EditarPerfil />}
      {isModalEditAddress && <EditarAddress />}
      {isModalExcluirPerfil && <ExcluirUser />}

      <Header></Header>
      <SubHeader></SubHeader>
      <AllVehicles />

      <Footer />
    </div>
  );
};

export default Home;
