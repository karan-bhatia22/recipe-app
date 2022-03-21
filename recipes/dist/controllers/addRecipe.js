"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRecipe = void 0;
const Recipe_1 = require("../models/Recipe");
const addRecipe = (req, res) => {
    const recipe = req.body;
    Recipe_1.Recipe.create(recipe).then((doc) => {
        res.json(doc);
    });
};
exports.addRecipe = addRecipe;
