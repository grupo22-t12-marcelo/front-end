import { AllVehiclesUser } from "../../components/AllVehiclesUser";
import { Button } from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { InfosUserPage } from "../../components/InfosUserPage";
import CriarAnuncio from "../../components/ModalCriarAnuncio";
import EditarAddress from "../../components/ModalEditarAddress";
import EditarAnuncio from "../../components/ModalEditarAnuncio";
import EditarPerfil from "../../components/ModalEditarPerfil";
import ExcluirAnuncio from "../../components/ModalExcluirAnuncio";
import ExcluirUser from "../../components/ModalExcluirUser";
import { useProductContext } from "../../contexts/productContext";
import { useSessionContext } from "../../contexts/sessionContext";
import { Container } from "./styles";

const MyVehicles = () => {
  const {
    userData,
    isModalEditPerfil,
    isModalEditAddress,
    isModalExcluirPerfil,
  } = useSessionContext();
  const {
    isModalAnuncio,
    isModalEditAnuncio,
    isModalExcluirAnuncio,
    setIsModalAnuncio,
  } = useProductContext();

  return (
    <>
      {isModalAnuncio && <CriarAnuncio />}
      {isModalEditAnuncio && <EditarAnuncio />}
      {isModalExcluirAnuncio && <ExcluirAnuncio />}
      {isModalEditPerfil && <EditarPerfil />}
      {isModalEditAddress && <EditarAddress />}
      {isModalExcluirPerfil && <ExcluirUser />}
      <Header />
      <Container>
        <div className="divBlue"></div>
        <div>
          <InfosUserPage
            name={userData?.name!}
            abrevName={userData?.name!}
            typeAccount={userData?.type_account!}
            description={userData?.description!}
            children={
              <Button
                onClick={() => setIsModalAnuncio(true)}
                color="var(--brand1)"
                nameButton="Criar anúncio"
                backgroundColor="var(--grey10)"
                width={160}
                height={48}
                borderColor="var(--brand1)"
                type="button"
              />
            }
          />
        </div>
      </Container>
      {userData.type_account === "Anunciante" ? (
        <AllVehiclesUser />
      ) : (
        <p>Precisa estar logado</p>
      )}

      <Footer />
    </>
  );
};

export { MyVehicles };
