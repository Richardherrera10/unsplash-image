// validar y v que exista
// generar token
// otorgar persmisos , roles
import AuthRoute from './Routes.js'
import AuthController from './Controller.js'
import Auth from '../../entity/Auth.js'
import { helpers } from '../../lib/helpers.js'
import { response } from '../../response/response.js'
import httpCode from '../../response/httpcode.js'
import DataJson from '../../store/DataJson.js'

export const authModule = (expressRoute) => {
  const authService = new DataJson()
  const authController = new AuthController(authService, Auth, helpers.comparePassword, helpers.generateToken)
  const authRoute = new AuthRoute(expressRoute, authController, response, httpCode)
  return authRoute._router
}
