import { Comment as CommentInterface } from "../../interfaces/Comment.interface";
function Comment(props: { comment: CommentInterface | undefined }) {
  return (
    <div className="h-fit w-full border border-gray-300 mb-2 p-4 rounded-lg">
      {/* comment title */}
      <p className="font-semibold text-lg">{props.comment?.title}</p>
      {/* comment author */}
      <p className="text-sm text-gray-500 mt-2"> by {props.comment?.author}</p>
      {/* comment message*/}
      <p className="text-gray-500 mt-4">{props.comment?.message}</p>
    </div>
  );
}

export default Comment;
