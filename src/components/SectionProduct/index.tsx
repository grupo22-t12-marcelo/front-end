import { CoverProduct } from "../CoverProduct";
import { InfoProduct } from "../InfoProduct";
import { Section } from "./style";

const SectionProduct = () => {
  let tagsCar = ["2013", "0KM"];

  return (
    <Section>
      <CoverProduct
        src={"/src/assets/Carro-CapaProduct.png"}
        alt={"Carro Capa"}
      />
      <InfoProduct
        title={"Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 "}
        tags={tagsCar}
        price={"R$ 00.000,00"}
      />
    </Section>
  );
};

export { SectionProduct };
