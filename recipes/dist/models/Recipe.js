"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const RecipeSchema = new mongoose_1.default.Schema({
    id: String,
    name: String,
    image: String,
    time: String,
    date: String,
    ingredients: String,
    steps: String,
    comments: Array,
});
exports.Recipe = mongoose_1.default.model("recipes", RecipeSchema);
