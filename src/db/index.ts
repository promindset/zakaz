import pg, { Pool } from 'pg'
import dotenv, { config } from 'dotenv'
import { query } from 'express'

config()

const pool = new Pool({
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  database: process.env.DBNAME,
  password: process.env.DBPASSWORD,
  port: 5432
})

export default {
  select: (text: any) => {
    pool.connect()
    return pool.query(text, (err, res) => {
      if (err) throw err
      console.log(res.rows[0])
      pool.end()
    })
  },
  insert: (text: any) => {
    pool.connect()
    return pool.query(text, (err, res) => {
      if (err) throw err
      pool.end()
    })
  }
}
