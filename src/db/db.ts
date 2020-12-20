import { Sequelize } from 'sequelize'
import { Config } from '../config'

const dbConfig = Config.pgdbConfig

export const sequelize = new Sequelize({
  host: dbConfig.dbHost,
  port: dbConfig.dbPort,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database
})
