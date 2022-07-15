// los controllers se encargan de realizar la lógica del negocio
// operaciones que necesita, calculos
class SongPlaylistController {
  constructor (servicesCollectionPhoto, collectionPhoto) {
    this._service = servicesCollectionPhoto
    this._entity = collectionPhoto
  }

  createNewCollectionPhoto (collectionPhoto) {
    console.log('ctrl dato dado', collectionPhoto)
    const newCollectionPhoto = new this._entity(collectionPhoto)
    console.log('entidad', newCollectionPhoto)
    const response = this._service.save('collectionPhoto', newCollectionPhoto)
    return response
  }

  deleteSongPlaylist (collectionPhoto) {
    console.log('ctrl dato dado', collectionPhoto)
    const newCollectionPhoto = new this._entity(collectionPhoto)

    console.log('entidad', newCollectionPhoto)
    // const response = this._service.delete('songPlaylist', newSongPlaylist._id)
    // return response
  }
}

export default SongPlaylistController
