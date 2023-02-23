import { useContext, createContext, useState } from "react";
import { IAuthProvider } from "../interfaces";

interface IProductProvider {
  count: string;
  setCount: (value: string) => void;
  isModalAnuncio: boolean;
  modal: boolean;
  setIsModalAnuncio: (value: boolean) => void;
  toggle: () => void;
}

export const ProductContext = createContext({} as IProductProvider);

const ProductProvider = ({ children }: IAuthProvider) => {
  const [count, setCount] = useState("02:00:00");
  const [isModalAnuncio, setIsModalAnuncio] = useState(true);
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <ProductContext.Provider
      value={{
        count,
        setCount,
        isModalAnuncio,
        setIsModalAnuncio,
        toggle,
        modal,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export function useProductContext() {
  const context = useContext(ProductContext);

  return context;
}

export default ProductProvider;
