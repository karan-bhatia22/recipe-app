import { Request, Response } from "express";
import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const uploadImage = (req: Request, res: Response) => {
  const file = req.file;
  if (!file) {
    res.json({ uploadStatus: "failed" });
    return;
  } else {
    cloudinary.v2.uploader.upload(
      file.path,
      { folder: "recipe-app", use_filename: true },
      (err, result) => {
        if (err) {
          res.send(err);
          return;
        } else {
          res.send(result);
          return;
        }
      }
    );
  }
};
