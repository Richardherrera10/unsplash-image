class PhotoRouter {
  constructor (router, controller, response, httpCode, checkToken) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller // instancia de controlador
    this._response = response
    this._httpCode = httpCode
    this._checkToken = checkToken
    this.registerRoutes()
  }

  registerRoutes () {
    /* this._router.get('/', this._checkToken, await this.handleGetSong.bind(this))
    this._router.post('/', this._checkToken, await this.handlePostSong.bind(this)) */
    this._router.post('/', this._checkToken, this.handlePostPhoto.bind(this))

    this._router.get('/allPhotos', this._checkToken, this.handleGetPhoto.bind(this))
    this._router.get('/getTags/:tag', this._checkToken, this.handleGetPhotobyTag.bind(this))
    this._router.get('/getPhotos/:id', this._checkToken, this.handleGetPhotobyId.bind(this))

    this._router.delete('/', this.handleDeletePhoto.bind(this))
    this._router.put('/', this.handleUpdatePhoto.bind(this))
  }

  // photo

  handleGetPhoto (req, res) {
    const result = this._ctrl.getAllPhoto()
    this._response.success(req, res, result, this._httpCode.ok)
  }

  handleGetPhotobyTag (req, res) {
    const tagToFind = req.params.tag
    console.log('la TAG escrita es', tagToFind)
    const result = this._ctrl.getPhotosByTag(tagToFind)
    this._response.success(req, res, result, this._httpCode.ok)
  }

  handleGetPhotobyId (req, res) {
    const idToFind = req.params.id
    console.log('la id escrita en postman es', idToFind)
    const result = this._ctrl.getPhotosById(idToFind)
    this._response.success(req, res, result, this._httpCode.ok)
  }

  handlePostPhoto (req, res) {
    console.log('im in the handle')
    const photo = req.body
    console.log('posting photo', photo)
    const result = this._ctrl.createNewPhoto(photo)
    this._response.success(req, res, result, this._httpCode.created)
  }

  handleDeletePhoto (req, res) {
    const photo = req.body
    console.log('del photo', photo)
    const result = this._ctrl.deletePhoto(photo)
    this._response.success(req, res, result, this._httpCode.created)
  }

  handleUpdatePhoto (req, res) {
    console.log('in update handle')
    const photo = req.body
    console.log('`photo is`', photo)
    const result = this._ctrl.updatePhoto(photo)
    this._response.success(req, res, result, this._httpCode.created)
  }
}

export default PhotoRouter
