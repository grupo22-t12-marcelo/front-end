import { CardPublished } from "../../components/CardPublished";
import { CardVehicle } from "../../components/CardVehicles";
import Carousel from "../../components/Carousel";
import CarouselAuction from "../../components/CarouselAuction";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Vehicle } from "../../utils/data";
import "./home.css";

const Home = () => {
  return (
    <div className="home-div">
      <Header></Header>
      <CarouselAuction></CarouselAuction>

      <Carousel
        type="Carro"
        children={
          <>
            {Vehicle.map((vehicle, key) => (
              <li className="div-item-vei" key={key}>
                <CardVehicle
                  image={vehicle.image}
                  title={vehicle.title}
                  subtitle={vehicle.subtitle}
                  abrevName={vehicle.abrevName}
                  name={vehicle.name}
                  kmCar={vehicle.kmCar}
                  yearCar={vehicle.yearCar}
                  priceCar={vehicle.priceCar}
                  idProduct={vehicle.idProduct}
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
                <CardVehicle
                  image={vehicle.image}
                  title={vehicle.title}
                  subtitle={vehicle.subtitle}
                  abrevName={vehicle.abrevName}
                  name={vehicle.name}
                  kmCar={vehicle.kmCar}
                  yearCar={vehicle.yearCar}
                  priceCar={vehicle.priceCar}
                  idProduct={vehicle.idProduct}
                />
              </li>
            ))}
          </>
        }
      />

      <Footer />
    </div>
  );
};

export default Home;
