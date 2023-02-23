import Carousel from "../../components/Carousel";
import CarouselAuction from "../../components/CarouselAuction";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CriarAnuncio from "../../components/ModalCriarAnuncio";
import "./home.css";

const Home = () => {
  const Vehicle = {
    image: "https://img2.icarros.com/dbimg/imgadicionalnoticia/4/114039_1",
    title: "Carro",
    subtitle: "Veloz",
    abrevName: "CV",
    name: "Joao",
    kmCar: 20000,
    yearCar: 2020,
    priceCar: 200000,
  };
  const carro: string = "Carros";
  const moto: string = "Motos";
  return (
    <div className="home-div">
      <Header></Header>
      <CarouselAuction></CarouselAuction>
      <Carousel></Carousel>
      <Carousel></Carousel>
      <Footer />
    </div>
  );
};

export default Home;
