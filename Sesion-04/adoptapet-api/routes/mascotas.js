var router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Todos las mascotas');
})
router.post('/', (req, res) => {
    res.send('Mascota creada');
})
router.put('/:id', (req, res) => {
    var id = req.params.id
    res.send(`Mascota ${id} modificada`);
})
router.delete('/:id', (req, res) => {
    var id = req.params.id
    res.send(`Mascota ${id} eliminada`);
})

module.exports = router;