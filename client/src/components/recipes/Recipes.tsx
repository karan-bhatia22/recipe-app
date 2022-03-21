import Recipe from "../recipe/Recipe";
import { connect } from "react-redux";

import { Recipe as RecipeInterface } from "../../interfaces/Recipe.interface";
function Recipes(props: { recipes: RecipeInterface[]; isModalOpen: Boolean }) {
  return (
    <div className="flex justify-center mt-10 ml-10 mr-10">
      <div className="flex justify-center flex-wrap -mx-1 lg:-mx-4 gap-4">
        {props.recipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    recipes: state.recipes,
    isModalOpen: state.isModalOpen,
  };
};
export default connect(mapStateToProps)(Recipes);
