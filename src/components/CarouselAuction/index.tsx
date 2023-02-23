import { CardAuction } from "../CardAuction";
import { DivCarousel } from "./styles";

const CarouselAuction = () => {
  const Vehicle = {
    image: "https://img2.icarros.com/dbimg/imgadicionalnoticia/4/114039_1",
    title: "Volkswagen Jetta",
    subtitle: "Carro compacto",
    abrevUser: "JV",
    nameUser: "Joao Vitor",
    kmCar: 20000,
    yearCar: 2020,
    priceCar: 200000,
    idProduct: "7ca12aee-942a-4191-85cc-724f408b276f",
  };
  return (
    <DivCarousel>
      <h1 className="title-carousel">Leilão</h1>
      <div className="list-card-vehicles">
        <div className="div-item-vei">
          <CardAuction
            image={Vehicle.image}
            title={Vehicle.title}
            subtitle={Vehicle.subtitle}
            abrevUser={Vehicle.abrevUser}
            nameUser={Vehicle.nameUser}
            kmCar={Vehicle.kmCar}
            yearCar={Vehicle.yearCar}
            priceCar={Vehicle.priceCar}
            idProduct={Vehicle.idProduct}
          ></CardAuction>
        </div>
        <div className="div-item-vei">
          <CardAuction
            image={Vehicle.image}
            title={Vehicle.title}
            subtitle={Vehicle.subtitle}
            abrevUser={Vehicle.abrevUser}
            nameUser={Vehicle.nameUser}
            kmCar={Vehicle.kmCar}
            yearCar={Vehicle.yearCar}
            priceCar={Vehicle.priceCar}
            idProduct={Vehicle.idProduct}
          ></CardAuction>
        </div>
        <div className="div-item-vei">
          <CardAuction
            image={Vehicle.image}
            title={Vehicle.title}
            subtitle={Vehicle.subtitle}
            abrevUser={Vehicle.abrevUser}
            nameUser={Vehicle.nameUser}
            kmCar={Vehicle.kmCar}
            yearCar={Vehicle.yearCar}
            priceCar={Vehicle.priceCar}
            idProduct={Vehicle.idProduct}
          ></CardAuction>
        </div>
        <div className="div-item-vei">
          <CardAuction
            image={Vehicle.image}
            title={Vehicle.title}
            subtitle={Vehicle.subtitle}
            abrevUser={Vehicle.abrevUser}
            nameUser={Vehicle.nameUser}
            kmCar={Vehicle.kmCar}
            yearCar={Vehicle.yearCar}
            priceCar={Vehicle.priceCar}
            idProduct={Vehicle.idProduct}
          ></CardAuction>
        </div>
        <div className="div-item-vei">
          <CardAuction
            image={Vehicle.image}
            title={Vehicle.title}
            subtitle={Vehicle.subtitle}
            abrevUser={Vehicle.abrevUser}
            nameUser={Vehicle.nameUser}
            kmCar={Vehicle.kmCar}
            yearCar={Vehicle.yearCar}
            priceCar={Vehicle.priceCar}
            idProduct={Vehicle.idProduct}
          ></CardAuction>
        </div>
      </div>
    </DivCarousel>
  );
};

export default CarouselAuction;
