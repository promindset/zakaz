"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const v1_1 = __importDefault(require("./v1"));
class Routes {
    init(app) {
        app.use('/api/v1', v1_1.default);
    }
}
exports.Routes = Routes;
