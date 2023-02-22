import { CoverProduct } from "../CoverProduct";
import { DescriptionProduct } from "../DescriptionProduct";
import { InfoProduct } from "../InfoProduct";
import { PhotoGalery } from "../PhotoGalery";
import { Section } from "./style";

const SectionProduct = () => {
  let tagsCar = ["2013", "0KM"];
  let photos = [
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
  ];

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
      <DescriptionProduct
        title={"Descrição"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <PhotoGalery photos={photos} />
    </Section>
  );
};

export { SectionProduct };
