"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const image_1 = __importDefault(require("./routes/image"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// middleware
dotenv_1.default.config();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
if (process.env.NODE_ENV !== "production")
    app.use((0, morgan_1.default)("dev"));
const PORT = process.env.PORT || 9080;
// @route image upload routes
app.use("/image", image_1.default);
//@route index route
app.get("/", (req, res) => {
    res.send("Hello world from image uploader!");
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
