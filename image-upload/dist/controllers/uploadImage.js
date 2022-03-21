"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const cloudinary_1 = __importDefault(require("cloudinary"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
cloudinary_1.default.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
const uploadImage = (req, res) => {
    const file = req.file;
    if (!file) {
        res.json({ uploadStatus: "failed" });
        return;
    }
    else {
        cloudinary_1.default.v2.uploader.upload(file.path, { folder: "recipe-app", use_filename: true }, (err, result) => {
            if (err) {
                res.send(err);
                return;
            }
            else {
                res.send(result);
                return;
            }
        });
    }
};
exports.uploadImage = uploadImage;
