import { useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { Recipe } from "../../interfaces/Recipe.interface";
import { Comment } from "../../interfaces/Comment.interface";
import { store } from "../../storage/store";
function CommentsForm(props: {
  currentRecipe: Recipe | undefined;
  setCurrentRecipe: React.Dispatch<React.SetStateAction<Recipe | undefined>>;
}) {
  const [commentTitle, setCommentTitle] = useState<string>("");
  const [commentAuthor, setCommentAuthor] = useState<string>("");
  const [commentMsg, setCommentMsg] = useState<string>("");

  const handleOnClick = () => {
    if (commentAuthor !== "" && commentMsg !== "" && commentTitle !== "") {
      const newComment: Comment = {
        author: commentAuthor,
        message: commentMsg,
        title: commentTitle,
      };
      if (props.currentRecipe) {
        const oldComments = props.currentRecipe.comments;
        let recipe;
        if (oldComments) {
          recipe = {
            ...props.currentRecipe,
            comments: [newComment, ...oldComments],
          };
        } else {
          recipe = {
            ...props.currentRecipe,
            comments: [newComment],
          };
        }
        props.setCurrentRecipe(recipe);
        let recipes = store.getState().recipes;
        let index = recipes.findIndex(
          (recipe) => recipe.id === props.currentRecipe?.id
        );
        recipes.splice(index, 1, recipe);

        fetch(`/comment/${props.currentRecipe.id}`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(newComment),
        });
        store.dispatch({ type: "UPDATE_RECIPE", payload: recipes });
        // clearing out input values
        setCommentAuthor("");
        setCommentMsg("");
        setCommentTitle("");
      }
    }
    return;
  };
  return (
    <div className="flex flex-col justify-between mb-10 border border-gray-300 p-6 rounded-lg">
      <Input
        label="Title"
        type="text"
        value={commentTitle}
        setValue={setCommentTitle}
      />
      <Input
        label="Author"
        type="text"
        value={commentAuthor}
        setValue={setCommentAuthor}
      />
      <Input
        label="Comment"
        type="textarea"
        value={commentMsg}
        setValue={setCommentMsg}
      />
      <div className="mt-8 flex justify-end" onClick={handleOnClick}>
        <Button value="Add Comment"></Button>
      </div>
    </div>
  );
}

export default CommentsForm;
