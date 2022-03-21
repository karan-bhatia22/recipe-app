import { Request, Response } from "express";
import { Recipe } from "../models/Recipe";
export const updateRecipe = async (req: Request, res: Response) => {
  const id = req.params.id;
  const update = req.body;

  try {
    const recipe = await Recipe.findOneAndUpdate({ id: id }, update, {
      new: true,
    });
    res.json(recipe);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
};
