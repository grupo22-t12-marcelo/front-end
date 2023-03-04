import CommentProvider from "../contexts/commentsContext";
import ProductProvider from "../contexts/productContext";
import UserProductsProvider from "../contexts/productsUser.context";
import RegisterProvider from "../contexts/registerContext";
import SessionProvider from "../contexts/sessionContext";
import { IAuthProvider } from "../interfaces";

const Providers = ({ children }: IAuthProvider) => {
  return (
    <SessionProvider>
      <RegisterProvider>
        <ProductProvider>
          <UserProductsProvider>
            <CommentProvider>{children}</CommentProvider>
          </UserProductsProvider>
        </ProductProvider>
      </RegisterProvider>
    </SessionProvider>
  );
};

export { Providers };
