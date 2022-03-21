import { Request, Response } from "express";
export const getAllComments = (req: Request, res: Response) => {
  res.send("Getting all comments with recipe id " + req.params.id);
};
