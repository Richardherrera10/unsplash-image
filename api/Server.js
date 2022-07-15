// configuracion del servidor

import express from 'express'
import { photoModule } from './photo/index.js'
import { collectionModule } from './collection/index.js'
import { userModule } from './users/index.js'
import { authModule } from './auth/index.js'
import { collectionPhotoModule } from './collectionPhoto/index.js'
import cors from 'cors'
import morgan from 'morgan'
import swaggerUI from 'swagger-ui-express'
import YAML from 'yamljs'

// configuracion paths
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
// import { photoModule } from './photo/index.js'

class Server {
  constructor (config) {
    this._app = express()
    this._port = config.port
    this._hostname = config.hostname
    this._name = config.name
    // configurar paths
    this._dirname = dirname(fileURLToPath(import.meta.url)) // almacena el directorio del servidor
    this._swaggerFile = YAML.load(join(dirname(fileURLToPath(import.meta.url)), '../docs/swagger.yaml'))
    this.setMiddlewares()
    this.setRoutes()
  }

  // middleware para que el servidor pueda entender el json
  setMiddlewares () {
    this._app.use(express.json())
    this._app.use(express.urlencoded({ extended: true }))
    this._app.use(cors())
    this._app.use(morgan('dev'))
  }
  // configurar rutas raiz con .use

  setRoutes () {
    this._app.use('/api/v1/user', userModule(express.Router))
    this._app.use('/api/v1/auth', authModule(express.Router))
    this._app.use('/api/v1/photo', photoModule())
    this._app.use('/api/v1/collection', collectionModule())
    this._app.use('/api/v1/collection/', collectionPhotoModule())
    // this._app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(this._swaggerFile))
  }

  // metodo iniciar servidor
  start () {
    this._app.set('hostname', this._hostname)
    this._app.listen(this._port, () => {
      console.log(`${this._name} is running on http://${this._hostname}:${this._port}`)
    })
  }
}

export default Server
