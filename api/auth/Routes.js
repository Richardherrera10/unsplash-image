export default class AuthRoute {
  constructor (router, controller, response, httpCode) {
    this._router = router()
    this._controller = controller
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  async registerRoutes () {
    // middleware para que se encargue de verificar los datos
    this._router.post('/signin', this.handleSignIn.bind(this))
  }

  handleSignIn (req, res) {
    try {
      const result = this._controller.authenticationUser(req.body)
      if (result._auth) {
        this._response.success(req, res, result, this._httpCode.OK)
      } else {
        this._response.error(req, res, result, this._httpCode.BAD_REQUEST)
      }
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.INTERNAL_SERVER_ERROR)
    }
  }
}
