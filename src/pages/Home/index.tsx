import { CardAuction } from "../../components/CardAuction";
import { CardVehicle } from "../../components/CardVehicles";
import Carousel from "../../components/Carousel";
import CarouselAuction from "../../components/CarouselAuction";
import { EmptyVehicles } from "../../components/EmptyVehicles";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CriarAnuncio from "../../components/ModalCriarAnuncio";
import EditarAnuncio from "../../components/ModalEditarAnuncio";
import EditarPerfil from "../../components/ModalEditarPerfil";
import SubHeader from "../../components/SubHeader";
import { useProductContext } from "../../contexts/productContext";
import "./index.css";

const Home = () => {

  const {
    isModalEditPerfil,
    isModalAnuncio,
    isModalEditAnuncio,
    auctionVehicles,
    carsVehicle,
    motorbikeVehicle,
  } = useProductContext();

  return (
    <div className="home-div">
      {isModalAnuncio && <CriarAnuncio />}
      {isModalEditAnuncio && <EditarAnuncio/>}
      {isModalEditPerfil && <EditarPerfil/>}
      {isModalEditAnuncio && <EditarAnuncio />}

      <Header></Header>
      <SubHeader></SubHeader>
      <CarouselAuction
        children={
          <>
            {auctionVehicles.length > 0 ? (
              auctionVehicles.map((vehicle) => (
                <li className="div-item-vei" key={vehicle.id}>
                  <CardAuction
                    title={vehicle.title}
                    subtitle={vehicle.description}
                    kmCar={vehicle.kilometers}
                    image={vehicle.image}
                    abrevUser={vehicle.user.name}
                    yearCar={vehicle.year}
                    nameUser={vehicle.user.name}
                    priceCar={vehicle.price}
                    idProduct={vehicle.id}
                    createdAtCount={vehicle.createdAt}
                  ></CardAuction>
                </li>
              ))
            ) : (
              <EmptyVehicles message="Não há leilões no momento" />
            )}
          </>
        }
      ></CarouselAuction>

      <Carousel
        type="Carro"
        children={
          <>
            {carsVehicle.length > 0 ? (
              carsVehicle.map((vehicle) => (
                <li className="div-item-vei" key={vehicle.id}>
                  <CardVehicle
                    image={vehicle.image}
                    title={vehicle.title}
                    subtitle={vehicle.description}
                    abrevName={vehicle.user.name}
                    name={vehicle.user.name}
                    kmCar={vehicle.kilometers}
                    yearCar={vehicle.year}
                    priceCar={vehicle.price}
                    idProduct={vehicle.id}
                  />
                </li>
              ))
            ) : (
              <EmptyVehicles message="Não há carros para venda no momento" />
            )}
          </>
        }
      />

      <Carousel
        type="Moto"
        children={
          <>
            {motorbikeVehicle.length > 0 ? (
              motorbikeVehicle.map((vehicle) => (
                <li className="div-item-vei" key={vehicle.id}>
                  <CardVehicle
                    image={vehicle.image}
                    title={vehicle.title}
                    subtitle={vehicle.description}
                    abrevName={vehicle.user.name}
                    name={vehicle.user.name}
                    kmCar={vehicle.kilometers}
                    yearCar={vehicle.year}
                    priceCar={vehicle.price}
                    idProduct={vehicle.id}
                  />
                </li>
              ))
            ) : (
              <EmptyVehicles message="Não há motos para venda no momento" />
            )}
          </>
        }
      />

      <Footer />
    </div>
  );
};

export default Home;
