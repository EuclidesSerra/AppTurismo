var express = require('express');
var router = express.Router();
var pontoturisticoController = require('../controls/pontosturisticosController.js');

router.get('/', pontoturisticoController.getPontoTuristico);
router.post('/', pontoturisticoController.createPontoTuristico);
router.get('/:id', pontoturisticoController.getonePontoTuristico);
router.put('/:id', pontoturisticoController.updatePontoTuristico);
router.delete('/:id', pontoturisticoController.deletePontoTuristico);

module.exports = router;