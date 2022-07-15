import { helpers } from '../../lib/helpers.js'
import { response } from '../../response/response.js'
import HttpCode from '../../response/httpcode.js'

export const chekToken = async (req, res, next) => {
  const token = req.headers['x-access-token'] || req.headers['authorization'] || ''
  if (token) {
    const verify = await helpers.verifyToken(token)
    try {
      if (verify) {
        // const idUser = verify.id
        console.log('token valid')
        next()
      } else {
        console.log('token invalid')
        return response.error(req, res, 'token invalid', HttpCode.UNAUTHORIZED)
      }
    } catch (error) {
      console.log('token invalid')
      return response.error(req, res, 'token invalid', HttpCode.UNAUTHORIZED)
    }
  } else {
    return response.error(req, res, 'token not found', HttpCode.UNAUTHORIZED)
  }
}
