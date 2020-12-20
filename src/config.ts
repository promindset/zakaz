const environment = process.env['NODE_ENV'] ?? 'development'

import { ConfigInterface } from './types'

const GlobalConfig: ConfigInterface = {
  development: {
    port: process.env.PORT,
    pgdbConfig: {
      dbHost: process.env.DB_HOST ?? '127.0.0.1',
      dbPort: process.env.DB_PORT ?? 5432,
      username: process.env.DB_USER ?? 'admin',
      password: process.env.DB_PASS ?? 'admin123',
      database: process.env.DB_NAME ?? 'zakaz-dev',
      dialect: 'postgres'
    }
  },
  staging: {
    port: process.env.PORT,
    pgdbConfig: {
      dialect: 'postgres',
      dbHost: process.env.DB_HOST ?? '',
      dbPort: process.env.DB_PORT ?? 0,
      username: process.env.DB_USER ?? '',
      password: process.env.DB_PASS ?? '',
      database: process.env.DB_NAME ?? ''
    }
  },

  live: {
    port: process.env.PORT,
    pgdbConfig: {
      dialect: 'postgres',
      dbHost: process.env.DB_HOST ?? '',
      dbPort: process.env.DB_PORT ?? 0,
      username: process.env.DB_USER ?? '',
      password: process.env.DB_PASS ?? '',
      database: process.env.DB_NAME ?? ''
    }
  }
}

export const Config = GlobalConfig[environment]
