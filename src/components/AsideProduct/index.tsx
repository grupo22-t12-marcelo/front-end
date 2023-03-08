import { InfoUserSeeAllProducts } from "../InfoUserSeeAllProducts";
import { PhotoGalery } from "../PhotoGalery";
import { Aside, AsideBox } from "./style";

const AsideProduct = () => {
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
