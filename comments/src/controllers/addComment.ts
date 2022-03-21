import { Request, Response } from "express";
import { Recipe } from "../models/Recipe";
export const addComment = async (req: Request, res: Response) => {
  const id = req.params.id;
  const newComment = req.body;
  try {
    const doc = await Recipe.findOneAndUpdate(
      { id: id },
      { $push: { comments: newComment } },
      { new: true }
    );
    res.json(doc);
  } catch (err) {
    console.error(err);
    res.sendStatus(500).send(err);
  }
};
