import { CardPublished } from "../../components/CardPublished";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { InfosUserPage } from "../../components/InfosUserPage";
import { useSessionContext } from "../../contexts/sessionContext";
import { Vehicle } from "../../utils/data";
import { Container } from "./style";

const UserAnnouncement = () => {
  const { userData } = useSessionContext();

  return (
    <Container>
      <Header />
      <div className="divBlue"></div>
      <main className="divWhite">
        <div>
          <InfosUserPage />
        </div>
        {userData.products && userData.products.length > 0 ? (
          <>
            <Carousel
              type="Carro"
              children={
                <>
                  {userData.products
                    .filter((vehicle) => vehicle.type_vehicle == "Carro")
                    .map((vehicle, key) => (
                      <li className="div-item-vei" key={key}>
                        <CardPublished
                          image={vehicle.image}
                          title={vehicle.title}
                          subtitle={vehicle.description}
                          abrevName={userData.name ? userData.name : "Sem nome"}
                          name={userData.name ? userData.name : "Sem nome"}
                          kmCar={vehicle.kilometers}
                          yearCar={vehicle.year}
                          priceCar={vehicle.price}
                          is_published={vehicle.is_published}
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
                  {userData.products
                    .filter((vehicle) => vehicle.type_vehicle == "Moto")
                    .map((vehicle, key) => (
                      <li className="div-item-vei" key={key}>
                        <CardPublished
                          image={vehicle.image}
                          title={vehicle.title}
                          subtitle={vehicle.description}
                          abrevName={userData.name ? userData.name : "Sem nome"}
                          name={userData.name ? userData.name : "Sem nome"}
                          kmCar={vehicle.kilometers}
                          yearCar={vehicle.year}
                          priceCar={vehicle.price}
                          is_published={vehicle.is_published}
                        />
                      </li>
                    ))}
                </>
              }
            />
          </>
        ) : (
          <>
            <Carousel
              type="Carro"
              children={
                <>
                  {Vehicle.map((vehicle, key) => (
                    <li className="div-item-vei" key={key}>
                      <CardPublished
                        image={vehicle.image}
                        title={vehicle.title}
                        subtitle={vehicle.subtitle}
                        abrevName={vehicle.abrevName}
                        name={vehicle.name}
                        kmCar={vehicle.kmCar}
                        yearCar={vehicle.yearCar}
                        priceCar={vehicle.priceCar}
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
                  {Vehicle.map((vehicle, key) => (
                    <li className="div-item-vei" key={key}>
                      <CardPublished
                        image={vehicle.image}
                        title={vehicle.title}
                        subtitle={vehicle.subtitle}
                        abrevName={vehicle.abrevName}
                        name={vehicle.name}
                        kmCar={vehicle.kmCar}
                        yearCar={vehicle.yearCar}
                        priceCar={vehicle.priceCar}
                        is_published={true}
                      />
                    </li>
                  ))}
                </>
              }
            />
          </>
        )}
      </main>
      <Footer />
    </Container>
  );
};

export { UserAnnouncement };
