import { Request, Response } from "express";
import { Recipe } from "../models/Recipe";
export const deleteRecipe = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const recipe = await Recipe.findOneAndDelete(
      { id: id },
      { returnOriginal: true }
    );
    res.json(recipe);
  } catch (err) {
    console.error(err);
    res.sendStatus(500).send(err);
  }
};
