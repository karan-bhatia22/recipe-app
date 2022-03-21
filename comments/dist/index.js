"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const comment_1 = __importDefault(require("./routes/comment"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
// middleware
dotenv_1.default.config();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
if (process.env.NODE_ENV !== "production")
    app.use((0, morgan_1.default)("dev"));
const PORT = process.env.PORT || 9900;
mongoose_1.default.connect(process.env.DB_URI || "", () => console.log("Connected to MongoDB"));
// @routes
app.use("/comment", comment_1.default);
// @route index route
app.get("/", (req, res) => {
    res.send("Hello world from comments service!");
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
