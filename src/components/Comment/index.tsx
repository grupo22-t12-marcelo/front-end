import { useCommentContext } from "../../contexts/commentsContext";
import { CircleUser } from "../CircleUser";
import { CommentDiv } from "./style";

const Comment = ({ nameUser, dateComment, commentText, abrevName }: any) => {
  const { comments } = useCommentContext();
  return (
    <CommentDiv>
      <div>
        <div className="circleUser">
          {abrevName?.length > 0 ? (
            abrevName?.split(" ").length === 1 ? (
              <p> {abrevName[0]} </p>
            ) : (
              <>
                <p>{abrevName[0]}</p>
                <p>{abrevName.split(" ")[1][0]}</p>
              </>
            )
          ) : (
            <></>
          )}
        </div>
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
