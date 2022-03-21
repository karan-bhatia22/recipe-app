import { Request, Response } from "express";
import { Recipe as RecipeInterface } from "../interfaces/Recipe.interface";
import { Recipe } from "../models/Recipe";
export const addRecipe = (req: Request, res: Response) => {
  const recipe: RecipeInterface = req.body;
  Recipe.create(recipe).then((doc) => {
    res.json(doc);
  });
};
