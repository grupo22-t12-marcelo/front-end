import { useProductContext } from "../../contexts/productContext";
import { ICoverProduct } from "../../interfaces";
import { Cover } from "./style";

const CoverProduct: React.FC<ICoverProduct> = ({ src, id }: ICoverProduct) => {
  const { toggle } = useProductContext();

  return (
    <Cover onClick={() => toggle(id!)} id={id}>
      <img height={300} src={src} alt={"Carro Capa"} />
    </Cover>
  );
};

export { CoverProduct };
