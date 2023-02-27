import { CardPublished } from "../../components/CardPublished";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { InfosUserPage } from "../../components/InfosUserPage";
import { Vehicle } from "../../utils/data";
import { Container } from "./style";

const UserAnnouncement = () => {
  return (
    <Container>
      <Header />
      <div className="divBlue"></div>
      <main className="divWhite">
        <div>
          <InfosUserPage
            abrevName="J"
            name="João"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
        </div>
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
                    idProduct={vehicle.idProduct}
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
                    idProduct={vehicle.idProduct}
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
