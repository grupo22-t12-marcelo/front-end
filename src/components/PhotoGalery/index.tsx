import { useProductContext } from "../../contexts/productContext";
import { CoverProduct } from "../CoverProduct/index";
import { Photo } from "./style";

const PhotoGalery = () => {
  const { oneVehicle } = useProductContext();

  const images: { [unit: string]: string } = { ...oneVehicle.imagesGallery };

  const imagesArray = [];

  for (let image in images) {
    if (images[image] !== "none" && images[image] !== "" && image !== "id") {
      imagesArray.push(images[image]);
    }
  }

  return (
    <>
      <Photo id="photo">
        <h3>Fotos</h3>
        <div>
          {imagesArray.map((photo: string, key: number) => {
            return <CoverProduct key={key} src={photo} id={String(key)} />;
          })}
        </div>
      </Photo>
    </>
  );
};

export { PhotoGalery };
