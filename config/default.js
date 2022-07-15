// datos importartes que seran necesarios para el funcionamiento de aplicacion
// buscar variables de entorno dentro del archivo env

import dotenv from 'dotenv'
dotenv.config()

export const config = {
  api: {
    port: process.env.PORT || 8000,
    hostname: process.env.HOSTNAME || 'localhost',
    name: process.env.NAMEAPP || 'app'
  },
  db: {
    host: process.env.DB_HOST || 'localhost'
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secret'
  },
  nodemailer: {
    email: process.env.EMAIL,
    password: process.env.PASSWORD
  }
}
