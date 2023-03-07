import { AxiosError, AxiosResponse } from "axios";
import { useContext, createContext, useState, useEffect } from "react";

import { IAuthProvider, ICommentRequest, IComments } from "../interfaces";
import api from "../services/api";
import { useProductContext } from "./productContext";
import { useSessionContext } from "./sessionContext";

interface ICommentProvider {
  comments: IComments[];
  postComment: (value: ICommentRequest) => void;
}

export const CommentsContext = createContext({} as ICommentProvider);

const CommentProvider = ({ children }: IAuthProvider) => {
  const { idVehicle } = useProductContext();
  const { token } = useSessionContext();

  const [comments, setComments] = useState<IComments[]>([]);
  const [postComments, setPostComments] = useState("");

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

  useEffect(() => {
    api
      .get(`/comment/${idVehicle}`)
      .then((response: AxiosResponse) => {
        setComments(response.data);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  }, [idVehicle, postComments]);

  return (
    <CommentsContext.Provider value={{ comments, postComment }}>
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
