import { ReactNode } from "react";
import { CardAuction } from "../CardAuction";
import { DivCarousel } from "./styles";

interface ICarouselAuction {
  children: ReactNode;
}

const CarouselAuction = ({ children }: ICarouselAuction) => {
  return (
    <DivCarousel>
      <h1 className="title-carousel">Leilão</h1>
      <ul className="list-card-vehicles">{children}</ul>
    </DivCarousel>
  );
};

export default CarouselAuction;
