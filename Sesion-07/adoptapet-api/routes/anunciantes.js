var router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Todos los anunciantes');
})
router.post('/', (req, res) => {
  res.send('Anunciante creado');
})
router.put('/:id', (req, res) => {
  var id = req.params.id
  res.send(`Anunciante ${id} modificado`);
})
router.delete('/:id', (req, res) => {
  var id = req.params.id
  res.send(`Anunciante ${id} eliminado`);
})

module.exports = router;