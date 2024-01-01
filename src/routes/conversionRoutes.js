const express = require('express');
const conversionController = require('../controllers/conversionController');

const router = express.Router();

router.get('/', conversionController.convertCurrency);

module.exports = router;
