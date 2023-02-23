import { CardVehicle } from "../CardVehicles";
import { DivCarousel } from "./styles";

const Carousel = () => {
  const Vehicle = {
    image: "https://img2.icarros.com/dbimg/imgadicionalnoticia/4/114039_1",
    title:
      "Product title stays here - max 1 line Product title stays here - maximum 1 line",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    abrevName: "J",
    name: "Joao",
    kmCar: 20000,
    yearCar: 2020,
    priceCar: 200000,
    idProduct: "959adbdf-4409-4f81-b9e5-ffc01828c260",
  };
  return (
    <DivCarousel>
      <h1 className="title-carousel">Carro</h1>
      <ul className="list-card-vehicles">
        <div className="div-item-vei">
          <CardVehicle
            image={Vehicle.image}
            title={Vehicle.title}
            subtitle={Vehicle.subtitle}
            abrevName={Vehicle.abrevName}
            name={Vehicle.name}
            kmCar={Vehicle.kmCar}
            yearCar={Vehicle.yearCar}
            priceCar={Vehicle.priceCar}
            idProduct={Vehicle.idProduct}
          ></CardVehicle>
        </div>
        <div className="div-item-vei">
          <CardVehicle
            image={Vehicle.image}
            title={Vehicle.title}
            subtitle={Vehicle.subtitle}
            abrevName={Vehicle.abrevName}
            name={Vehicle.name}
            kmCar={Vehicle.kmCar}
            yearCar={Vehicle.yearCar}
            priceCar={Vehicle.priceCar}
            idProduct={Vehicle.idProduct}
          ></CardVehicle>
        </div>
        <div className="div-item-vei">
          <CardVehicle
            image={Vehicle.image}
            title={Vehicle.title}
            subtitle={Vehicle.subtitle}
            abrevName={Vehicle.abrevName}
            name={Vehicle.name}
            kmCar={Vehicle.kmCar}
            yearCar={Vehicle.yearCar}
            priceCar={Vehicle.priceCar}
            idProduct={Vehicle.idProduct}
          ></CardVehicle>
        </div>
        <div className="div-item-vei">
          <CardVehicle
            image={Vehicle.image}
            title={Vehicle.title}
            subtitle={Vehicle.subtitle}
            abrevName={Vehicle.abrevName}
            name={Vehicle.name}
            kmCar={Vehicle.kmCar}
            yearCar={Vehicle.yearCar}
            priceCar={Vehicle.priceCar}
            idProduct={Vehicle.idProduct}
          ></CardVehicle>
        </div>
        <div className="div-item-vei">
          <CardVehicle
            image={Vehicle.image}
            title={Vehicle.title}
            subtitle={Vehicle.subtitle}
            abrevName={Vehicle.abrevName}
            name={Vehicle.name}
            kmCar={Vehicle.kmCar}
            yearCar={Vehicle.yearCar}
            priceCar={Vehicle.priceCar}
            idProduct={Vehicle.idProduct}
          ></CardVehicle>
        </div>
        <div className="div-item-vei">
          <CardVehicle
            image={Vehicle.image}
            title={Vehicle.title}
            subtitle={Vehicle.subtitle}
            abrevName={Vehicle.abrevName}
            name={Vehicle.name}
            kmCar={Vehicle.kmCar}
            yearCar={Vehicle.yearCar}
            priceCar={Vehicle.priceCar}
            idProduct={Vehicle.idProduct}
          ></CardVehicle>
        </div>
      </ul>
    </DivCarousel>
  );
};

export default Carousel;
