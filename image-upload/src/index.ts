import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import image from "./routes/image";
import cors from "cors";
const app: Application = express();

// middleware
dotenv.config();
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

const PORT = process.env.PORT || 9080;

// @route image upload routes
app.use("/image", image);
//@route index route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello world from image uploader!");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
