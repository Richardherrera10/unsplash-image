class UserRouter {
  constructor (router, controller, response, httpCode, checkUser) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller // instancia de controlador
    this._response = response
    this._httpCode = httpCode
    this._checkUser = checkUser
    this.registerRoutes()
  }

  async registerRoutes () {
    this._router.get('/', this.handleGetUser.bind(this))
    // this.checkUser middleware para verificar al usuario, revisa si es correcto y sigue
    // this._router.post('/signup', this.handleSignUp.bind(this))
    this._router.post('/signup', this._checkUser, await this.handleSignUp.bind(this))
  }

  handleGetUser (req, res) {
    const result = this._ctrl.getAllUser()
    if (result instanceof Error) {
      this._response.success(req, res, result, 201)
    }
    this._response.success(req, res, result, this._httpCode.ok)
  }

  handleSignUp (req, res) {
    const user = req.body
    const result = this._ctrl.createUser(user)
    this._response.success(req, res, result, this._httpCode.created)
  }

  async handleDeleteUser (req, res) {
    const user = req.body
    console.log('router user', user)
    const result = await this._ctrl.deleteUser(user)
    this._response.success(req, res, result, this._httpCode.created)
  }

  async handleUpdateUser (req, res) {
    const user = req.body
    const result = await this._ctrl.updateUser(user)
    this._response.success(req, res, result, this._httpCode.created)
  }
}

export default UserRouter
