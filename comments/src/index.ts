import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import comment from "./routes/comment";
import mongoose from "mongoose";
const app: Application = express();

// middleware
dotenv.config();
app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));
const PORT = process.env.PORT || 9900;
mongoose.connect(process.env.DB_URI || "", () =>
  console.log("Connected to MongoDB")
);

// @routes
app.use("/comment", comment);

// @route index route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello world from comments service!");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
