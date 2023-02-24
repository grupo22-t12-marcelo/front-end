import { CircleUser } from "../CircleUser";
import { CommentDiv } from "./style";

const Comment = ({ nameUser, dateComment, commentText }: any) => {
  return (
    <CommentDiv>
      <div>
        <CircleUser />
        <h5>{nameUser}</h5>
        <span>
          <img src="src/assets/pointComment.png" alt="" id="point" />
        </span>
        <span>{dateComment}</span>
      </div>
      <p id="comment-text">{commentText}</p>
    </CommentDiv>
  );
};

export { Comment };
