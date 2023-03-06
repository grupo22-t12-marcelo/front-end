import { useProductContext } from "../../contexts/productContext";
import { CoverProduct } from "../CoverProduct/index";
import { Photo } from "./style";

const PhotoGalery = () => {
  const { photos, oneVehicle } = useProductContext();

  return (
    <Photo id="photo">
      <h3>Fotos</h3>
      <div>
        {photos.map((photo: string, key: number) => {
          return <CoverProduct key={key} src={photo} id={String(key)} />;
        })}
      </div>
    </Photo>
  );
};

export { PhotoGalery };
