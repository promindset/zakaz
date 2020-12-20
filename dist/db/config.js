"use strict";
/*
This db config file is mainly being used by sequalize command line tool to extract database connection strings
and perform migrations, seeings, etc...
*/
const config_1 = require("../config");
const config = config_1.Config.pgdbConfig;
module.exports = config;
