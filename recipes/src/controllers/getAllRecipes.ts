import { Request, Response } from "express";
import { Recipe } from "../models/Recipe";

export const getAllRecipes = async (req: Request, res: Response) => {
  try {
    const docs = await Recipe.find({}).sort({ _id: -1 });
    res.json(docs);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};
