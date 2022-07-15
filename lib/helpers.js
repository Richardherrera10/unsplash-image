// crear configuraciones de librerias a utilizar
// al cambiar librerias solo se cambia este archivo
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { config } from '../config/default.js'
import nodemailer from 'nodemailer'

export const helpers = {
  encryptPassword: (password) => {
    return bcrypt.hashSync(password, 10)
  },
  comparePassword: async (password, hashPassword) => {
    try {
      const result = await bcrypt.compare(password, hashPassword)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  generateToken: (idUser) => {
    return jwt.sign({
      id: idUser
    }, config.jwt.secret, {
      expiresIn: '1h'
    })
  },
  // sirve para hacer el middleware
  verifyToken: (token) => {
    return jwt.verify(token, config.jwt.secret)
  },
  emailSender: (email, user) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.nodemailer.email,
        pass: config.nodemailer.password
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    const mailOptions = {
      from: 'richard.andre.herrera@gmail.com',
      to: email,
      subject: 'Mensaje de Bienvenida',
      text: `Bienvenido a SpotPlay! Su nombre de usuario es ${user}`
    }

    transporter.sendMail(mailOptions, function (err, success) {
      if (err) {
        console.log(err)
      } else {
        console.log('email sent sucessfully!')
      }
    })
  }
  /*   transporterInstance: () => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.nodemailer.email,
        pass: config.nodemailer.password
      },
      tls: {
        rejectUnauthorized: false
      }
    })
    return transporter
  },
  mailDetails: (email) => {
    const mailOptions = {
      from: 'richard.andre.herrera@gmail.com',
      to: email,
      subject: 'testing',
      text: 'Correo de ejemplo'
    }
    return mailOptions
  },
  sendEmail: () => {
    const newTransporter = transporterInstance
    const newMailOptions = mailDetails
    newTransporter.sendMail(newMailOptions, function (err, success) {
      if (err) {
        console.log(err)
      } else {
        console.log('email sent sucessfully!')
      }
    })
  } */

}
