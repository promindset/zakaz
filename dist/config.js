"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const environment = (_a = process.env['NODE_ENV']) !== null && _a !== void 0 ? _a : 'development';
const GlobalConfig = {
    development: {
        port: process.env.PORT,
        pgdbConfig: {
            dbHost: (_b = process.env.DB_HOST) !== null && _b !== void 0 ? _b : '127.0.0.1',
            dbPort: (_c = process.env.DB_PORT) !== null && _c !== void 0 ? _c : 5432,
            username: (_d = process.env.DB_USER) !== null && _d !== void 0 ? _d : 'admin',
            password: (_e = process.env.DB_PASS) !== null && _e !== void 0 ? _e : 'admin123',
            database: (_f = process.env.DB_NAME) !== null && _f !== void 0 ? _f : 'zakaz-dev',
            dialect: 'postgres'
        }
    },
    staging: {
        port: process.env.PORT,
        pgdbConfig: {
            dialect: 'postgres',
            dbHost: (_g = process.env.DB_HOST) !== null && _g !== void 0 ? _g : '',
            dbPort: (_h = process.env.DB_PORT) !== null && _h !== void 0 ? _h : 0,
            username: (_j = process.env.DB_USER) !== null && _j !== void 0 ? _j : '',
            password: (_k = process.env.DB_PASS) !== null && _k !== void 0 ? _k : '',
            database: (_l = process.env.DB_NAME) !== null && _l !== void 0 ? _l : ''
        }
    },
    live: {
        port: process.env.PORT,
        pgdbConfig: {
            dialect: 'postgres',
            dbHost: (_m = process.env.DB_HOST) !== null && _m !== void 0 ? _m : '',
            dbPort: (_o = process.env.DB_PORT) !== null && _o !== void 0 ? _o : 0,
            username: (_p = process.env.DB_USER) !== null && _p !== void 0 ? _p : '',
            password: (_q = process.env.DB_PASS) !== null && _q !== void 0 ? _q : '',
            database: (_r = process.env.DB_NAME) !== null && _r !== void 0 ? _r : ''
        }
    }
};
exports.Config = GlobalConfig[environment];
