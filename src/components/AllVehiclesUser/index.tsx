import { useSessionContext } from "../../contexts/sessionContext";
import { CardAuction } from "../CardAuction";
import { CardVehicle } from "../CardVehicles";
import Carousel from "../Carousel";
import CarouselAuction from "../CarouselAuction";
import { EmptyVehicles } from "../EmptyVehicles";
import { Container } from "./styles";

const AllVehiclesUser = () => {
  const { userData } = useSessionContext();

  const auctionUserVehicles = userData.products?.filter(
    (product) => product.type_announcement === "Leilão"
  );

  const carsUser = userData.products?.filter(
    (product) =>
      product.type_announcement === "Venda" && product.type_vehicle === "Carro"
  );

  const motoUser = userData.products?.filter(
    (product) =>
      product.type_announcement === "Venda" && product.type_vehicle === "Moto"
  );

  return (
    <Container>
      <CarouselAuction
        children={
          <>
            {auctionUserVehicles?.length! > 0 ? (
              auctionUserVehicles?.map((vehicle) => (
                <li className="div-item-vei" key={vehicle.id}>
                  <CardAuction
                    title={vehicle.title}
                    subtitle={vehicle.description}
                    kmCar={vehicle.kilometers}
                    image={vehicle.image}
                    abrevUser={userData?.name!}
                    yearCar={vehicle.year}
                    nameUser={userData?.name!}
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
            {carsUser?.length! > 0 ? (
              carsUser?.map((vehicle) => (
                <li className="div-item-vei" key={vehicle.id} id={vehicle.id}>
                  <CardVehicle
                    image={vehicle.image}
                    title={vehicle.title}
                    subtitle={vehicle.description}
                    abrevName={userData?.name!}
                    name={userData?.name!}
                    kmCar={vehicle.kilometers}
                    yearCar={vehicle.year}
                    priceCar={vehicle.price}
                    idProduct={vehicle.id}
                  />
                </li>
              ))
            ) : (
              <EmptyVehicles message="Não há carros no momento" />
            )}
          </>
        }
      />

      <Carousel
        type="Moto"
        children={
          <>
            {motoUser?.length! > 0 ? (
              motoUser?.map((vehicle) => (
                <li className="div-item-vei" key={vehicle.id} id={vehicle.id}>
                  <CardVehicle
                    image={vehicle.image}
                    title={vehicle.title}
                    subtitle={vehicle.description}
                    abrevName={userData?.name!}
                    name={userData?.name!}
                    kmCar={vehicle.kilometers}
                    yearCar={vehicle.year}
                    priceCar={vehicle.price}
                    idProduct={vehicle.id}
                  />
                </li>
              ))
            ) : (
              <EmptyVehicles message="Não há motos no momento" />
            )}
          </>
        }
      />
    </Container>
  );
};

export { AllVehiclesUser };
