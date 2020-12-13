"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
dotenv_1.config();
// Defined Methods 
const app = express_1.default();
// Routes 
app.get("/", (req, res) => {
    res.send("hello world");
});
app.listen(3000, () => console.log(`Server Started on port ${process.env.PORT}`));
