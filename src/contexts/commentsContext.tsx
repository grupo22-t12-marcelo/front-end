import { AxiosError, AxiosResponse } from "axios";
import { useContext, createContext, useState, useEffect } from "react";

import { IAuthProvider, IComments } from "../interfaces";
import api from "../services/api";
import { useProductContext } from "./productContext";

interface ICommentProvider {
  comments: IComments[];
}

export const CommentsContext = createContext({} as ICommentProvider);

const CommentProvider = ({ children }: IAuthProvider) => {
  const { idVehicle } = useProductContext();

  const [comments, setComments] = useState<IComments[]>([]);

  useEffect(() => {
    api
      .get(`/comment/${idVehicle}`)
      .then((response: AxiosResponse) => {
        setComments(response.data);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  }, [idVehicle]);

  return (
    <CommentsContext.Provider value={{ comments }}>
      {children}
    </CommentsContext.Provider>
  );
};

export function useCommentContext() {
  const context = useContext(CommentsContext);

  return context;
}

export default CommentProvider;
