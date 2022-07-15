import HttpCode from './httpcode.js'

export const response = {
  // plantilla cuando la peticion del request sea exitosa
  success: function (req, res, msg, status) {
    const statusCode = status || HttpCode.OK
    const statusMsg = msg || 'ok'
    res.status(statusCode).send({
      request: req.method + ' ' + req.url,
      error: false,
      status: statusCode,
      body: statusMsg
    })
  },
  error: function (req, res, msg, status) {
    const statusCode = status || HttpCode.INTERNAL_SERVER_ERROR
    const statusMsg = msg || 'Internal Server Error'
    res.status(statusCode).send({
      request: req.method + ' ' + req.url,
      error: true,
      status: statusCode,
      body: statusMsg
    })
  }
}
