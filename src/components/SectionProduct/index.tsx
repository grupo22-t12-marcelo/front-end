import { Section } from "./style";
import { CommentsSection } from "../CommentsSection";
import { CoverProduct } from "../CoverProduct";
import { DescriptionProduct } from "../DescriptionProduct";
import { InfoProduct } from "../InfoProduct";
import { InfoUserSeeAllProducts } from "../InfoUserSeeAllProducts";
import { FormComment } from "../FormComment";
import { PhotoGalery } from "../PhotoGalery";
import { useProductContext } from "../../contexts/productContext";

const SectionProduct = () => {
  const { photos } = useProductContext();

  return (
    <Section>
      <CoverProduct id="0" src={photos[0]} />
      <InfoProduct />
      <DescriptionProduct />
      <PhotoGalery />
      <InfoUserSeeAllProducts />
      <CommentsSection />
      <FormComment />
    </Section>
  );
};

export { SectionProduct };
