"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsURL = exports.mongodb = exports.pgdb = exports.port = exports.environment = void 0;
exports.environment = process.env.NODE_ENV;
exports.port = process.env.PORT;
exports.pgdb = {
    dev: {
        username: 'admin',
        password: 'admin123',
        dbName: 'zakaz-dev',
        port: 5432,
        host: '127.0.0.1'
    },
    staging: {
        username: 'abc',
        password: '123'
    },
    live: {
        username: 'abc',
        password: '123'
    }
};
exports.mongodb = {};
exports.corsURL = process.env.CORS_URL;
