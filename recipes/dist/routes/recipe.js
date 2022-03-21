"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addRecipe_1 = require("../controllers/addRecipe");
const deleteRecipe_1 = require("../controllers/deleteRecipe");
const getAllRecipes_1 = require("../controllers/getAllRecipes");
const getOneRecipe_1 = require("../controllers/getOneRecipe");
const updateRecipe_1 = require("../controllers/updateRecipe");
const router = express_1.default.Router();
// @route GET /recipe/ returns all the recipes
router.get("/", getAllRecipes_1.getAllRecipes);
// @route GET /recipe/:id returns recipe with id
router.get("/:id", getOneRecipe_1.getOneRecipe);
// @route POST /recipe/ returns newly added recipe
router.post("/", addRecipe_1.addRecipe);
// @route PUT /recipe/:id returns updated recipe
router.put("/:id", updateRecipe_1.updateRecipe);
// @route DELETE /recipe/:id returns deleted recipe
router.delete("/:id", deleteRecipe_1.deleteRecipe);
exports.default = router;
