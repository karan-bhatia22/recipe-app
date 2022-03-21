"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllComments = void 0;
const getAllComments = (req, res) => {
    res.send("Getting all comments with recipe id " + req.params.id);
};
exports.getAllComments = getAllComments;
