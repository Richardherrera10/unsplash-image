// los controllers se encargan de realizar la lógica del negocio
// operaciones que necesita, calculos
class PhotoController {
  constructor (servicesPhoto, photo) {
    this._service = servicesPhoto
    this._entity = photo
  }

  // song

  getAllPhoto () {
    const response = this._service.all('photo')
    return response
  }

  getPhotosByTag (tag) {
    tag = '#' + tag
    const response = this._service.getTag('photo', tag)
    return (response)
  }

  getPhotosById (id) {
    console.log('id a buscar', id)
    const response = this._service.getId('photo', id)
    return (response)
  }

  createNewPhoto (photo) {
    const newPhoto = new this._entity(photo)
    console.log('ctrl', newPhoto)
    const response = this._service.save('photo', newPhoto)
    return response
  }

  updatePhoto (photo) {
    const updatedPhoto = new this._entity(photo)
    updatedPhoto._id = photo.id
    console.log(`post a updatear ${updatedPhoto}`, updatedPhoto)
    const response = this._service.update('photo', updatedPhoto)
    return response
  }

  deletePhoto (photo) {
    const photoToDelete = new this._entity(photo)
    photoToDelete._id = photo.id
    const response = this._service.delete('photo', photoToDelete)
    return response
  }
}

export default PhotoController
