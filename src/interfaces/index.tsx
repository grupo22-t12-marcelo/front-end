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
  address: {};
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
  type_account: string;
  password: string;
  confirmPassword?: string;
}

export interface ILogin {
  user: string;
  password: string;
}
