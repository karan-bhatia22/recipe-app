import { Recipe } from "../interfaces/Recipe.interface";
// import { v4 as uuid } from "uuid";
// let initialRecipe: Recipe = {
//   id: uuid(),
//   image: "pizza.jpeg",
//   date: "17/03/22",
//   name: "Pizza",
//   ingredients: "Flour, Pizza Sauce, Toppings",
//   steps:
//     "1) Create dough from flour. 2) Create Pizza bread from dough. 3) Apply pizza sauce on bread. 4) Add toppings and bake.",
//   time: "50 minutes",
//   comments: [
//     {
//       author: "abc",
//       message: "This is comment 1",
//       title: "Comment 1",
//     },
//     {
//       author: "xyz",
//       message: "This is comment 2",
//       title: "Comment 2",
//     },
//   ],
// };
export let initialState = {
  recipes: [] as Recipe[],
  isModalOpen: false,
};
