import { useParams } from "react-router-dom";
import { CardPublished } from "../../components/CardPublished";
import Carousel from "../../components/Carousel";
import { EmptyVehicles } from "../../components/EmptyVehicles";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { InfosUserPage } from "../../components/InfosUserPage";
import EditarAddress from "../../components/ModalEditarAddress";
import EditarPerfil from "../../components/ModalEditarPerfil";
import ExcluirUser from "../../components/ModalExcluirUser";
import { useUserProductsContext } from "../../contexts/productsUser.context";
import { useSessionContext } from "../../contexts/sessionContext";
import { Container } from "./style";

const UserAnnouncement = () => {
  const { setUserId, userVehicles } = useUserProductsContext();
  const { isModalEditPerfil, isModalEditAddress, isModalExcluirPerfil } =
    useSessionContext();
  const { userId } = useParams();

  setUserId(userId);

  const carVehicles = userVehicles.products?.filter(
    (vehicle) => vehicle.type_vehicle === "Carro"
  );

  const motoVehicles = userVehicles.products?.filter(
    (vehicle) => vehicle.type_vehicle === "Moto"
  );

  return (
    <Container>
      {isModalEditPerfil && <EditarPerfil />}
      {isModalEditAddress && <EditarAddress />}
      {isModalExcluirPerfil && <ExcluirUser />}
      <Header />
      <div className="divBlue"></div>
      <main className="divWhite">
        <div>
          <InfosUserPage
            name={userVehicles?.name!}
            abrevName={userVehicles?.name!}
            typeAccount={userVehicles?.type_account!}
            description={userVehicles?.description!}
          />
        </div>
        <Carousel
          type="Carro"
          children={
            <>
              {carVehicles?.length! > 0 ? (
                carVehicles?.map((vehicle) => (
                  <li className="div-item-vei" key={vehicle.id}>
                    <CardPublished
                      image={vehicle.image}
                      title={vehicle.title}
                      subtitle={vehicle.description}
                      abrevName={userVehicles?.name!}
                      name={userVehicles?.name!}
                      kmCar={vehicle.kilometers}
                      yearCar={vehicle.year}
                      priceCar={vehicle.price}
                      is_published={vehicle.is_published}
                    />
                  </li>
                ))
              ) : (
                <EmptyVehicles message="Não há carros no momento" />
              )}
            </>
          }
        />

        <Carousel
          type="Moto"
          children={
            <>
              {motoVehicles?.length! > 0 ? (
                motoVehicles?.map((vehicle) => (
                  <li className="div-item-vei" key={vehicle.id}>
                    <CardPublished
                      image={vehicle.image}
                      title={vehicle.title}
                      subtitle={vehicle.description}
                      abrevName={userVehicles?.name!}
                      name={userVehicles?.name!}
                      kmCar={vehicle.kilometers}
                      yearCar={vehicle.year}
                      priceCar={vehicle.price}
                      is_published={vehicle.is_published}
                    />
                  </li>
                ))
              ) : (
                <EmptyVehicles message="Não há motos no momento" />
              )}
            </>
          }
        />
      </main>
      <Footer />
    </Container>
  );
};

export { UserAnnouncement };
