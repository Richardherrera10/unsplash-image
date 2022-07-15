import UserRouter from './Router.js'
import express from 'express'
import UserController from './Controller.js'
import { response } from '../../response/response.js'
import HttpCode from '../../response/httpcode.js'
// import { DataJson } from '../../store/DataJson.js'
import User from '../../entity/User.js'
import { helpers } from '../../lib/helpers.js'
import { validateCreteUser } from './validate.js'
import DataJson from '../../store/DataJson.js'

export const userModule = () => {
  const servicesUser = new DataJson()
  const userController = new UserController(servicesUser, User, helpers.encryptPassword, helpers.comparePassword, helpers.emailSender)
  const userRouter = new UserRouter(express.Router, userController, response, HttpCode, validateCreteUser)
  return userRouter._router
}
