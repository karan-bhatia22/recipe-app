"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRecipe = void 0;
const Recipe_1 = require("../models/Recipe");
const updateRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const update = req.body;
    try {
        const recipe = yield Recipe_1.Recipe.findOneAndUpdate({ id: id }, update, {
            new: true,
        });
        res.json(recipe);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500).send(err);
    }
});
exports.updateRecipe = updateRecipe;
