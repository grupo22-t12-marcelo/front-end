import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
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
const carro:string = "Carros"
const moto:string = "Motos"
    return( 
      <div className="home-div">
        <Header></Header>
          <Carousel></Carousel>
          <Carousel></Carousel>
        <Footer/>
      </div>
    );
}

export default Home;