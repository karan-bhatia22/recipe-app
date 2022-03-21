"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uploadImage_1 = require("../controllers/uploadImage");
const multer_1 = __importDefault(require("multer"));
const router = express_1.default.Router();
const upload = (0, multer_1.default)({ dest: "uploads/" });
//@route GET /image/ returns error message that is comprehendible by human
router.get("/", (req, res) => {
    res.send("The route you should use is /image/upload and a POST request.");
});
//@route POST /image/upload returns url of asset uploaded
router.post("/upload", upload.single("img"), uploadImage_1.uploadImage);
exports.default = router;
