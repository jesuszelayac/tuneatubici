const { Router } = require('express');
const concursoController = require('../controllers/concursoController')
const votoRouter = Router();

votoRouter.post('/contVoto', concursoController.contadorVotos);

module.exports = votoRouter;