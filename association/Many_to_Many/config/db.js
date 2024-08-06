// db.js
const { Sequelize } = require('sequelize');

// Replace 'your_db_name', 'your_username', 'your_password', and 'localhost' with your MySQL credentials
const sequelize = new Sequelize('asso_many', 'root', '08shriya03', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
