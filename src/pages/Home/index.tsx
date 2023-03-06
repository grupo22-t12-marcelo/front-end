import { AllVehicles } from "../../components/AllVehicles";
import { AllVehiclesUser } from "../../components/AllVehiclesUser";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CriarAnuncio from "../../components/ModalCriarAnuncio";
import EditarAddress from "../../components/ModalEditarAddress";
import EditarAnuncio from "../../components/ModalEditarAnuncio";
import EditarPerfil from "../../components/ModalEditarPerfil";
import SubHeader from "../../components/SubHeader";
import { useProductContext } from "../../contexts/productContext";
import { useSessionContext } from "../../contexts/sessionContext";
import "./index.css";

const Home = () => {
  const {
    isModalEditPerfil,
    isModalAnuncio,
    isModalEditAnuncio,
    isModalEditAddress,
  } = useProductContext();
  const { isLogged } = useSessionContext();

  return (
    <div className="home-div">
      {isModalAnuncio && <CriarAnuncio />}
      {isModalEditAnuncio && <EditarAnuncio />}
      {isModalEditPerfil && <EditarPerfil />}
      {isModalEditAnuncio && <EditarAnuncio />}
      {isModalEditAddress && <EditarAddress />}

      <Header></Header>
      <SubHeader></SubHeader>
      {isLogged ? <AllVehiclesUser /> : <AllVehicles />}

      <Footer />
    </div>
  );
};

export default Home;
