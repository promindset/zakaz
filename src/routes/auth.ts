import express, { query, Request, Response } from 'express'
import db from '../db'
const router: express.Router = express.Router()

interface User {
  firstName: String
  lastName: String
  email: String
  phoneNumber: Number
  gender: String
  birthDate: String
  password: string
  userType: String
  confirmPassword: String
}

router.post('/', (req: Request, res: Response) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    confirmPassword,
    birthDate,
    gender,
    userType
  }: User = req.body
  console.log(req.body)
  db.insert("INSERT INTO users (first_name) VALUES ('fawzi2')")
})

export default router
