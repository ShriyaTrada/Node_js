// index.js
const express = require('express');
const sequelize = require('../Many_to_Many/config/db');
const userRoutes = require('./routes/userRoutes');
const groupRoutes = require('./routes/groupRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/groups', groupRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
