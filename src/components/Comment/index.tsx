import { AiOutlineEdit } from "react-icons/ai";
import { Button } from "reactstrap";
import { useCommentContext } from "../../contexts/commentsContext";
import { returnAbrevName } from "../../utils/abrevName";
import { Circle } from "../CircleUser/style";
import { CommentDiv } from "./style";

const Comment = ({ nameUser, dateComment, commentText, id, userId, userCommentId }: any) => {
  const { comments, setOpenModalEditComments, openModalEditComments, setIdComment, setPlaceholderComment } = useCommentContext();


  const openModalExecutEdit = (id:string) =>{
    setOpenModalEditComments(!openModalEditComments);
    setIdComment(id);
    setPlaceholderComment(commentText);

  }

  return (
    <CommentDiv>
      <div>
        <div className="div-circle-name-date">
          <Circle className="circleUser">
            <p>{returnAbrevName(nameUser)}</p>
          </Circle>
          <h5>{nameUser}</h5>
          <span>
            <img src="src/assets/pointComment.png" alt="" id="point" />
          </span>
          <span>{dateComment}</span>
        </div>
        {userId === userCommentId && 
        <Button onClick={()=>openModalExecutEdit(id)} color={"var(--grey10)"} width={20} eight={20}>
          <AiOutlineEdit id="editicon"/>
        </Button>
        }
      </div>
      <p className="comment-text">{commentText}</p>
    </CommentDiv>
    );

};

export { Comment };

