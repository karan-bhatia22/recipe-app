import { Comment } from "./Comment.interface";
export interface Recipe {
  id?: string;
  name: string;
  image: string;
  time: string;
  date: string;
  ingredients: string;
  steps: string;
  comments?: Comment[];
}
