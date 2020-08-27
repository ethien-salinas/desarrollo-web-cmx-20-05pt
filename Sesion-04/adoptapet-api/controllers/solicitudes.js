const Solicitud = require('../models/Solicitud')

function crearSolicitud(req, res) {
  var usuario = new Solicitud(req.body)
  res.status(201).send(usuario)
}
const obtenerSolicitudes = (req, res) => {
  var usuario1 = new Solicitud(1, 'Juan', 'Vega', 'juan@vega.com')
  var usuario2 = new Solicitud(2, 'Monserrat', 'Vega', 'mon@vega.com')
  res.send([usuario1, usuario2])
}
function modificarSolicitud(req, res) {
  var usuario1 = new Solicitud(req.params.id, 'Juan', 'Vega', 'juan@vega.com')
  var modificaciones = req.body
  usuario1 = { ...usuario1, ...modificaciones }
  res.send(usuario1)
}
function eliminarSolicitud(req, res) {
  res.status(200).send(`Solicitud ${req.params.id} eliminada`);
}

module.exports = {
  crearSolicitud,
  obtenerSolicitudes,
  modificarSolicitud,
  eliminarSolicitud
}