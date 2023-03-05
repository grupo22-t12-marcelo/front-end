import { useParams } from "react-router-dom";
import { CardPublished } from "../../components/CardPublished";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { InfosUserPage } from "../../components/InfosUserPage";
import { useUserProductsContext } from "../../contexts/productsUser.context";
import { useSessionContext } from "../../contexts/sessionContext";
import { Vehicle } from "../../utils/data";
import { Container } from "./style";

const UserAnnouncement = () => {
  const { setUserId, userVehicles } = useUserProductsContext();
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
      <Header />
      <div className="divBlue"></div>
      <main className="divWhite">
        <div>
          <InfosUserPage />
        </div>
        <Carousel
          type="Carro"
          children={
            <>
              {carVehicles?.map((vehicle) => (
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
                    is_published={true}
                  />
                </li>
              ))}
            </>
          }
        />

        <Carousel
          type="Moto"
          children={
            <>
              {motoVehicles?.map((vehicle) => (
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
                    is_published={true}
                  />
                </li>
              ))}
            </>
          }
        />
      </main>
      <Footer />
    </Container>
  );
};

export { UserAnnouncement };
