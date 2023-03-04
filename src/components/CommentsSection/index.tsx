import { useCommentContext } from "../../contexts/commentsContext";
import { useProductContext } from "../../contexts/productContext";
import { dateHour } from "../../utils/date";
import { Comment } from "../Comment";
import { Comments } from "./style";

const CommentsSection = () => {
  const { comments } = useCommentContext();

  return (
    <Comments>
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            nameUser={"User"}
            dateComment={dateHour(comment?.createdAt)}
            commentText={comment.comment}
          />
        );
      })}
    </Comments>
  );
};

export { CommentsSection };
