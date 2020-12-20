"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
const dbConfig = config_1.Config.pgdbConfig;
exports.sequelize = new sequelize_1.Sequelize({
    host: dbConfig.dbHost,
    port: dbConfig.dbPort,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database
});
