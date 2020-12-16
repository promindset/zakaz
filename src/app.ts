// Imports
import express from 'express'
import { config } from 'dotenv'
import { register } from './routes'
import bodyParser from 'body-parser'

config() // dotenv

// Defined Methods
const app: express.Application = express()

// Middlewares
app.use(bodyParser.json())

// Routes
app.use('/register', register)

// Server Port
app.listen(process.env.PORT, () => console.log(`Server Started on port ${process.env.PORT}`))
