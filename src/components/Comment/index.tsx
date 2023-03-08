import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AiOutlineEdit } from "react-icons/ai";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { useCommentContext } from "../../contexts/commentsContext";
import { IEditCommentRequest } from "../../interfaces";
import { schemaComments } from "../../validators/schemas";
import { CircleUser } from "../CircleUser";
import { CommentDiv } from "./style";


const Comment = ({ nameUser, dateComment, commentText, abrevName }: any) => {
  const { comments, setOpenEditComments, editComment, openEditComments, setIsModalExcluirComentario } = useCommentContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditCommentRequest>({
    resolver: yupResolver(schemaComments),
  });

  const { ref, ...updateComment } = register("comment");

  return (
    <CommentDiv>
      <div>
        <div className="div-circle-name-date">
          <CircleUser/>  
          <h5>{nameUser}</h5>
        <span>
          <img src="src/assets/pointComment.png" alt="" id="point" />
        </span>
        <span>{dateComment}</span>
        </div>
        <Button onClick={()=>setOpenEditComments(!openEditComments)} color={"var(--grey10)"} width={20} eight={20}>
          <AiOutlineEdit id="editicon"/>
        </Button>
      </div>
        {openEditComments === true ? (
          <div >
            <Form className="div-editar-comentario" onSubmit={handleSubmit(editComment)}>
              <FormGroup className="input-textera">
                <Input
                  id="commentText"
                  type="textarea"
                  placeholder={commentText}
                  bsSize="lg"
                  size={128}
                  innerRef={ref}
                  {...updateComment}
                />
                {errors.comment?.message}
              </FormGroup>
              <div className="div-btns-editar-excluir">
                <Button onClick={()=>setOpenEditComments(false)} color={"secondary"} type="submit">
                Editar
              </Button>
              <Button className="excluir" onClick={() => {
                setIsModalExcluirComentario(true)
              }}>Excluir</Button>
              </div>
            </Form>
          </div>
        ):(
        <p id="comment-text">{commentText}</p>
      )}
    </CommentDiv>
    );

};

export { Comment };

