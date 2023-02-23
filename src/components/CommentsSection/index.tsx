import { Comment } from "../Comment";
import { Comments } from "./style";

const CommentsSection = ({ props }: any) => {
  console.log(props);

  return (
    <Comments>
      {props.map((comment: any) => {
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
