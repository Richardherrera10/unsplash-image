// empaquetar lo que vayamos a crear
import PhotoRouter from './Router.js'
import express from 'express'
import PhotoController from './Controller.js'
import { response } from '../../response/response.js'
import HttpCode from '../../response/httpcode.js'
import { Photo } from '../../entity/Photo.js'
import DataJson from '../../store/DataJson.js'
import { chekToken } from './secure.js'

export const photoModule = () => {
  const servicesPhoto = new DataJson()
  const photoController = new PhotoController(servicesPhoto, Photo)
  const photoRouter = new PhotoRouter(express.Router, photoController, response, HttpCode, chekToken) // chekToken)
  return photoRouter._router
}
