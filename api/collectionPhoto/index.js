// empaquetar lo que vayamos a crear
import CollectionPhotoRouter from './Router.js'
import express from 'express'
import CollectionPhotoController from './Controller.js'
import { response } from '../../response/response.js'
import HttpCode from '../../response/httpcode.js'
import { CollectionPhoto } from '../../entity/CollectionPhoto.js'
import DataJson from '../../store/DataJson.js'

export const collectionPhotoModule = () => {
  const servicesCollectionPhoto = new DataJson()
  const collectionPhotoController = new CollectionPhotoController(servicesCollectionPhoto, CollectionPhoto)
  const collectionPhotoRouter = new CollectionPhotoRouter(express.Router, collectionPhotoController, response, HttpCode)
  return collectionPhotoRouter._router
}
