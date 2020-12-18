"use strict";
exports.__esModule = true;
// Imports
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var routes_1 = require("./routes");
var body_parser_1 = require("body-parser");
dotenv_1.config(); // dotenv
// Defined Methods
var app = express_1["default"]();
// Middlewares
app.use(body_parser_1["default"].json());
// Routes
app.use('/register', routes_1.register);
// Server Port
app.listen(process.env.PORT, function () { return console.log("Server Started on port " + process.env.PORT); });
