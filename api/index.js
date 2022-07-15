// archivo para iniciar todo el servidor

import Server from './Server.js'
import { config } from '../config/default.js'

function main (api) {
  const server = new Server(api)
  server.start()
}
main(config.api)
