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
exports.addComment = void 0;
const Recipe_1 = require("../models/Recipe");
const addComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const newComment = req.body;
    try {
        const doc = yield Recipe_1.Recipe.findOneAndUpdate({ id: id }, { $push: { comments: newComment } }, { new: true });
        res.json(doc);
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500).send(err);
    }
});
exports.addComment = addComment;
