"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recipe_1 = __importDefault(require("./routes/recipe"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// middleware
dotenv_1.default.config();
app.use(express_1.default.json());
if (process.env.NODE_ENV !== "production")
    app.use((0, morgan_1.default)("dev"));
mongoose_1.default.connect(process.env.DB_URI || "", () => {
    console.info("Connected to MongoDB");
});
app.use((0, cors_1.default)());
const PORT = process.env.PORT;
// @route recipe routes
app.use("/recipe", recipe_1.default);
//@route index route
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
