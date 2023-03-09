import { Button } from "reactstrap";
import { useCommentContext } from "../../contexts/commentsContext";
import { useProductContext } from "../../contexts/productContext";
import { useSessionContext } from "../../contexts/sessionContext";
import { dateHour } from "../../utils/date";
import { Comment } from "../Comment";
import { Comments } from "./style";

const CommentsSection = () => {
  const { comments } = useCommentContext();
  const { userData } = useSessionContext();
  const { oneVehicle } = useProductContext();

  return (
    <Comments>
      {comments.map((comment) => {
        return (
          <>
            <Comment
              abrevName={comment.user.name}
              key={comment.id}
              nameUser={comment.user.name}
              dateComment={dateHour(comment?.createdAt)}
              commentText={comment.comment}
            />
            {oneVehicle.type_announcement === "Leilão" &&
              userData.id === oneVehicle.user?.id && <Button>Vender</Button>}
          </>
        );
      })}
    </Comments>
  );
};

export { CommentsSection };
