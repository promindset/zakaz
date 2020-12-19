import express from 'express'
import routesV1 from './v1'

export class Routes {
  public init(app: express.Application): void {
    app.use('/api/v1', routesV1)
  }
}
