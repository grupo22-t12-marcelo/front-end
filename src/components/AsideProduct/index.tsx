import { useProductContext } from "../../contexts/productContext";
import { InfoUserSeeAllProducts } from "../InfoUserSeeAllProducts";
import { PhotoGalery } from "../PhotoGalery";
import { Aside, AsideBox } from "./style";

const AsideProduct = () => {
  const { userLogged, photos } = useProductContext();

  return (
    <Aside id="aside">
      <AsideBox>
        <PhotoGalery />
        <InfoUserSeeAllProducts />
      </AsideBox>
    </Aside>
  );
};

export { AsideProduct };
