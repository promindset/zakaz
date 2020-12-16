"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.post('/', (req, res) => {
    console.log(req.body);
});
exports.default = router;
