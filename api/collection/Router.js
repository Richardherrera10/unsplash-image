class CollectionRouter {
  constructor (router, controller, response, httpCode, checkToken) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller // instancia de controlador
    this._response = response
    this._httpCode = httpCode
    this._checkToken = checkToken
    this.registerRoutes()
    // con
  }

  registerRoutes () {
    this._router.get('/', this._checkToken, this.handleGetCollection.bind(this))
    this._router.post('/', this._checkToken, this.handlePostCollection.bind(this))
  }

  handleGetCollection (req, res) {
    const collection = this._ctrl.getAllCollection()
    this._response.success(req, res, collection, this._httpCode.ok)
  }

  handlePostCollection (req, res) {
    const collection = req.body
    console.log('handle post', collection)
    const result = this._ctrl.createCollection(collection)
    this._response.success(req, res, result, this._httpCode.created)
  }
}

export default CollectionRouter
