const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const couponRoutes = require('./routes/couponRoutes');
const { errorHandler } = require('./middlewares/errorMiddleware');

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/api/coupons', couponRoutes);

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
