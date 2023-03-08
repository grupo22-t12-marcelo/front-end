import { useProductContext } from "../../contexts/productContext";
import { CardAuction } from "../CardAuction";
import { CardVehicle } from "../CardVehicles";
import Carousel from "../Carousel";
import CarouselAuction from "../CarouselAuction";
import { EmptyVehicles } from "../EmptyVehicles";
import { Container } from "./styles";

const AllVehicles = () => {
  const { auctionVehicles, carsVehicle, motorbikeVehicle } =
    useProductContext();

  return (
    <Container>
      <CarouselAuction
        children={
          <>
            {auctionVehicles?.length > 0 ? (
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
            {carsVehicle?.length > 0 ? (
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
            {motorbikeVehicle?.length > 0 ? (
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
    </Container>
  );
};

export { AllVehicles };
