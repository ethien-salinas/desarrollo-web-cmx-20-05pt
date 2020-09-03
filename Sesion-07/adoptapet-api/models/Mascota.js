const mongoose = require('mongoose')

const MascotaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    require: true
  },
  categoria: {
    type: String,
    enum: ['perro', 'gato', 'otro']
  },
  fotos: [String],
  descripcion: {
    type: String,
    require: true
  },
  anunciante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  ubicacion: String,
  estado: {
    type: String,
    enum: ['adoptado', 'disponible', 'pendiente']
  }
})

mongoose.model('Mascota', MascotaSchema)