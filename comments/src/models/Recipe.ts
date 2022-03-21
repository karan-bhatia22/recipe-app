import mongoose from "mongoose";
const RecipeSchema = new mongoose.Schema({
  id: String,
  name: String,
  image: String,
  time: String,
  date: String,
  ingredients: String,
  steps: String,
  comments: Array,
});

export const Recipe = mongoose.model("recipes", RecipeSchema);
