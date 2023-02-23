import { useProductContext } from "../../contexts/productContext";
import { Cover } from "./style";

const CoverProduct = ({ src, alt, id }: any) => {
  const { toggle } = useProductContext();

  return (
    <Cover onClick={() => toggle(id)} id={id}>
      <img src={src} alt={alt} />
    </Cover>
  );
};

export { CoverProduct };
