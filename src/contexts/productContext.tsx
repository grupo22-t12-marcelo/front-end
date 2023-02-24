import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { IAuthProvider } from "../interfaces";

interface IProductProvider {
  count: string;
  setCount: (value: string) => void;
  isModalAnuncio: boolean;
  setIsModalAnuncio: (value: boolean) => void;
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
  userLogged: string;
  tagsCar: string[];
  photos: string[];
  idPhoto: string;
  setIdPhoto: (value: string) => void;
  comments: object[];
  accountType: string;
  navigate: NavigateFunction;
  modal: boolean;
  setModal: (value: boolean) => void;
  toggle: (id: string) => void;
}

export const ProductContext = createContext({} as IProductProvider);

const ProductProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [isModalAnuncio, setIsModalAnuncio] = useState(true);
  const [isLogged, setIsLogged] = useState(true);

  const toggle = (id: string) => {
    setIdPhoto(id);
    setModal(!modal);
  };

  const [idPhoto, setIdPhoto] = useState("");
  const userLogged = "Samuel Leão";
  const accountType = "Anunciante";
  const tagsCar = ["2013", "0KM"];
  const photos = [
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
  ];

  const comments = [
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

  const [count, setCount] = useState("02:00:00");

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
        accountType,
        isLogged,
        setIsLogged,
        navigate,
        modal,
        setModal,
        toggle,
        idPhoto,
        setIdPhoto,
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
