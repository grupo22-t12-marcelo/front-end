import { useCommentContext } from "../../contexts/commentsContext";
import { useSessionContext } from "../../contexts/sessionContext";
import { dateHour } from "../../utils/date";
import { Comment } from "../Comment";
import { Comments } from "./style";

const CommentsSection = () => {
  const { comments } = useCommentContext();
  const { userData } = useSessionContext();

  return (
    <Comments>
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            id={comment.id}
            userId={userData?.id}
            userCommentId={comment.user.id}
            nameUser={comment.user.name}
            dateComment={dateHour(comment?.createdAt)}
            commentText={comment.comment}
          />
        );
      })}
    </Comments>
  );
};

export { CommentsSection };

