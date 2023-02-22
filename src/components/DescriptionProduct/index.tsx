import { Description } from "./style";

const DescriptionProduct = (props: any) => {
  return (
    <Description>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </Description>
  );
};

export { DescriptionProduct };
