import { CardVehicle } from "../../components/CardVehicles";
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
  priceCar: 200000
}
    return( 
      <div className="home-div">
        <CriarAnuncio/>
        <Header></Header>
        <CardVehicle image={Vehicle.image} title={Vehicle.title} subtitle={Vehicle.subtitle}
            abrevName={Vehicle.abrevName} name={Vehicle.name} kmCar={Vehicle.kmCar} 
            yearCar={Vehicle.yearCar} priceCar={Vehicle.priceCar}></CardVehicle>
        <Footer/>
      </div>
    );
}

export default Home;