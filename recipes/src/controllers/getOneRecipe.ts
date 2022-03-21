import { Request, Response } from "express";
import { Recipe } from "../models/Recipe";
export const getOneRecipe = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const recipe = await Recipe.find({ id: id });
    res.json(recipe);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};
