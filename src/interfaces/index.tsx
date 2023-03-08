import { type } from "os";
import { ReactNode } from "react";

export interface IAuthProvider {
  children: ReactNode;
}
export interface IProps {
  children?: JSX.Element;
}

export interface ICoverProduct {
  src: string | undefined;
  id: string | undefined;
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

export interface IImagesGallery {
  id: string;
  image1: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
}

export interface INewImagesGallery {
  id: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
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
  imagesGallery: IImagesGallery;
}

export interface IProduct {
  createdAt: string;
  description: string;
  id: string;
  image: string;
  is_published: boolean;
  kilometers: number;
  price: number;
  title: string;
  type_announcement: string;
  type_vehicle: string;
  updatedAt: string;
  year: number;
  comments?: IComment[];
}

export interface IAddress {
  city: string;
  complement: string;
  id: string;
  number: string;
  road: string;
  state: string;
  zipCode: string;
}

export interface IComment {
  comment: string;
  createdAt: string;
  id: string;
  updatedAt: string;
}

export interface ICommentRequest {
  comment: string;
}

export interface IUser {
  address?: IAddress;
  birthdate: string;
  comments?: IComment[];
  cpf: string;
  createdAt: string;
  description: string;
  email: string;
  id: string;
  name: string;
  phone: string;
  products?: IProduct[];
  type_account: string;
  updatedAt: string;
}

export interface IUserAddressUpdate {
  zipCode?: string;
  state?: string;
  city?: string;
  road?: string;
  number?: string;
  complement?: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birthdate?: string;
  description?: string;
  address?: IUserAddressUpdate;
}

export interface IComments {
  id: string;
  comment: string;
  createdAt: string;
  user: IUserVehicle;
}
