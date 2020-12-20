import app from './app'
import { Config } from './config'

app
  .listen(Config.port, () => {
    console.log('Server running on port: ', Config.port)
  })
  .on('error', (e) => console.log('error: ', e))
