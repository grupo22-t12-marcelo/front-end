import { CardVehicle } from "../../components/CardVehicles";
import Carousel from "../../components/Carousel";
import CarouselAuction from "../../components/CarouselAuction";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CriarAnuncio from "../../components/ModalCriarAnuncio";
import SubHeader from "../../components/SubHeader";
import { useProductContext } from "../../contexts/productContext";
import { Vehicle } from "../../utils/data";
import "./index.css";

const Home = () => {
  const { isModalAnuncio } = useProductContext();

  return (
    <div className="home-div">
      {isModalAnuncio && <CriarAnuncio />}
      <Header></Header>
      <SubHeader></SubHeader>
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
