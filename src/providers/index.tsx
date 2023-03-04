import CommentProvider from "../contexts/commentsContext";
import ProductProvider from "../contexts/productContext";
import RegisterProvider from "../contexts/registerContext";
import SessionProvider from "../contexts/sessionContext";
import { IAuthProvider } from "../interfaces";

const Providers = ({ children }: IAuthProvider) => {
  return (
    <SessionProvider>
      <RegisterProvider>
        <ProductProvider>
          <CommentProvider>{children}</CommentProvider>
        </ProductProvider>
      </RegisterProvider>
    </SessionProvider>
  );
};

export { Providers };
