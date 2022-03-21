import { Comment as CommentInterface } from "../../interfaces/Comment.interface";
import Comment from "../comment/Comment";
function Comments(props: { comments?: CommentInterface[] }) {
  return (
    <div className="flex flex-col">
      {props.comments?.map((comment, index) => (
        <Comment comment={comment} key={index} />
      ))}
    </div>
  );
}

export default Comments;
