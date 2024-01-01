const axios = require('axios');
const config = require('../config');

const convertCurrency = async (sourceCrypto, amount, targetCurrency) => {
  try {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/tools/price-conversion', {
      params: {
        amount,
        symbol: sourceCrypto,
        convert: targetCurrency,
      },
      headers: {
        'X-CMC_PRO_API_KEY': config.coinmarketcapApiKey,
      },
    });

    return response.data.data.quote[targetCurrency].price;
  } catch (error) {
    console.error('Error converting currency:', error);
    throw new Error('Failed to convert currency');
  }
};

module.exports = {
  convertCurrency,
};
