const axios = require('axios');
const config = require('../config');

const getCryptos = async () => {
  try {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      params: {
        start: 1,
        limit: 100,
        convert: 'USD',
      },
      headers: {
        'X-CMC_PRO_API_KEY': config.coinmarketcapApiKey,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error('Error fetching cryptocurrencies:', error);
    throw new Error('Failed to fetch cryptocurrencies');
  }
};

module.exports = {
  getCryptos,
};
