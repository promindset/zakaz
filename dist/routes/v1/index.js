"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = __importDefault(require("./auth/register"));
const register_2 = __importDefault(require("./auth/register"));
register_1.default.get('/ping', (req, res) => {
    res.send({
        status: 'success',
        msg: 'api v1 is alive!!!'
    });
});
register_1.default.use('/register', register_2.default);
exports.default = register_1.default;
