import { ReactNode } from "react";

export interface IAuthProvider {
  children: ReactNode;
}
export interface IProps{
  children?: JSX.Element
}

export interface IAnuncio {
  tipo: String
  titulo: String
  ano: Date
  quilometragem: String
  preco: String
  descricao: String
  tipoDoVeiculo: String
  imagemCapa?: String
  imagem1?: String
  imagem2?: String
  imagem3?: String
  imagem4?: String

}