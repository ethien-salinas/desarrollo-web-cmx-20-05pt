const mongoose = require('mongoose')

const SolicitudSchema = new mongoose.Schema({
  mascota: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'Mascota'
  },
  anunciante: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'Usuario'
  },
  solicitante: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'Usuario'
  },
  estado: {
    type: mongoose.Schema.Types.String,
    require: true,
    enum: ['aceptada', 'cancelada', 'pendiente']
  },
}, { timestamps: true })

mongoose.model('Solicitud', SolicitudSchema)