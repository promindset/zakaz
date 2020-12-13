// Imports
import express from 'express'
import { config } from 'dotenv'

config()

// Defined Methods
const app: express.Application = express()

// Middlewares

// Routes
app.get('/', (req, res) => {
  res.send('hello worlsdad')
})

// Server Port
app.listen(process.env.PORT, () => console.log(`Server Started on port ${process.env.PORT}`))
