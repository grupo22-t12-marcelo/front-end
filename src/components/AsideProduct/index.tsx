import { InfoUserSeeAllProducts } from "../InfoUserSeeAllProducts";
import { PhotoGalery } from "../PhotoGalery";
import { Aside, AsideBox } from "./style";

const AsideProduct = () => {
  let userLogged = "Samuel Leão";
  let photos = [
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
  ];

  return (
    <Aside id="aside">
      <AsideBox>
        <PhotoGalery photos={photos} />
        <InfoUserSeeAllProducts
          title={"Samuel Leão"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          }
          nameUser={userLogged}
        />
      </AsideBox>
    </Aside>
  );
};

export { AsideProduct };
