import * as yup from "yup";

export const schemaAnuncio = yup.object().shape({
  tipo: yup.string().required(),
  titulo: yup.string().required(),
  // ano: yup.number().required(),
  quilometragem: yup.string().required(),
  // preco: yup.string().required(),
  descricao: yup.string().required(),
  tipoDoVeiculo: yup.string().required(),
  imagemCapa: yup.string().required(),
  imagem1: yup.string(),
  imagem2: yup.string(),
  imagem3: yup.string(),
  imagem4: yup.string(),
});

export const schemaLogin = yup.object().shape({
  user: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export const schemaForgotPassword = yup.object().shape({
  email: yup.string().email().required("CAmpo Obrigatório"),
});
