import { Cover } from "../../pages/Product/style";

const CoverProduct = ({ src, alt }:any) => {
  return (
    <Cover>
      <img src={src} alt={alt} />
    </Cover>
  );
};

export { CoverProduct };

