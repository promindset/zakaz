"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import db from '../../db'
const router = express_1.default.Router();
router.post('/', (req, res) => {
    const { firstName, lastName, email, phoneNumber, password, confirmPassword, birthDate, gender, userType } = req.body;
    console.log(req.body);
    // db.insert("INSERT INTO users (first_name) VALUES ('fawzi2')")
});
exports.default = router;
