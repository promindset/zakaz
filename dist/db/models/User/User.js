"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../../db");
class User extends sequelize_1.Model {
    static getById(userId, attributes) {
        return __awaiter(this, void 0, void 0, function* () {
            return User.findOne({
                where: {
                    Id: userId
                },
                attributes
            });
        });
    }
}
exports.User = User;
User.init({
    Id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    Email: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    Username: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    FirstName: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    LastName: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: true
    },
    Password: {
        type: sequelize_1.DataTypes.STRING(64),
        allowNull: true
    }
}, {
    tableName: 'User',
    sequelize: db_1.sequelize
});
