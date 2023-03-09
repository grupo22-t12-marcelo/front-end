import { AxiosError, AxiosResponse } from "axios";
import { createContext, useContext, useEffect, useState } from "react";

import { IAuthProvider, ICommentRequest, IComments, IEditCommentRequest } from "../interfaces";
import api from "../services/api";
import { useProductContext } from "./productContext";
import { useSessionContext } from "./sessionContext";

interface ICommentProvider {
  comments: IComments[];
  postComment: (value: ICommentRequest) => void;
  editComment: (value: IEditCommentRequest) => void;
  setOpenModalEditComments: (value: boolean) => void;
  idComment:string;
  setIdComment: (value: string) => void;
  openModalEditComments: Boolean;
  setIsModalExcluirComentario: (value: boolean) => void;
  isModalExcluirComentario: Boolean;
  excludeComment:(value:string ) => void;
  setPlaceholderComment: (value: string) => void;
  placeholderComment: string;
}

export const CommentsContext = createContext({} as ICommentProvider);

const CommentProvider = ({ children }: IAuthProvider) => {
  const { idVehicle } = useProductContext();
  const { token } = useSessionContext();

  const [comments, setComments] = useState<IComments[]>([]);
  const [openModalEditComments, setOpenModalEditComments] = useState(false);
  const [editComments, setEditComments] = useState("");
  const [idComment, setIdComment] = useState("");
  const [postComments, setPostComments] = useState("");
  const [placeholderComment, setPlaceholderComment] = useState("");
  const [isModalExcluirComentario, setIsModalExcluirComentario] = useState(false);

  const postComment = (data: ICommentRequest) => {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    api
      .post(`/comment/${idVehicle}`, data)
      .then((response: AxiosResponse) => {
        setPostComments(response.data);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };

  const excludeComment = (id:string) => {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
    api
      .delete(`/comment/${id}`)
      .then((response: AxiosResponse) => {
        console.log(response)
        setIsModalExcluirComentario(false)
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  }


  const editComment = (data: IEditCommentRequest) => {

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    api
      .patch(`/comment/${idVehicle}`, data)
      .then((response: AxiosResponse) => {
        setOpenModalEditComments(false);
        setEditComments(response.data);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (idVehicle) {
      api
        .get(`/comment/${idVehicle}`)
        .then((response: AxiosResponse) => {
          setComments(response.data);
        })
        .catch((err: AxiosError) => {
          console.log(err);
        });
    }
  }, [idVehicle, postComments, editComment]);

  
  return (
    <CommentsContext.Provider value={{placeholderComment, setPlaceholderComment, excludeComment, idComment, setIdComment, isModalExcluirComentario ,comments, postComment, editComment, setOpenModalEditComments, openModalEditComments, setIsModalExcluirComentario }}>
      {children}
    </CommentsContext.Provider>
  );
};

// AVISO

export function useCommentContext() {
  const context = useContext(CommentsContext);

  return context;
}

export default CommentProvider;
