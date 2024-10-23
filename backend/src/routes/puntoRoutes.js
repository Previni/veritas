const express = require('express');
const router = express.Router();
const puntoController = require('../controllers/puntoController');

router.get('/registros', puntoController.getRegistros);
router.post('/registrar', puntoController.registrarPonto);

module.exports = router;
