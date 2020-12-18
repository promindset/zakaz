"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const routes_1 = require("./routes");
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.config(); // dotenv
// Defined Methods
const app = express_1.default();
// Middlewares
app.use(body_parser_1.default.json());
// Routes
app.use('/register', routes_1.register);
// Server Port
app.listen(process.env.PORT, () => console.log(`Server Started on port ${process.env.PORT}`));
