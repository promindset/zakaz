import { Options } from 'sequelize'

enum Environments {
  LIVE = 'live',
  STAGING = 'staging',
  DEVELOPMENT = 'development'
}

interface Config {
  port: number
  pgdbConfig: {
    dialect: string
    dbHost: string
    dbPort: number
    database: string
    username: string
    password: string
  }
}

export type ConfigInterface = {
  [key in Environments]: Config
}
