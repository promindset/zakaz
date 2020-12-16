import express, { Request, Response } from 'express'

const router: express.Router = express.Router()

router.post('/register', (req: Request, res: Response) => {
  console.log(req.body)
})

export default router
