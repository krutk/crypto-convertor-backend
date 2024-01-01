const express = require('express');
const cryptosController = require('../controllers/cryptosController');

const router = express.Router();

router.get('/', cryptosController.getCryptos);

module.exports = router;
