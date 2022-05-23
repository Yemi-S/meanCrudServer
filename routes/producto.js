//Rutas del servicio
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController')
// api/productos
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.put('/:id', productoController.actualizarProducto);
router.get('/:id', productoController.obtenerProducto);

module.exports = router;