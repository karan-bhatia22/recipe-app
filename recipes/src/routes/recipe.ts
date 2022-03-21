import express from "express";
import { addRecipe } from "../controllers/addRecipe";
import { deleteRecipe } from "../controllers/deleteRecipe";
import { getAllRecipes } from "../controllers/getAllRecipes";
import { getOneRecipe } from "../controllers/getOneRecipe";
import { updateRecipe } from "../controllers/updateRecipe";

const router = express.Router();

// @route GET /recipe/ returns all the recipes
router.get("/", getAllRecipes);

// @route GET /recipe/:id returns recipe with id
router.get("/:id", getOneRecipe);

// @route POST /recipe/ returns newly added recipe
router.post("/", addRecipe);

// @route PUT /recipe/:id returns updated recipe
router.put("/:id", updateRecipe);

// @route DELETE /recipe/:id returns deleted recipe
router.delete("/:id", deleteRecipe);

export default router;
