export const environment = process.env.NODE_ENV
export const port = process.env.PORT

export const pgdb = {
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
}

export const mongodb = {}

export const corsURL = process.env.CORS_URL
