import { useProductContext } from "../../contexts/productContext";
import { Comment } from "../Comment";
import { Comments } from "./style";

const CommentsSection = () => {
  const { comments } = useProductContext();

  return (
    <Comments>
      {comments.map((comment: any) => {
        return (
          <Comment
            nameUser={comment.nameUser}
            dateComment={comment.dateComment}
            commentText={comment.commentText}
          />
        );
      })}
    </Comments>
  );
};

export { CommentsSection };
