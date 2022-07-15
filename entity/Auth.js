export default class Auth {
  constructor (auth) {
    // llevar estado de autenticacion (si existe verdadero) si no mandar nada false por defecto
    this._auth = auth.state || false
    this._username = auth.username || ''
    this._email = auth.email || ''
    this._token = auth.token || ''
    // añadir rol (si va a tener lector basico o premium) o editor

    // mensaje
    this._message = auth.message || ''
  }
}
