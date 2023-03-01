import ProductProvider from "../contexts/productContext";
import RegisterProvider from "../contexts/registerContext";
import { IAuthProvider } from "../interfaces";

const Providers = ({ children }: IAuthProvider) => {
  return (
    <RegisterProvider>
      <ProductProvider> {children} </ProductProvider>
    </RegisterProvider>
  );
};

export { Providers };
