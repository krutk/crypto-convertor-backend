const express = require('express');
const axios = require('axios');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3001;

const COINMARKETCAP_API_KEY = 'd96b4ca3-9ad1-417e-97e9-41960c90514e'; // Replace with your Coinmarketcap API key

//Cors middleware
app.use(cors())

// API endpoint to fetch top 100 cryptocurrencies
app.get('/api/top-cryptos', async (req, res) => {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            params: {
                start: 1,
                limit: 100,
                convert: 'USD',
            },
            headers: {
                'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY,
            },
        });
        console.log("response: " + response.data.data)
        res.json(response.data.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// API endpoint for currency conversion
app.get('/api/convert', async (req, res) => {
    try {
        const { sourceCrypto, amount, targetCurrency } = req.query;
        console.log("Converting...", sourceCrypto, amount, targetCurrency);

        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/tools/price-conversion', {
            params: {
                amount,
                symbol: sourceCrypto,
                convert: targetCurrency,
            },
            headers: {
                'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY,
            },
        });
        console.log("resss-->", response)
        const convertedAmount = response.data.data.quote[targetCurrency].price;

        res.json({ convertedAmount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});