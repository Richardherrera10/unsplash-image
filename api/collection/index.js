import CollectionRouter from './Router.js'
import express from 'express'
import CollectionController from './Controller.js'
import { response } from '../../response/response.js'
import HttpCode from '../../response/httpcode.js'
import Collection from '../../entity/Collection.js'
import DataJson from '../../store/DataJson.js'
import { chekToken } from './secure.js'
export const collectionModule = () => {
  const servicesCollection = new DataJson()
  const collectionController = new CollectionController(servicesCollection, Collection)
  const collectionRouter = new CollectionRouter(express.Router, collectionController, response, HttpCode, chekToken)
  return collectionRouter._router
}
