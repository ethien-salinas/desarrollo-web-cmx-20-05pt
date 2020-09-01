var route = require('express').Router()

route.get('/', (req, res) => {
  res.send('welcome to adoptapet api')
})

route.use('/anunciantes', require('./anunciantes'))
route.use('/mascotas', require('./mascotas'))
route.use('/solicitudes', require('./solicitudes'))
route.use('/usuarios', require('./usuarios'))

module.exports = route