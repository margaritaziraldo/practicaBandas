var express = require('express');
var router = express.Router();

// Requiero el controlador
const indexController = require('../controllers/indexController');

// Ruta para mostrar el listado de bandas
router.get('/', indexController.listadoBandas);

// Ruta para mostrar los detalles de una banda específica por nombre
router.get('/bandas/:nombre', indexController.detalleBanda);

// Ruta para mostrar el listado de bandas de un genero en especifico
router.get('/genero/:genero', indexController.mostrarPorGenero)


module.exports = router;
