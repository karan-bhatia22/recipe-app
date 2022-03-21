import "./App.css";
import { useEffect } from "react";
import AddRecipe from "./components/add-recipe/AddRecipe";
import Recipes from "./components/recipes/Recipes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipePage from "./components/recipe-page/RecipePage";
import Navbar from "./components/navbar/Navbar";
import { store } from "./storage/store";
function App() {
  useEffect(() => {
    fetch("/recipe", {
      headers: {
        "Cache-Control": "max-age=1000, must-revalidate",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        store.dispatch({ type: "ADD_RECIPES", payload: json });
      });
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <AddRecipe />
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
