// Imports
import express from 'express'
import { Routes } from './routes'

class App {
  public app: express.Application
  public routes: Routes = new Routes()

  constructor() {
    this.app = express()
    this.config()
    this.routes.init(this.app)
  }

  private config(): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }
}

export default new App().app
