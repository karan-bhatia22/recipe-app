"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addComment_1 = require("../controllers/addComment");
const getAllComments_1 = require("../controllers/getAllComments");
const router = express_1.default.Router();
// @route GET /comment/:id returns all comments for specific recipe with id passed in params
router.get("/:id", getAllComments_1.getAllComments);
// @route POST /comment/:id returns recently added comment for recipe with id
router.post("/:id", addComment_1.addComment);
exports.default = router;
