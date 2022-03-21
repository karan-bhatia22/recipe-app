import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Input from "../input/Input";
import Button from "../button/Button";
import ImageUploadModal from "../image-upload-modal/ImageUploadModal";
import { store } from "../../storage/store";
import { connect } from "react-redux";
import { Recipe } from "../../interfaces/Recipe.interface";
import { v4 as uuid } from "uuid";
function AddRecipe(props: any) {
  const handleCancel = () => {
    store.dispatch({ type: "CLOSE_MODAL" });
  };
  const handleAdd = () => {
    const recipe: Recipe = {
      id: uuid(),
      name: recipeName,
      image: recipeImage,
      date: new Date().toLocaleDateString("en-GB"),
      time: recipeTime,
      ingredients: recipeIngredients,
      steps: recipeSteps,
    };

    fetch("/recipe/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(recipe),
    })
      .then((res) => res.json())
      .then((json) => store.dispatch({ type: "ADD_RECIPE", payload: json }));

    console.log(store.getState());
  };
  const handleImageClick = () => {
    setIsUploadImageOpen(true);
  };

  const [recipeName, setRecipeName] = useState<string>("");
  const [recipeTime, setRecipeTime] = useState<string>("");
  const [recipeIngredients, setRecipeIngredients] = useState<string>("");
  const [recipeSteps, setRecipeSteps] = useState<string>("");
  const [recipeImage, setRecipeImage] = useState<string>("pizza.jpeg");
  const [isUploadImageOpen, setIsUploadImageOpen] = useState<boolean>(false);
  return (
    <>
      <ImageUploadModal
        setRecipeImage={setRecipeImage}
        isUploadImageOpen={isUploadImageOpen}
        setIsUploadImageOpen={setIsUploadImageOpen}
      />
      <Dialog
        open={props.isModalOpen}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        className="modal-dialog"
      >
        <DialogTitle className="modal-title">
          <p className="text-3xl">Add New Recipe</p>
        </DialogTitle>

        <DialogContent>
          <div className="modal-image-container w-auto border-4 border-dashed">
            <img
              src={recipeImage}
              alt="New Recipe"
              className="p-2"
              onClick={handleImageClick}
            />
          </div>

          <div className="modal-body">
            {/* name */}
            <Input
              label="Name"
              type="text"
              value={recipeName}
              setValue={setRecipeName}
            />
            {/* time to prepare */}
            <Input
              label="Time"
              type="text"
              value={recipeTime}
              setValue={setRecipeTime}
            />
            {/* ingredients */}
            <Input
              label="Ingredients"
              type="text"
              value={recipeIngredients}
              setValue={setRecipeIngredients}
            />
            {/* steps */}
            <Input
              label="Steps"
              type="textarea"
              value={recipeSteps}
              setValue={setRecipeSteps}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <div onClick={handleCancel}>
            <Button value="Cancel" />
          </div>
          <div onClick={handleAdd}>
            <Button value="Add" />
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
}
const mapStateToProps = (state: any) => {
  return {
    recipes: state.recipes,
    isModalOpen: state.isModalOpen,
  };
};
export default connect(mapStateToProps)(AddRecipe);
