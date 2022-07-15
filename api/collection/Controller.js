// los controllers se encargan de realizar la lógica del negocio
// operaciones que necesita, calculos
class CollectionController {
  constructor (servicesCollection, collection) {
    this._service = servicesCollection
    this._entity = collection
  }

  getAllCollection () {
    const response = this._service.all('collection')
    return response
  }

  createCollection (collection) {
    const newCollection = new this._entity(collection)
    console.log('new collection to post isis', newCollection)
    const response = this._service.save('collection', newCollection)
    return response
  }
}

export default CollectionController
