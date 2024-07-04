const controlador = require('../controller/librosControllers');
const express = require('express');
const router = express.Router()
router.get('/', controlador.getLibros)
router.get('/:id', controlador.getLibrosByID)
router.post('/', controlador.createLibro)



module.exports = router;