const conversionService = require('../services/conversionService');

const convertCurrency = async (req, res) => {
  try {
    const { sourceCrypto, amount, targetCurrency } = req.query;

    const convertedAmount = await conversionService.convertCurrency(sourceCrypto, amount, targetCurrency);

    res.json({ convertedAmount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  convertCurrency,
};
