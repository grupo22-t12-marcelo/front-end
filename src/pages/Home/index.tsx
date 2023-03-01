import { CardAuction } from "../../components/CardAuction";
import { CardVehicle } from "../../components/CardVehicles";
import Carousel from "../../components/Carousel";
import CarouselAuction from "../../components/CarouselAuction";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CriarAnuncio from "../../components/ModalCriarAnuncio";
import EditarAnuncio from "../../components/ModalEditarAnuncio";
import SubHeader from "../../components/SubHeader";
import ToastSucessoAnuncio from "../../components/ToastSucessoAnuncio";
import { useProductContext } from "../../contexts/productContext";
import { Vehicle, VehicleAuction } from "../../utils/data";
import "./index.css";

const Home = () => {
  const { isModalAnuncio, isModalEditAnuncio } = useProductContext();

  return (
    <div className="home-div">
      {isModalAnuncio && <CriarAnuncio />}
      {isModalEditAnuncio && <EditarAnuncio/>}

      <Header></Header>
      <SubHeader></SubHeader>
      <CarouselAuction
        children={
          <>
            {VehicleAuction.map((vehicle, key) => (
              <li className="div-item-vei" key={key}>
                <CardAuction
                  title={vehicle.title}
                  subtitle={vehicle.subtitle}
                  kmCar={vehicle.kmCar}
                  image={vehicle.image}
                  abrevUser={vehicle.abrevUser}
                  yearCar={vehicle.yearCar}
                  nameUser={vehicle.nameUser}
                  priceCar={vehicle.priceCar}
                  idProduct={vehicle.idProduct}
                  createdAtCount={vehicle.createdAt}
                ></CardAuction>
              </li>
            ))}
          </>
        }
      ></CarouselAuction>

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
