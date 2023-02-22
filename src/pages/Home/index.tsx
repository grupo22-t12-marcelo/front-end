import Carousel from "../../components/Carousel";
import CarouselAuction from "../../components/CarouselAuction";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./home.css";

const Home = () => {
  const Vehicle = {
<<<<<<< HEAD
    image: "https://img2.icarros.com/dbimg/imgadicionalnoticia/4/114039_1",
    title: "Carro",
    subtitle: "Veloz",
    abrevName: "CV",
    name: "Joao",
    kmCar: 20000,
    yearCar: 2020,
    priceCar: 200000,
  };
  return (
    <div className="home-div">
      <Header></Header>
      <CardVehicle
        image={Vehicle.image}
        title={Vehicle.title}
        subtitle={Vehicle.subtitle}
        abrevName={Vehicle.abrevName}
        name={Vehicle.name}
        kmCar={Vehicle.kmCar}
        yearCar={Vehicle.yearCar}
        priceCar={Vehicle.priceCar}
      ></CardVehicle>
      <Footer />
    </div>
  );
};
=======
  image: "https://img2.icarros.com/dbimg/imgadicionalnoticia/4/114039_1",
  title: "Carro",
  subtitle: "Veloz",
  abrevName: "CV",
  name: "Joao",
  kmCar: 20000,
  yearCar: 2020,
  priceCar: 200000
}
const carro:string = "Carros"
const moto:string = "Motos"
    return( 
      <div className="home-div">
        <Header></Header>
          <CarouselAuction></CarouselAuction>
          <Carousel></Carousel>
          <Carousel></Carousel>
        <Footer/>
      </div>
    );
}
>>>>>>> 8ff76e29167356ebda0adf7a087b5128e6dd5157

export default Home;
