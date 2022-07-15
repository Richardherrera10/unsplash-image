class collectionPhotoRouter {
  constructor (router, controller, response, httpCode) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller // instancia de controlador
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  registerRoutes () {
    // photo - collection table
    this._router.post('/addPhotoToCollection', this.handlePostCollectionPhoto.bind(this))
    // this._router.delete('/deleteSong', await this.handleDeleteSongPlaylist.bind(this))
  }

  handlePostCollectionPhoto (req, res) {
    const collectionPhoto = req.body
    console.log('escrita en postman', collectionPhoto)
    const result = this._ctrl.createNewCollectionPhoto(collectionPhoto)
    this._response.success(req, res, result, this._httpCode.created)
  }

  /* handleDeleteSongPlaylist (req, res) {
    const SongPlaylist = req.body
    const result = this._ctrl.deleteSongPlaylist(SongPlaylist)
    this._response.success(req, res, result, this._httpCode.created)
  } */
}

export default collectionPhotoRouter
