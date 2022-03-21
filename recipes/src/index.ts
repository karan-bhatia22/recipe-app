import express, { Application, Request, Response } from "express";
import recipe from "./routes/recipe";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
const app: Application = express();

// middleware
dotenv.config();
app.use(express.json());
if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));
mongoose.connect(process.env.DB_URI || "", () => {
  console.info("Connected to MongoDB");
});
app.use(cors());
const PORT = process.env.PORT || 8080;

// @route recipe routes
app.use("/recipe", recipe);
//@route index route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello world from recipe service!");
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
