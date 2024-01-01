const cryptosService = require('../services/cryptosService');

const getCryptos = async (req, res) => {
  try {
    const cryptosData = await cryptosService.getCryptos();

    res.json(cryptosData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getCryptos,
};
