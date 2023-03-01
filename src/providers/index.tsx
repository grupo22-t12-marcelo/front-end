import ProductProvider from "../contexts/productContext";
import RegisterProvider from "../contexts/registerContext";
import SessionProvider from "../contexts/sessionContext";
import { IAuthProvider } from "../interfaces";

const Providers = ({ children }: IAuthProvider) => {
  return (
    <SessionProvider>
      <RegisterProvider>
        <ProductProvider> {children} </ProductProvider>
      </RegisterProvider>
    </SessionProvider>
  );
};

export { Providers };
