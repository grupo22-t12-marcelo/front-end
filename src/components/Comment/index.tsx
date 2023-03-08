import { useCommentContext } from "../../contexts/commentsContext";
import { returnAbrevName } from "../../utils/abrevName";
import { CircleUser } from "../CircleUser";
import { CommentDiv } from "./style";

const Comment = ({ nameUser, dateComment, commentText, abrevName }: any) => {
  const { comments } = useCommentContext();
  return (
    <CommentDiv>
      <div>
        <div className="circleUser">
          <p>{returnAbrevName(abrevName)} </p>
        </div>
        <h5>{nameUser}</h5>
        <span>
          <img src="../../src/assets/pointComment.png" alt="" id="point" />
        </span>
        <span>{dateComment}</span>
      </div>
      <p id="comment-text">{commentText}</p>
    </CommentDiv>
  );
};

export { Comment };
