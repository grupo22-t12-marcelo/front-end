import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { IAuthProvider } from "../interfaces";

interface IProductProvider {
  count: string;
  setCount: Dispatch<SetStateAction<string>>;
  isModalAnuncio: boolean;
  setIsModalAnuncio: (value: boolean) => void;
  userLogged: string;
  tagsCar: string[];
  photos: string[];
  comments: object[];
}

export const ProductContext = createContext({} as IProductProvider);

const ProductProvider = ({ children }: IAuthProvider) => {
  const [count, setCount] = useState("00:00:10");
  const [isModalAnuncio, setIsModalAnuncio] = useState(true);
  let userLogged = "Samuel Leão";
  let tagsCar = ["2013", "0KM"];
  let photos = [
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
  ];

  let comments = [
    {
      nameUser: "Júlia Lima",
      dateComment: "há 3 dias",
      commentText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      nameUser: "Marcos Antônio",
      dateComment: "há 7 dias",
      commentText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      nameUser: "Camila Silva",
      dateComment: "há 1 mês",
      commentText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <ProductContext.Provider
      value={{
        count,
        setCount,
        isModalAnuncio,
        setIsModalAnuncio,
        userLogged,
        tagsCar,
        photos,
        comments,
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
