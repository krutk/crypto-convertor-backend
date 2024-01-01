const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  coinmarketcapApiKey: process.env.COINMARKETCAP_API_KEY || '',
};
