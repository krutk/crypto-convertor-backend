const express = require('express');
const cors = require('cors');
const cryptosRoutes = require('./routes/cryptosRoutes');
const conversionRoutes = require('./routes/conversionRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/cryptos', cryptosRoutes);
app.use('/api/convert', conversionRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
