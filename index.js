import express from 'express'

const app = express()
const port = 3000

app.get('/soyunaruta', (request, response) => {
  // lo que se le envía al servidor
  console.log(request)
  // lo que el retorna
  response.send('request received')
})
app.listen(port, function () {
  console.log('Servidor iniciado')
})
