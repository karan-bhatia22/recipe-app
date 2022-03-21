import express from "express";
import { uploadImage } from "../controllers/uploadImage";
import multer from "multer";
const router = express.Router();
const upload = multer({ dest: "uploads/" });
//@route GET /image/ returns error message that is comprehendible by human
router.get("/", (req, res) => {
  res.send("The route you should use is /image/upload and a POST request.");
});

//@route POST /image/upload returns url of asset uploaded
router.post("/upload", upload.single("img"), uploadImage);
export default router;
