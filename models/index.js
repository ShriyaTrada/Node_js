const { Sequelize, DataTypes } = require('sequelize');
const mysqlConfig = require('../config/mysqlConfig');

const sequelize = new Sequelize(mysqlConfig.database, mysqlConfig.user, mysqlConfig.password, {
    host: mysqlConfig.host,
    dialect: 'mysql'
});

const User = require('./user')(sequelize, DataTypes);
const Product = require('./product')(sequelize, DataTypes);
const Cart = require('./cart')(sequelize, DataTypes);

// Define associations
User.hasMany(Cart);
Cart.belongsTo(User);
Product.hasMany(Cart);
Cart.belongsTo(Product);

module.exports = { sequelize, User, Product, Cart };
