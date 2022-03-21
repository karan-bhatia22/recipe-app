import express from "express";
import { addComment } from "../controllers/addComment";
import { getAllComments } from "../controllers/getAllComments";
const router = express.Router();

// @route GET /comment/:id returns all comments for specific recipe with id passed in params
router.get("/:id", getAllComments);

// @route POST /comment/:id returns recently added comment for recipe with id
router.post("/:id", addComment);
export default router;
