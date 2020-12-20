/*
Any variables that need to be defines via global/environment variables, make sure to define their
types here, to not run into typescript compilation errors.
*/

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'staging' | 'live'
      PORT: number

      // Database connections strings
      DB_USER: string
      DB_PASS: string
      DB_NAME: string
      DB_PORT: number
      DB_HOST: string
    }
  }
}

export {}
