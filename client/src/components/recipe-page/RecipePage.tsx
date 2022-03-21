import { useState } from "react";
import Comments from "../comments/Comments";
import CommentsForm from "../comments-form/CommentsForm";
import { connect } from "react-redux";
import { Recipe } from "../../interfaces/Recipe.interface";
import AddRecipe from "../add-recipe/AddRecipe";
function RecipePage(props: { recipes: Recipe[]; isModalOpen: Boolean }) {
  const pathArr = window.location.pathname.split("/");
  const id = pathArr[pathArr.length - 1];
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | undefined>(
    props.recipes.find((recipe) => recipe.id === id)
  );
  return (
    <>
      <AddRecipe></AddRecipe>
      <div className="w-full h-full flex flex-col items-center mt-10">
        <div className="w-3/4 border border-gray-300 rounded-lg">
          {/* header */}
          <div className="flex flex-col justify-between w-full">
            <img
              src={currentRecipe?.image}
              alt="Recipe"
              className=" w-full h-80 rounded-t-lg"
            />
            <h1 className="w-1/2 mt-8 text-4xl ml-3">{currentRecipe?.name}</h1>
          </div>

          {/* body */}
          <div className="ml-3 mt-8 flex flex-col">
            {/* ingredients list */}
            <div className="flex">
              <p>Ingredients: </p>
              <p className="ml-5">{currentRecipe?.ingredients}</p>
            </div>

            {/* steps */}
            <div className="flex flex-col mt-8">
              <p className="text-lg">Steps to follow: </p>
              <p className="mt-5 mb-24">{currentRecipe?.steps}</p>
            </div>
          </div>
        </div>
        {/* comments section */}
        <div className="flex flex-col w-3/4 mt-16">
          <h1 className="text-2xl mb-10">Comments: </h1>
          <CommentsForm
            currentRecipe={currentRecipe}
            setCurrentRecipe={setCurrentRecipe}
          />

          <Comments comments={currentRecipe ? currentRecipe.comments : []} />
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state: any) => {
  return {
    recipes: state.recipes,
    isModalOpen: state.isModalOpen,
  };
};

export default connect(mapStateToProps)(RecipePage);
