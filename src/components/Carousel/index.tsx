import { ReactNode } from "react";
import { DivCarousel } from "./styles";

interface ICarousel {
  type: string;
  children: ReactNode;
}

const Carousel = ({ type, children }: ICarousel) => {
  return (
    <DivCarousel id={type}>
      <h1 className="title-carousel">{type} </h1>
      <ul className="list-card-vehicles">{children}</ul>
    </DivCarousel>
  );
};

export default Carousel;
