// los controllers se encargan de realizar la lógica del negocio
// operaciones que necesita, calculos
class UserController {
  constructor (servicesUser, user, hashPassword, comparePassword, sendEmail) {
    this._service = servicesUser
    this._entity = user
    this._hashPassword = hashPassword
    this._comparePassword = comparePassword
    this._sendEmail = sendEmail
  }

  getAllUser () {
    const response = this._service.all('user')
    return response
  }

  createUser (user) {
    const newUser = new this._entity(user)
    newUser.encryptPassword(user.password, this._hashPassword)
    const response = this._service.save('user', newUser)
    console.log('nuevo user creado', newUser)
    // this._sendEmail(newUser._email, newUser._username)
    return response
  }
}

export default UserController
