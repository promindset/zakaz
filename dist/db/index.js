"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = require("dotenv");
dotenv_1.config();
const pool = new pg_1.Pool({
    user: process.env.DBUSER,
    host: process.env.DBHOST,
    database: process.env.DBNAME,
    password: process.env.DBPASSWORD,
    port: 5432
});
exports.default = {
    select: (text) => {
        pool.connect();
        return pool.query(text, (err, res) => {
            if (err)
                throw err;
            console.log(res.rows[0]);
            pool.end();
        });
    },
    insert: (text) => {
        pool.connect();
        return pool.query(text, (err, res) => {
            if (err)
                throw err;
            pool.end();
        });
    }
};
