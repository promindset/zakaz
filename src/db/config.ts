/*
This db config file is mainly being used by sequalize command line tool to extract database connection strings
and perform migrations, seeings, etc...
*/

import { Config } from '../config'

const config = Config.pgdbConfig

export = config
