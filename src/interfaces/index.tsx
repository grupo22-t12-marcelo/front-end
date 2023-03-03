import { type } from "os";
import { ReactNode } from "react";

export interface IAuthProvider {
  children: ReactNode;
}
export interface IProps {
  children?: JSX.Element;
}

export interface ICoverProduct {
  src: string;
  id: string;
}

export interface IAnuncio {
  tipo: String;
  titulo: String;
  ano: Date;
  quilometragem: String;
  preco: String;
  descricao: String;
  tipoDoVeiculo: String;
  imagemCapa?: String;
  imagem1?: String;
  imagem2?: String;
  imagem3?: String;
  imagem4?: String;
}

export interface IRegister {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description: string;
  address?: {};
  zipCode?: string;
  state?: string;
  city?: string;
  road?: string;
  number?: string;
  complement?: string;
  type_account: string;
  password: string;
  confirmPassword?: string;
}

export interface IUserDataNull extends IRegister {}

export interface ILogin {
  email: string;
  password: string;
}

export interface IForgotLogin {
  email: string;
}

export interface IUserVehicle {
  id: string;
  name: string;
  description: string;
  type_account: string;
}

export interface IVehicle {
  id: string;
  description: string;
  image: string;
  is_published: boolean;
  kilometers: number;
  price: number;
  year: number;
  title: string;
  type_announcement: string;
  type_vehicle: string;
  createdAt: string;
  user: IUserVehicle;
}
