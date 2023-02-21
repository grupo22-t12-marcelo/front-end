import ProductProvider from "../contexts/productContext";
import { IAuthProvider } from "../interfaces";

const Providers = ({ children }: IAuthProvider) => {
  return <ProductProvider> {children} </ProductProvider>;
};

export { Providers };
