// models/UserGroup.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const UserGroup = sequelize.define('UserGroup', {
  UserId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  GroupId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Groups',
      key: 'id',
    },
  },
});

module.exports = UserGroup;
