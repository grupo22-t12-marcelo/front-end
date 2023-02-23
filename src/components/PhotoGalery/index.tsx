import { CoverProduct } from "../CoverProduct/index";
import { Photo } from "./style";

const PhotoGalery = (props: any) => {
  return (
    <Photo id="photo">
      <h3>Fotos</h3>
      <div>
        {props.photos.map((photo: string) => {
          return (
            <CoverProduct
              src={"/src/assets/Carro-CapaProduct.png"}
              alt={"miniatura"}
            />
          );
        })}
      </div>
    </Photo>
  );
};

export { PhotoGalery };
