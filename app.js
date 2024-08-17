const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const { sequelize } = require('./models');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const userRoutes = require('./routes/userRoutes'); // Add user routes
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();
app.use(express.json());
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // Limit each IP to 100 requests per windowMs
}));

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/users', userRoutes); // Add user route

// Error handling middleware
app.use(errorMiddleware);

const PORT = 3000;
app.listen(PORT, async () => {
    try {
        await sequelize.sync({ force: true }); // Sync models with database
        console.log(`Server is running on http://localhost:${PORT}`);
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
});
