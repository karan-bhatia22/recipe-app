import { Link } from "react-router-dom";
import { Recipe as RecipeInterface } from "../../interfaces/Recipe.interface";
function Recipe(props: { recipe: RecipeInterface }) {
  return (
    <div className="my-1 px-3 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 border border-gray-300 shadow-xl rounded-lg hover:shadow-2xl hover:bg-gray-100">
      <Link to={`/recipe/${props.recipe.id}`}>
        {/* recipe image*/}
        <div className="w-full h-auto">
          <img src={props.recipe.image} alt="Recipe" className="w-full mt-2" />
        </div>
        {/* recipe title and date*/}
        <div className="flex justify-between mt-4">
          <p className="text-lg font-semibold">{props.recipe.name}</p>
          <p className="text-gray-500 text-sm">{props.recipe.date}</p>
        </div>

        {/* footer */}
        <div className="mt-10 mb-16">
          <p className="text-md text-gray-500">
            Ingredients: {props.recipe.ingredients}
          </p>
          <p className="text-md mt-6 text-gray-500">
            Time : {props.recipe.time}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Recipe;
