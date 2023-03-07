import { AxiosError, AxiosResponse } from "axios";
import { useContext, createContext, useState, useEffect } from "react";
import {
  NavigateFunction,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { IAuthProvider, IVehicle } from "../interfaces";
import api from "../services/api";
import { useSessionContext } from "./sessionContext";

interface IProductProvider {
  count: string;
  setCount: (value: string) => void;
  isModalAnuncio: boolean;
  setIsModalAnuncio: (value: boolean) => void;
  photos: string[];
  idPhoto: string;
  setIdPhoto: (value: string) => void;
  accountType: string;
  navigate: NavigateFunction;
  modal: boolean;
  setModal: (value: boolean) => void;
  toggle: (id: string) => void;
  closeSucess: () => void;
  setIsModalSucess: (value: boolean) => void;
  isModalSucess: boolean;
  setIsModalEditAnuncio: (value: boolean) => void;
  isModalEditAnuncio: boolean;
  isModalEditPerfil: boolean;
  setIsModalEditPerfil: (value: boolean) => void;
  auctionVehicles: IVehicle[];
  carsVehicle: IVehicle[];
  motorbikeVehicle: IVehicle[];
  oneVehicle: Partial<IVehicle>;
  isModalEditAddress: boolean;
  setIsModalEditAddress: (value: boolean) => void;
  setIdVehicle: (value: any) => void;
  idVehicle: string;
  setIsModalExcluirPerfil: (value: boolean) => void;
  isModalExcluirPerfil: boolean;
}

export const ProductContext = createContext({} as IProductProvider);

const ProductProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [isModalAnuncio, setIsModalAnuncio] = useState(false);
  const [isModalSucess, setIsModalSucess] = useState(false);
  const [isModalEditAnuncio, setIsModalEditAnuncio] = useState(false);

  const [isModalExcluirPerfil, setIsModalExcluirPerfil] = useState(false);

  const [isModalEditAddress, setIsModalEditAddress] = useState(false);
  const [isModalEditPerfil, setIsModalEditPerfil] = useState(false);
  const [count, setCount] = useState("");
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [oneVehicle, setOneVehicle] = useState({});
  const [idVehicle, setIdVehicle] = useState("");

  const { setIsLogged, token, setUserData, isLogged } = useSessionContext();

  const closeSucess = () => {
    setIsModalSucess(!isModalSucess);
  };

  const toggle = (id: string) => {
    setIdPhoto(id);
    setModal(!modal);
  };

  const [idPhoto, setIdPhoto] = useState("");
  const accountType = "Anunciante";
  const photos = [
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
  ];

  const auctionVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.type_announcement === "Leilão" && vehicle.is_published === true
  );

  const carsVehicle = vehicles.filter(
    (vehicle) =>
      vehicle.type_announcement === "Venda" &&
      vehicle.type_vehicle === "Carro" &&
      vehicle.is_published === true
  );

  const motorbikeVehicle = vehicles.filter(
    (vehicle) =>
      vehicle.type_announcement === "Venda" &&
      vehicle.type_vehicle === "Moto" &&
      vehicle.is_published === true
  );

  console.log(oneVehicle);

  const getVehicles = () => {
    api
      .get("/products")
      .then((response: AxiosResponse) => {
        setVehicles(response.data);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };

  const getUser = () => {
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api.get("/users").then((response: AxiosResponse) => {
        setUserData({
          ...response.data,
        });
      });
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  };

  useEffect(() => {
    if (token) {
      getUser();
    } else {
      getVehicles();
    }
  }, [isLogged]);

  useEffect(() => {
    if (idVehicle) {
      api
        .get(`/products/${idVehicle}`)
        .then((response: AxiosResponse) => {
          setOneVehicle(response.data);
        })
        .catch((err: AxiosError) => {
          console.log(err);
        });
    }
  }, [idVehicle]);

  return (
    <ProductContext.Provider
      value={{
        count,
        setCount,
        isModalAnuncio,
        setIsModalAnuncio,
        photos,
        accountType,
        navigate,
        modal,
        setModal,
        toggle,
        idPhoto,
        setIdPhoto,
        closeSucess,
        setIsModalSucess,
        isModalSucess,
        isModalEditAnuncio,
        setIsModalEditAnuncio,
        isModalEditPerfil,
        setIsModalEditPerfil,
        auctionVehicles,
        carsVehicle,
        motorbikeVehicle,
        isModalEditAddress,
        setIsModalEditAddress,
        setIdVehicle,
        idVehicle,
        oneVehicle,
        setIsModalExcluirPerfil,
        isModalExcluirPerfil,
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
