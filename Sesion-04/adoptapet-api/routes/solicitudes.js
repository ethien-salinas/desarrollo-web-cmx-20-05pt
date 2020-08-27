var router = require('express').Router();
const {
    crearSolicitud,
    eliminarSolicitud,
    modificarSolicitud,
    obtenerSolicitudes
} = require('../controllers/solicitudes')

router.get('/', obtenerSolicitudes)
router.post('/', crearSolicitud)
router.put('/:id', modificarSolicitud)
router.delete('/:id', eliminarSolicitud)

module.exports = router;