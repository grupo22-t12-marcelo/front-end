import { ReactNode } from "react";
import { DivCarousel } from "./styles";

interface ICarousel {
  type: string;
  children: ReactNode;
}

const Carousel = ({ type, children }: ICarousel) => {
  return (
    <DivCarousel>
      <h1 id={type} className="title-carousel">{type} </h1>
      <ul className="list-card-vehicles">{children}</ul>
    </DivCarousel>
  );
};

export default Carousel;
