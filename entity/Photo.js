export class Photo {
  constructor (photo) {
    this._id = null
    this.name = photo.name
    this._url = photo.url
    this._etiqueta = photo.etiqueta
    this._idUser = photo.idUser
  }
}
